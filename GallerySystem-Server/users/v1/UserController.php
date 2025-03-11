<?php 
include(__DIR__."/../../Utils/header.php");

require(__DIR__."/../../Models/User.php");



class UserController{

    static function registerUser(){

        $data = json_decode(file_get_contents("php://input"),true);
        
      if(empty($data['email']) || empty($data['password']) || empty($data['username'])){
         return json_encode(["success"=>false,"message"=>"fill all the Blanks !!"]);
      }
        UserSkeleton::createUser($data['username'], $data['email'],$data['password']);
        
        if(User::saveUser()){
          echo json_encode(User::getUserInfo());
        }
    }

    
}    

?>