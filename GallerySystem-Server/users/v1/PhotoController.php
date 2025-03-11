<?php 
include(__DIR__."/../../Utils/header.php");

require(__DIR__."/../../Models/photo.php");
require_once (__DIR__."/../../connection/connection.php");

class PhotoController{

public static function addPhoto(){
    global $conn;
    if( $imageUrl = self::uploadimage()){
      
        Photo::createPhoto($imageUrl,$_POST['title'],$_POST['description'],$_POST['tag'],$_POST['user_id']);
       if(Photo::savePhoto()){
        echo json_encode(["success" => TRUE, "message" => "photo uploaded"]);
       }  
    } else {
        echo json_encode(["success" => false, "message" => "Upload failed"]);
    }
}

public static function getUserPhoto(){
    $data = json_decode(file_get_contents("php://input"),true);

    if(empty($data['user_id'])){

        return json_encode(["success"=>false,"message"=>"fill all the Blanks !!"]);

      }
     echo json_encode(["success"=>true,"photos"=> Photo::getPhotos($data['user_id'])]);
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
    // ========
    // move the image to images folder
    $image = $_FILES['image'];
    $uploadDir = __DIR__."/../../images/";
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