
<?php

  $server= 'localhost';
  $dbusername='root';
  $dbpassword='';
  $dbname='db_bluestyle';
  $dbcharset= 'utf8mb4';

//connsessione tramite PDO
try{
  $db = new PDO('mysql:
  host='.$server.';
  dbname='.$dbname.';
  charset='.$dbcharset,
  $dbusername, $dbpassword);
  $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
  $db->setAttribute(PDO::ATTR_EMULATE_PREPARES, false);
}
catch(PDOException $Exception){
  var_dump($Exception->getMessage());
  die('...');
}
?>
