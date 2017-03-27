var app = angular.module('app', [
    'ui.router',
    'ngCookies'
]);
app.controller('AppCtrl', function($scope, LoginSrv, $state,$rootScope) {
    $scope.logout = function() {
        LoginSrv.clearCredentials();
        $state.go('login');
    }
		if(LoginSrv.isAuthenticated()){
			$rootScope.authenticated =true;
		}
    $scope.$on('$stateChangeSuccess',
        function(event, toState, toParams, fromState, fromParams) {
            console.log(fromState, toState);
            if (toState.name == 'login' && LoginSrv.isAuthenticated() == true) {
                $state.go('home');
            }
            if (toState.name != 'login' && LoginSrv.isAuthenticated() == false) {
                $state.go('login');
            }
        });

});
