<?php
include 'partial/_dbconnect.php';

if($_SERVER["REQUEST_METHOD"] == "POST")
{
	$fname = $_POST["FName"];
	$lname = $_POST["LName"];
	$dept = $_POST["Department"];
	$phone = $_POST["Phone"];
	$enrolment = $_POST["Enrolment"];
	$password = $_POST["Password"];
	$cpassword = $_POST["CPassword"];

	if(($username != "" || $password != "") && $password == $cpassword)
	{
		$sql = "INSERT INTO `team-up_member`(`First_Name`, `Last_Name`, `Department`, `Phone_Number`, `Enrolment_Number`, `Password`) VALUES ('$fname','$lname','$dept','$phone','$enrolment','$password')";
	
		$result = mysqli_query($conn, $sql);

		header('Location: http://localhost/TeamUp/Login-Page.html');
		exit();
	}
	$conn.close();
}

?>