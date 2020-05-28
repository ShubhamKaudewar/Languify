<?php
 
if(isset($_FILES["video"])){

    // The Below Code is not working for unique video
    // $fileName = "file".date('m-d-Y-His A e').".webm";

    // Define a name for the file
    $fileName = "RecordedVideo1.webm";

    // In this case the current directory of the PHP script
    $uploadDirectory = './records/'.$fileName;
    
    // Move the file to your server
    if (!move_uploaded_file($_FILES["video"]["tmp_name"], $uploadDirectory)) {
        echo("Couldn't upload video !");
    }
}else{
    echo "No file uploaded";
}
 
?>