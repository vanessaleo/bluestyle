<?php
include 'config.php';

//1.RICHIAMO USERNAME E PASSWORD DAL DB
$username= $_REQUEST ['username'];
$password=$_REQUEST['password'];
$response=new stdClass();
//2.VERIFICHIAMO CHE USERNAME E PASSWORD NON SIANO VUOTI E SIANO ATTIVI;POI MANDO LA QUERY
//*importante*: i punti di domanda sono dei segnaposto richiamati tramiti la variabile bound
if($username != "" && $password != ""){
  $query= "SELECT * FROM `tbl_amministatori` WHERE username =? AND pwd =? AND active=?";
$bound = array($username, $password,1);
//2a.con la freccia chiamo i metodi (es. prepare e execute)
  $stmt = $db->prepare($query);
  $stmt->execute($bound);

//2b.verifichiamo che sia corretto contando il n. delle righe modificate
  $numero_righe= $stmt->rowCount();
  // echo $numero_righe;

//3.RESTITUIAMO UTENTE LOGGATO AL CLIENT
if($numero_righe == 1){
  $result = $stmt->fetch(PDO::FETCH_ASSOC);
    // print_r($result)
//3a. valori recuperati dalla query
  $id=$result['id'];
  $owner=$result['owner'];
//3b.nuovo oggetto PHP
  $utente= new stdClass();
  $utente->id =$id;                 //recupero dalla query
  $utente->username=$username;      //recupero da $_REQUEST
  $utente->password=$password;      //recupero da $_REQUEST
  $utente->owner=$owner;            //recupero dalla query
//3c.controllo sull'errore: se è corretto mando response(inizializzato all'inizio);
//altrimenti error
$response->success=true;
$response->data=$utente;
$response->error="";
    }
    else{
      $response->success=false;
      $response->data="";
      $response->error="username o password non corretti o utente non attivo";
    }
}
    else{
      $response->success=false;
      $response->data="";
      $response->error="username o password non inseriti";
    }
echo json_encode($response);

?>
