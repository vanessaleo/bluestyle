angular.module('app').controller('GestionaleCtrl', function(GestionaleSrv, $scope){
  $scope.clienti =[];
  GestionaleSrv.getClienti().then(function(data){
    if(!data.error){
      console.log(data.data);
      $scope.clienti = data.data;
    }else{
      alert('nessuna notizia');
    }
  });
})
