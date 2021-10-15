<?php

session_start();
$brk = true;
function a($data){
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}
if (isset($_POST['id']) && isset($_POST['click'])) {
    $_SESSION['id'] = a($_POST['id']);
    $_POST['click'] = a($_POST['click']);
    if (isset($_SESSION['click'])) {
        if (intval($_POST['click']) - intval($_SESSION['click']) == 1) {
            $_SESSION['click']=$_POST['click'];
        } else {
            $_SESSION['click'] = intval($_SESSION['click']) + 1;
        }
    } else {
        $_SESSION['click'] = 1;
    }

    if (isset($_SERVER['HTTP_CLIENT_IP']))
        $ip = $_SERVER['HTTP_CLIENT_IP'];
    elseif (isset($_SERVER['HTTP_X_FORWARDED_FOR']))
        $ip = $_SERVER['HTTP_X_FORWARDED_FOR'];
    else
        $ip = $_SERVER['REMOTE_ADDR'];
    $info = file_get_contents("https://www.iplocate.io/api/lookup/$ip/");
    $json = json_decode($info);
    $_SESSION['country'] = $json->country;

    $conn = mysqli_connect("localhost", "root", "", "test_db");
    // Check connection
    if (mysqli_connect_errno()) {
        echo "Failed to connect to MySQL: " . mysqli_connect_error();
        exit();
    }
    
    $sqlselect = "SELECT * FROM db;";
    $result = mysqli_query($conn, $sqlselect);
    while ($row = mysqli_fetch_assoc($result)) {
        if ($row['id'] === $_SESSION['id']) {
            $sql = "UPDATE db SET click='".$_SESSION['click']."' WHERE id='".$_SESSION['id']."';";
            mysqli_query($conn, $sql);
            $brk = false;
            break;
        }
    }
    if ($brk) {
        $sql = "INSERT INTO db (id, click, country) VALUES ('".$_SESSION['id']."', '".$_SESSION['click']."','".$_SESSION['country']."');";
        mysqli_query($conn, $sql);
    }
}