angular.module('app').service('GestionaleSrv',function($http){
  var getClienti= function(){
  return $http({
    method: 'GET',
    url: 'http://localhost/bluestyle/storico.php'
  })
  .then(function(res){
    return res.data;
  })
}
return{
  getClienti: getClienti
}
})
