<?php
header('Content-Type: application/json');

$conn = mysqli_connect("localhost", "root", "", "test_db");
// Check connection
if (mysqli_connect_errno()) {
    echo "Failed to connect to MySQL: " . mysqli_connect_error();
    exit();
}

$sql = "SELECT click, country FROM db;";
$result = mysqli_query($conn, $sql);
$sqlall = [];
while ($row = mysqli_fetch_assoc($result)) {
    $sqlall[$row["country"]] = intval($sqlall[$row["country"]]) + intval($row["click"]);
}
echo json_encode($sqlall);