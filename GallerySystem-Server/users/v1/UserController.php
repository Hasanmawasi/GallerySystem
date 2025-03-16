<?php 
include(__DIR__."/../../Utils/header.php");

require(__DIR__."/../../Models/User.php");

require_once(__DIR__."/../../Utils/checkempty.php");

class UserController{
  
    static function registerUser(){

       $data = json_decode(file_get_contents("php://input"),true);

      //method to check empty data
       checkEmpty($data['email'],$data['password'],$data['username']);

        UserSkeleton::createUser($data['username'], $data['email'],$data['password']);
        
        if(User::saveUser()){
          echo json_encode(["success"=>true,"user"=>User::getUserInfo()]);
        }
    }

    static function login(){
      $data = json_decode(file_get_contents("php://input"),true);
      //method to check empty data
        checkEmpty($data['email'],$data['password']);

         User::loginUser($data['email'],$data['password']);

    }
    public static function validateUser(){
      $data = json_decode(file_get_contents("php://input"),true);
      //method to check empty data
        checkEmpty($data['user_id']);
       if(User::validateID($data['user_id'])){
        echo json_encode(["success"=>true]);
        return;
       }
    }
}   

?>