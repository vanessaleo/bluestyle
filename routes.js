angular.module('app')
.config(function($stateProvider,$urlRouterProvider){

$urlRouterProvider.otherwise('/login');
  $stateProvider
  .state('login', {
    url:'/login',
    templateUrl: 'client/login/login.template.html',
    controller: 'LoginCtrl'

  })
  .state('home', {
    url:'/home',
    templateUrl: 'client/home/home.template.html',
    controller: 'HomeCtrl'

  })

});
