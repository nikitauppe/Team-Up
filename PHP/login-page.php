<?php
include 'partial/_dbconnect.php';

if($_SERVER["REQUEST_METHOD"] == "POST")
{
	$userid = $_POST["userid"];
	$password = $_POST["password"];

	$sql = "SELECT * FROM `team-up_member` WHERE Enrolment_Number = '$userid' AND Password='$password'";
	
	$result = mysqli_query($conn, $sql);

	$row = mysqli_fetch_array($result, MYSQLI_ASSOC);
	
	$count = mysqli_num_rows($result);

	if($count == 1){
		header('Location: http://localhost/TeamUp/Home-Page.html');
	}
	else
	{
		echo "<h1 align=center>Invalid Username or Password.</h1>";
	}
}
?>