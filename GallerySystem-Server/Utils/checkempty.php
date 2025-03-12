<?php 
// check for eampty values and use spread orperator since unknown parameter number;
function checkEmpty(...$values){
    
        foreach ($values as $key => $value) {
            if (empty($value)) {
                return json_encode(["success" => false, "message" => "Fill all the blanks!"]);
            }
        }
        return false; 
    
}



?>