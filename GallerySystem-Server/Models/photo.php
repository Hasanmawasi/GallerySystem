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
        public static function getSpPhoto($photo_id){
            global $conn;
            $sql = "SELECT * FROM photos WHERE photo_id = ?;";
            $stmt = $conn->prepare($sql);
            $stmt->bind_param("i",$photo_id);
            if($stmt->execute()){
                $result = $stmt->get_result();
                if($result->num_rows > 0){
                    return $result->fetch_assoc();
                }
            }
            return false;
        }
        public static function updatePhoto($id,$title,$tag,$desc){
            global $conn;
            $sql = "UPDATE photos SET photo_title=? ,photo_tag=? ,photo_desc=? WHERE photo_id = ?;";
            $stmt = $conn->prepare($sql);
            $stmt->bind_param("sssi",$title,$tag,$desc,$id);
            if($stmt->execute()){
                return true;
            }
            return false;

        }
        public static function uploadimage($dataImg){
            
            $base64String =$dataImg;
            $dataParts = explode(',', $base64String);
            
            if (count($dataParts) !== 2) {
                echo json_encode(["success" => false, "message" => "Invalid image format"]);
                exit;
            }
        
            // move the image to images folder
            // extract mime type and image data
            $mimeTypePart = $dataParts[0];
            $imageData = $dataParts[1];
    
            // get mime type of photo
            $mimeType = str_replace('data:', '', explode(';', $mimeTypePart)[0]);
            
            // allowed type of images
            $allowedMimeTypes = [
                'image/png' => 'png',
                'image/jpeg' => 'jpg',
                'image/gif' => 'gif',
                'image/webp' => 'webp'
            ];
            
            if (!isset($allowedMimeTypes[$mimeType])) {
                echo json_encode(["success" => false, "message" => "Unsupported image type"]);
                exit;
            }

            // decode base64 data
            $decodedImage = base64_decode($imageData, true);
            if ($decodedImage === false) {
                echo json_encode(["success" => false, "message" => "Failed to decode image"]);
                exit;
            }

            // create upload directory if it doesn't exist
            $uploadDir = __DIR__."/../images/";
            if (!is_dir($uploadDir)) {
                mkdir($uploadDir, 0777, true);
            }

            // generate unique filename for each phto
            $extension = $allowedMimeTypes[$mimeType];
            $filename = uniqid() . '.' . $extension;
            $uploadPath = $uploadDir . $filename;

            // save the image file
            if (file_put_contents($uploadPath, $decodedImage) === false) {
                echo json_encode(["success" => false, "message" => "Failed to save image"]);
                exit;
            }
            // add file path
            $imageUrl = "http://localhost/GallerySystem/GallerySystem-Server/images/" . $filename;
            return $imageUrl;
          
        }
}
        





?>