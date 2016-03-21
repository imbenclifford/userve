<?php 
/* By Ibrahim Samad.

DEFINE('HOST', 'localhost');
DEFINE('USERNAME', 'root');
DEFINE('PASSWORD', '');
DEFINE('DB_NAME', 'userve');

$con = new mysqli(HOST,USERNAME,PASSWORD,DB_NAME);


if (mysqli_connect_error()){
	echo "Could not connect to MySql. Please try again";
	exit();
}
*/
$con = mysql_connect('localhost', 'root', '');
$db = mysql_select_db('userve');





?>