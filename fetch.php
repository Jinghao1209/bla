<?php
session_start();
$find = false;
$conn = mysqli_connect("localhost", "root", "", "test_db");
// Check connection
if (mysqli_connect_errno()) {
    echo "Failed to connect to MySQL: " . mysqli_connect_error();
    exit();
}
$sqlselect = "SELECT * FROM db;";
$result = mysqli_query($conn, $sqlselect);
while ($row = mysqli_fetch_assoc($result)) {
    if (isset($_SESSION['id'])) {
        if ($row['id'] === $_SESSION['id']) {
            echo $row['click'];
            $find = true;
            break;
        }
    }
}
if (!$find) {
    echo 0;
}