<?php 
	session_start();
	require('includes/db.php');


	if (isset($_POST['first_name']) &&
		isset($_POST['last_name'])&&
		isset($_POST['username'])&&
		isset($_POST['form'])&&
		isset($_POST['password'])&&
		isset($_POST['confirm_pass'])

	 ) {
		
		$first_name = $_POST['first_name'];
		$last_name =  $_POST['last_name'];
		$username =  $_POST['username'];
		$form =   $_POST['form'];
		$password = $_POST['password'];

		$confirm_pass = $_POST['confirm_pass'];

		$pass_enc = md5($confirm_pass);

		/*check to make sure user doee not register twice here*/
		$query_check = "SELECT `id`, `username` FROM `students` WHERE `username` = '".mysql_real_escape_string($username)."' ";
		$query_run = mysql_query($query_check);

		$records = mysql_num_rows($query_run);
		if ($records!=0) {

			while ($row = mysql_fetch_assoc($query_run)) {
				$dbid = $row['id'];
				$dbusername = $row['username'];


			}

			echo 'Username already exist!'; 	/*end of check*/
			
		}else{

			$query = " INSERT INTO `students` 
			VALUES('', '".mysql_real_escape_string($first_name)."', 
			'".mysql_real_escape_string($last_name)."', 
			'".mysql_real_escape_string($username)."', 
			'".mysql_real_escape_string($form)."', 
			'".mysql_real_escape_string($pass_enc)."')";
		
			$query_run = mysql_query($query);
			if ($query_run) {
				header('Location: welcome.php'); // this page will be changed later
			}else{
				echo 'Sorry, we could not register you.';
			}		}




	







		
		
			


	}
?>