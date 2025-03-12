<?php 
include(__DIR__."/../../Utils/header.php");

require(__DIR__."/../../Models/photo.php");
require_once (__DIR__."/../../connection/connection.php");
require_once(__DIR__."/../../Utils/checkempty.php");

class PhotoController{

public static function addPhoto(){
    global $conn;
    //get the image url and add it ot images file
    if( $imageUrl = Photo::uploadimage()){
      
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

    checkEmpty(empty($data['user_id']));

     echo json_encode(["success"=>true,"photos"=> Photo::getPhotos($data['user_id'])]);
}



public static function deleteSpecPhoto(){
    $data = json_decode(file_get_contents("php://input"),true);
    checkEmpty(empty($data['user_id']));
    if(Photo::deletePhoto($data['photo_id'])){
        echo json_encode(["success"=>true]);
        return;
    }
}

}