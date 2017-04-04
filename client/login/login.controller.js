angular.module('app').controller('LoginCtrl',function($scope,LoginSrv,$rootScope,$state){
  $scope.utente = {
    username: null,
    password: null
  }

  $scope.invia=function(){
    console.log($scope.utente.password);

    LoginSrv.login($scope.utente.username,$scope.utente.password)
    .then(function (response){
        console.log(response);
      if (response.success == true) {
        LoginSrv.setCredentials(response.data);
        $rootScope.utente = response.data;
				// localStorage.utente = angular.toJson(response.data);
        $state.go('gestionale');

			} else {
        alert('username o password errati')
			}
		}, function (err) {
			console.log(err);
		})
  }





})
