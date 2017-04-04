var app = angular.module('app', [
    'ui.router',
    'ngCookies'
]);
app.controller('AppCtrl', function($scope, LoginSrv, $state,$rootScope) {
    $scope.logout = function() {
        LoginSrv.clearCredentials();
        $state.go('login');

    }

    $scope.$on('$stateChangeSuccess',
        function(event, toState, toParams, fromState, fromParams) {
            console.log(fromState, toState);
            if (toState.name == 'login' && LoginSrv.isAuthenticated() == true) {
                $state.go('gestionale');
            }
            if (toState.name != 'login' && LoginSrv.isAuthenticated() == false) {
                $state.go('home');
            }
            if(toState.name != 'login'){
        			$rootScope.authenticated = true;
              
        		}
            else{
              $rootScope.authenticated = false;
            }

        });

});
