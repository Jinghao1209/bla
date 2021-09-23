<?php

$sql = "SELECT SUM(click) FROM db;";
$conn = mysqli_connect("localhost", "root", "", "test_db");
// Check connection
if (mysqli_connect_errno()) {
    echo "Failed to connect to MySQL: " . mysqli_connect_error();
    exit();
}
$result = mysqli_query($conn, $sql);
while ($row = mysqli_fetch_assoc($result)) {
    echo "{$row['SUM(click)']}";
}
