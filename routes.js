angular.module('app')
.config(function($stateProvider,$urlRouterProvider){

$urlRouterProvider.otherwise('/home');
  $stateProvider
  .state('home', {
    url:'/home',
    templateUrl: 'client/home/home.template.html',
    controller: 'HomeCtrl'
  })
  .state('login', {
    url:'/login',
    templateUrl: 'client/login/login.template.html',
    controller: 'LoginCtrl'

  })
  .state('gestionale', {
    url:'/gestionale',
    templateUrl: 'client/gestionale/gestionale.template.html',
    controller: 'GestionaleCtrl'
  })
  .state('nuovo', {
    url:'/nuovo',
    templateUrl: 'client/nuovo/nuovo.template.html',
    controller: 'NuovoCtrl'
  })



});
