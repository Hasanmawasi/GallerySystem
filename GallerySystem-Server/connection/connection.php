<?php 
$db_server = "localhost";
$db_user="root";
$db_password = "";
$db_databasename = "gallery";

// $conn= "";


try {
 $conn = new mysqli($db_server, $db_user,$db_password, $db_databasename);
   
} catch (mysqli_sql_exception) {
    echo "failed to connnect!";
}

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}


?>