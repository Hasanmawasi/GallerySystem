<?php
include(__DIR__."/../../connection/connection.php");

$query = (
    "CREATE TABLE IF NOT EXISTS `users` (
  `user_id` bigint(20) NOT NULL AUTO_INCREMENT,
  `user_name` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  PRIMARY KEY (`user_id`),
   UNIQUE KEY `email` (`email`)
);"
);
$stmt = $conn -> prepare($query);
if($stmt->execute()){
    echo "successfully created!!!";
   }
?>