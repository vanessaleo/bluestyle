<?php
include 'config.php';


$response=new stdClass();

  $query= "SELECT clienti.nome,clienti.cognome, storico.date, storico.id_trattamento,
  trattamento.trattamento
  FROM storico
  join clienti on storico.id_cliente=clienti.id
  join trattamento on storico.id_trattamento=trattamento.id
  where active = 1";
  $bound = array();
  $stmt=$db->prepare($query);
  $stmt->execute($bound);

$numero_righe= $stmt->rowCount();

if($numero_righe == 0){
          $response->success=false;
          $response->data="";
          $response->error="non ci sono clienti";
    }
    else{
      $cliente=array();
      while($result=$stmt->fetch(PDO::FETCH_ASSOC)){

          $storico= new stdClass();
          // $storico->id_cliente =$result['id_cliente'];
          $storico->trattamento=$result['trattamento'];
          $storico->date=$result['date'];
          $storico->nome=$result['nome'];
          $storico->cognome=$result['cognome'];

array_push($cliente, $storico);
        }
          $response->success=true;
          $response->data=$cliente;
          $response->error="";
      }
echo json_encode($response);
?>
