<?php
require("UserSkeleton.php");
require_once (__DIR__."/../connection/connection.php");

class User extends UserSkeleton{

    // save a user in the database
    public static function saveUser(){
        global $conn;
        $sql = "INSERT INTO users(user_name,email,password) VALUES(?,?,?);";
        self::$email;
        if(self::findUser(self::$email)){
            echo json_encode(["success"=>false,"message"=>"User Email is already exist!"]);
            return;           
        }
        $hashed_password = hash('sha256',self::$password);
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("sss",self::$username,self::$email,$hashed_password);
        if($stmt->execute()){
            $sqlID = "select user_id from users where email = ?;";
            $stmtID=$conn->prepare($sqlID);
            $stmtID->bind_param("s",self::$email);
            if($stmtID-> execute()){
                $result = $stmtID->get_result();
                $row = $result->fetch_assoc();
                self::setUserId($row['user_id']);
            }
            return true;
        }
    }
    // search if there is an email in the database
    public static function findUser($email){
        global $conn;
        $sql = "SELECT * FROM users WHERE email = ?";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("s",$email);
        if($stmt->execute()){
            $result= $stmt->get_result();
            if($result-> num_rows >0){
                return true;
            }
            return false;
        }
    }
    // function to login user
    public static function loginUser($email,$enteredPassword){
        global $conn;
        $sql = "SELECT * FROM users WHERE email = ?";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("s",$email);
        if($stmt->execute()){
            $result= $stmt->get_result();
            if($result-> num_rows >0){
                $row =$result->fetch_assoc();
                if(self::verifyPassword($enteredPassword,$row["password"])){
                   echo json_encode(["success"=>true,"message"=>"user loged"]);
                    return;
                }
                echo json_encode(["success"=>false,"message"=>"wrong password"]);
                return;
            }
            echo json_encode(["success"=>false,"message"=>"email not found"]);
            return;
        }
    }

    // hash a password and compare it to hashed password
    public function verifyPassword($enteredPassword, $storedPassword){
        $hash_password = hash('sha256',$enteredPassword);
        if($hash_password == $storedPassword){
            return true;
        }
        return false;
    }
    
}

?>