<?php 
include(__DIR__."/../../connection/connection.php");

$query = (
    "CREATE TABLE IF NOT EXISTS `photos` (
  `photo_id` bigint(20) NOT NULL AUTO_INCREMENT,
  `photo_title` varchar(255) NOT NULL,
  `photo_desc` text NOT NULL,
  `photo_url` longtext NOT NULL,
  `user_id` bigint(11) NOT NULL,
  `photo_tag` varchar(255) NOT NULL,
   PRIMARY KEY (`photo_id`),
   KEY `photo_user` (`user_id`),
   CONSTRAINT `photo_user` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE
)"
);
$stmt = $conn -> prepare($query);
 if($stmt->execute()){
  echo "successfully created!!!";
 }
?>