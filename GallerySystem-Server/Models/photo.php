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
        public static function deletePhoto($photo_id){
            global $conn;
            $sql = "DELETE FROM photos WHERE photo_id = ?;";
            $stmt = $conn->prepare($sql);
            $stmt->bind_param("i",$photo_id);
            if($stmt->execute()){
                return true;
            }
            return false;
        }
        public static function uploadimage(){
            if (!isset($_FILES['image'])) {
                echo json_encode(["success" => false, "message" => "No image uploaded"]);
                exit;
            }
            if (!isset($_POST['title']) || !isset($_POST['description']) ||!isset($_POST['tag']) ||!isset($_POST['user_id']) ) {
                echo json_encode(["success" => false, "message" => "fill all the blank"]);
                exit;
            }
            // move the image to images folder
            $image = $_FILES['image'];
            $uploadDir = __DIR__."/../images/";
            $filename = uniqid() . "_" . basename($image["name"]);
            $uploadPath = $uploadDir . $filename;
            if (!is_dir($uploadDir)) {
                mkdir($uploadDir, 0777, true);
            }        
            // Move the uploaded file to the uploads folder
            if (move_uploaded_file($image["tmp_name"], $uploadPath)) {
                // Store only the image URL in the database
                $imageUrl = "http://localhost/" . $uploadPath;
                return  $imageUrl;
                   }
        }
}




?>