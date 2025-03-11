<?php 

class PhotoSkeleton{
    private static $photoId;
    private static $title;
    private static $description;
    private static $photoTag;
    private static $userId;
    private static $photoBase;

    public function __construct($photoBase,$title,$description,$photoTag,$userId)
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