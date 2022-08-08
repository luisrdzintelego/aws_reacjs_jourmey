<?php 
//$dominioPermitido = "http://localhost:8888/femsa";
$dominioPermitido = "https://www.intelego.com.mx/cursos_elearning/femsa/valores_femsa/";
header("Access-Control-Allow-Origin: $dominioPermitido");
header("Access-Control-Allow-Headers: content-type");
header("Access-Control-Allow-Methods: OPTIONS,GET,PUT,POST,DELETE");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
//header('Content-Type: application/json; charset=utf-8');
//header("Access-Control-Allow-Origin: *");
//header("Access-Control-Allow-Methods: PUT, GET, POST");

    // Folder Path For Ubuntu
    // $folderPath = "/var/www/my-app/uploads";
    // Folder Path For Window
    $folderPath = "uploads/";
    
    $file_tmp = $_FILES['file']['tmp_name'];
    $tmp = explode('.',$_FILES['file']['name']);
    $file_ext = strtolower(end($tmp));
    $file = $folderPath . uniqid() . '.'.$file_ext;
    //move_uploaded_file($file_tmp, $file);
    
    if(move_uploaded_file($file_tmp , $file)) {
        $response = array(
            "status" => "success",
            "error" => false,
            "message" => "Image has uploaded",
            "url" => $dominioPermitido."/backend/".$file
          );
    }else
    {
        $response = array(
            "status" => "error",
            "error" => true,
            "message" => "Error occured"
        );
    }

   //return json_encode(['status'=>true, 'nombre'=> $file_ext]);

   echo json_encode($response);

/*
$response = array();
$DIR = 'uploads/';
$urlServer = 'http://localhost:8888/femsa/';

if($_FILES['image'])
{
    $fileName = $_FILES["image"]["name"];
    $tempFileName = $_FILES["image"]["tmp_name"];
    $error = $_FILES["image"]["error"];

    if($error > 0){
        $response = array(
            "status" => "error",
            "error" => true,
            "message" => "Error uploading the file!"
        );
    }else 
    {
        $FILE_NAME = rand(10, 1000000)."-".$fileName;
        $UPLOAD_IMG_NAME = $DIR.strtolower($FILE_NAME);
        $UPLOAD_IMG_NAME = preg_replace('/\s+/', '-', $UPLOAD_IMG_NAME);
    
        if(move_uploaded_file($tempFileName , $UPLOAD_IMG_NAME)) {
            $response = array(
                "status" => "success",
                "error" => false,
                "message" => "Image has uploaded",
                "url" => $urlServer."/".$UPLOAD_IMG_NAME
              );
        }else
        {
            $response = array(
                "status" => "error",
                "error" => true,
                "message" => "Error occured"
            );
        }
    }

}else{
    $response = array(
        "status" => "error",
        "error" => true,
        "message" => "File not found"
    );
}

echo json_encode($response);
*/
?>