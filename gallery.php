<?php

  // DIRECTORY WHERE YOU'LL SEARCH FOR IMAGES
  //$directory = ".";
  $directory = "img/" . $_REQUEST["dir"];



  // INITIALIZE ARRAY
  $img_array = Array();
  // LAUNCH FUNCTION
  $img_array = listFolderFiles($directory, $img_array);
  // PRINT JSON
  echo json_encode($img_array);



// FUNZIONE
function listFolderFiles($dir, $img_array){
  $files = scandir($dir);
  foreach($files as $file)
    if($file != '.' && $file != '..')
      if(is_dir($dir.'/'.$file))
        $img_array = listFolderFiles($dir.'/'.$file, $img_array);
      else {
        $file_exploded = explode(".", $file);
        $file_extension = strtolower($file_exploded[count($file_exploded)-1]);
        if($file_extension == "jpg" || $file_extension == "png"){
          array_push($img_array, $dir . "/" . $file);
        }
      }
  return $img_array;
}

?>
