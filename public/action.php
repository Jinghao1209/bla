<?php

session_start();
header('Content-Type: application/json');
$brk = true;
$data = json_decode(file_get_contents("php://input"), true);
$sqlselect = "SELECT * FROM db;";
$conn = mysqli_connect("localhost", "root", "", "test_db");
// Check connection
if (mysqli_connect_errno()) {
    echo "Failed to connect to MySQL: " . mysqli_connect_error();
    exit();
}

function a($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}
if (isset($data['id']) && isset($data['click'])) {
    $_SESSION['id'] = a($data['id']);
    $data['click'] = a($data['click']);
    if (isset($_SESSION['click'])) {
        if (intval($data['click']) - intval($_SESSION['click']) == 1) {
            $_SESSION['click'] = $data['click'];
        }
    } else {
        $_SESSION['click'] = 1;
    }

    $info = file_get_contents("https://www.iplocate.io/api/lookup/");
    $json = json_decode($info);
    $_SESSION['country'] = $json->country;

    $result = mysqli_query($conn, $sqlselect);
    while ($row = mysqli_fetch_assoc($result)) {
        if ($row['id'] === $_SESSION['id']) {
            $sql = "UPDATE db SET click='" . $_SESSION['click'] . "' WHERE id='" . $_SESSION['id'] . "';";
            mysqli_query($conn, $sql);
            $brk = false;
            break;
        }
    }
    if ($brk) {
        $sql = "INSERT INTO db (id, click, country) VALUES ('" . $_SESSION['id'] . "', '" . $_SESSION['click'] . "','" . $_SESSION['country'] . "');";
        mysqli_query($conn, $sql);
    }
}
$find = false;
$result = mysqli_query($conn, $sqlselect);
while ($row = mysqli_fetch_assoc($result)) {
    if (isset($_SESSION['id'])) {
        if ($row['id'] === $_SESSION['id']) {
            $click = $row['click'];
            echo json_encode(['click' => intval($click)]);
            $find = true;
            break;
        }
    }
}
if (!$find) {
    echo json_encode(['click' => 0]);
}