angular.module('app').controller('TrattamentiCtrl',function($scope){
  $scope.getPiega = function(){
    $scope.piega = true;
    $scope.makeup=false;
    $scope.raccolti = false;
    $scope.taglio=false;
    $scope.permanente=false;
    $scope.meches=false;
    $scope.colore=false;

  }
  $scope.getRaccolti = function(){
    $scope.piega = false;
    $scope.makeup=false;
    $scope.raccolti = true;
    $scope.taglio=false;
    $scope.permanente=false;
    $scope.meches=false;
    $scope.colore=false;
  }
  $scope.getMakeup = function(){
    $scope.piega = false;
    $scope.makeup=true;
    $scope.raccolti = false;
    $scope.taglio=false;
    $scope.permanente=false;
    $scope.meches=false;
    $scope.colore=false;
  }
  $scope.getTaglio = function(){
    $scope.piega = false;
    $scope.makeup=false;
    $scope.raccolti = false;
    $scope.taglio=true;
    $scope.permanente=false;
    $scope.meches=false;
    $scope.colore=false;

  }
  $scope.getColore=function(){
    $scope.piega = false;
    $scope.makeup=false;
    $scope.raccolti = false;
    $scope.taglio=false;
    $scope.permanente=false;
    $scope.meches=false;
    $scope.colore=true;
  }
  $scope.getPermanente=function(){
    $scope.piega = false;
    $scope.makeup=false;
    $scope.raccolti = false;
    $scope.taglio=false;
    $scope.permanente=true;
    $scope.meches=false;
    $scope.colore=false;
  }
  $scope.getMeches=function(){
    $scope.piega = false;
    $scope.makeup=false;
    $scope.raccolti = false;
    $scope.taglio=false;
    $scope.permanente=false;
    $scope.meches=true;
    $scope.colore=false;
  }
})
