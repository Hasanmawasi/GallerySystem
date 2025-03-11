<?php 

class PhotoSkeleton{
    public static $photoId;
    public static $title;
    public static $description;
    public static $photoTag;
    public static $userId;
    public static $photoBase;

    public function createPhoto($photoBase,$title,$description,$photoTag,$userId)
    {
        self::$photoBase =$photoBase;
        self::$title =$title;
        self::$description =$description;
        self::$photoTag =$photoTag;
        self::$userId =$userId;
    }
    public static function setPhotId($id){
        self::$photoId = $id;
    }

    public static function getPhotoId()  {
        return self::$photoId;
    }
}

?>