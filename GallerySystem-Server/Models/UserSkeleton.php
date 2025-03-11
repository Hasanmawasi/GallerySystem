<?php 
class UserSkeleton {
    public static $userid;
    public static $username;
    public static $email;
    public static $password;


    public static function createUser($username, $email, $password)
    {
        self::$username = $username;
        self::$email = $email;
        self::$password = $password;

    }
    public static function setUserId($id){
        self::$userid = $id;
    }

    public static function getUserId()  {
        return self::$userid;
    }
    public static function getUserInfo(){
        return ["username"=>self::$username,
                   "email"=>self::$email,
                "user_id"=>self::$userid ];
    }
}


?>