<?php 
include(__DIR__."/../../Utils/header.php");

require(__DIR__."/../../Models/photo.php");
require_once (__DIR__."/../../connection/connection.php");
require_once(__DIR__."/../../Utils/checkempty.php");

class PhotoController{

public static function addPhoto(){
    global $conn;
    $data = json_decode(file_get_contents("php://input"),true);

    checkEmpty($data['image'],$data['title'],$data['description'],$data['tag'],$data['user_id']);
   
    //get the image url and add it ot images file
    if( $imageUrl = Photo::uploadimage($data['image'])){
      
     Photo::createPhoto($imageUrl,$data['title'],$data['description'],$data['tag'],$data['user_id']);
       if(Photo::savePhoto()){
        echo json_encode(["success" => TRUE, "message" => "photo uploaded"]);
       }  
    } else {
        echo json_encode(["success" => false, "message" => "Upload failed"]);
    }
}

public static function getUserPhoto(){
    $data = json_decode(file_get_contents("php://input"),true);

    checkEmpty($data['user_id']);

     echo json_encode(["success"=>true,"photos"=> Photo::getPhotos($data['user_id'])]);
}



public static function deleteSpecPhoto(){
    $data = json_decode(file_get_contents("php://input"),true);
    checkEmpty($data['photo_id']);
    if(Photo::deletePhoto($data['photo_id'])){
        echo json_encode(["success"=>true]);
        return;
    }
}
   public static function getPhoto(){
    $data = json_decode(file_get_contents("php://input"),true);
    checkEmpty($data['photo_id']);
    if($photo=Photo::getSpPhoto($data['photo_id'])){
        echo json_encode(["success"=>true,"photo"=>$photo]);
        return ;
    }
    echo json_encode(["success"=>false,"message"=>"photo not found"]);
   }
   public static function updatePhoto(){
      $data = json_decode(file_get_contents("php://input"),true);
      checkEmpty($data['photo_id'],$data['tag'],$data['desc'],$data['title']);
      if(Photo::updatePhoto($data['photo_id'],$data['title'],$data['tag'],$data['desc'])){
        echo json_encode(["success"=>true]);
        return;
      }
      echo json_encode(["success"=>false]);
      return;
   }
}