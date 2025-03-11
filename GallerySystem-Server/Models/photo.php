<?php 
require("photoSkeleton.php");

require_once (__DIR__."/../connection/connection.php");

class Photo extends PhotoSkeleton{

        public static function savePhoto(){
            global $conn;
            $sql="INSERT INTO photos(photo_url,photo_title,photo_desc,photo_tag,user_id) VALUES(?,?,?,?,?);";
            $stmt = $conn->prepare($sql);
            $stmt->bind_param("ssssi",self::$photo_url,self::$title,self::$description,self::$photoTag,self::$userId);
            if($stmt->execute()){
                return true;
            }
            return false;
        }

        public static function getPhotos($userid){
            global $conn;
            $sql = "SELECT * FROM  photos WHERE user_id = ?;";
            $stmt = $conn->prepare($sql);
            $stmt->bind_param("i",$userid);
            if($stmt->execute()){
                $result = $stmt->get_result();
                if($result->num_rows >0){
                    $rows = [];
                    while ($row = $result->fetch_assoc()) {
                        $rows[] = $row;
                    }
                    return $rows;
                }
            }
            return false;
        }
}




?>