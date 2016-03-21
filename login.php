<?php  
	session_start();
	require('includes/db.php');

	if (isset($_POST['username']) && 
		isset($_POST['password'])) {

		$username = $_POST['username'];
		$password = $_POST['password'];
		$pass_enc = md5($password);

		$query = "SELECT `username`, `password` FROM `students` WHERE `username` = '".mysql_real_escape_string($username)."' AND 
		`password` =  '".mysql_real_escape_string($pass_enc)."' ";
		$query_run = mysql_query($query);

		$records = mysql_num_rows($query_run);
		if ($records!=0) {

			while ($row = mysql_fetch_assoc($query_run)) {
				$dbid = $row['id'];
				$dbusername = $row['usename'];


				$_SESSION['id']=$dbid;
				$_SESSION['username']= $dbusername;

				header('Location: main/customcontent/jhs2/integratedscience/energy.html');//this page will be changed later.

			}
			
		}else{
			echo 'Wrong username or Password.';
		}

		
	}
?>