angular.module('app').service('LoginSrv', function($http, $cookieStore,$rootScope){

  var login = function (username, password) {
    console.log(username,password);
  		return $http({
  				method: 'GET',
  				url: 'http://localhost/bluestyle/login.php?username=' + username + '&password=' + password
   			})
  			.then(function (res) {
  				return res.data;
  			})
  			.catch(function (err) {
  				return err;
  			});
  	}

    var setCredentials = function(utente){
      $rootScope.authenticated = true;
      $cookieStore.put('utenteLoggato', utente);
    }
    var clearCredentials = function(){
      $rootScope.authenticated = false;
      $cookieStore.remove('utenteLoggato');
    }
    var isAuthenticated = function(){
      if ($cookieStore.get('utenteLoggato')){
        return true;
      } else{
        return false;
      }
    }
//
  return{
login: login,
setCredentials:setCredentials,
clearCredentials:clearCredentials,
isAuthenticated:isAuthenticated
  }
})
