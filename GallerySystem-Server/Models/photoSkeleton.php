<?php 

class PhotoSkeleton{
    public static $photoId;
    public static $title;
    public static $description;
    public static $photoTag;
    public static $userId;
    public static $photo_url;

    public static function createPhoto($photo_url,$title,$description,$photoTag,$userId)
    {
        self::$photo_url =$photo_url;
        self::$title =$title;
        self::$description =$description;
        self::$photoTag =$photoTag;
        self::$userId =$userId;
    }
    public static function setPhotoId($id){
        self::$photoId = $id;
    }

    public static function getPhotoId()  {
        return self::$photoId;
    }
    public static function setPhotoUrl($photo_url){
        self::$photo_url = $photo_url;
    }
    public static function getPhotoUrl()  {
        return  self::$photo_url;
    }
}

?>