<?php
include 'partial/_dbconnect.php';

if($_SERVER["REQUEST_METHOD"] == "POST")
{
	$file = $_FILES["filename"]["name"];
	$tm = $_FILES["filename"]["temp_name"];

	move_uploaded_file($tm, "assignment/".$file);

	$sql = "INSERT INTO `classroom`(`ID`, `a_number`) VALUES ('187037','$file')";

	$result = mysqli_query($conn, $sql);
}

?>