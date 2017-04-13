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
  .state('consulenza', {
    url:'/consulenza',
    templateUrl: 'client/consulenza/consulenza.template.html',
    controller: 'ConsulenzaCtrl'
  })
  .state('gallery', {
    url:'/gallery',
    templateUrl: 'client/gallery/gallery.template.html',
    controller: 'GalleryCtrl'
  })
  .state('staff', {
    url:'/staff',
    templateUrl: 'client/staff/staff.template.html',
    controller: 'StaffCtrl'
  })
  .state('trattamenti', {
    url:'/trattamenti',
    templateUrl: 'client/trattamenti/trattamenti.template.html',
    controller: 'TrattamentiCtrl'
  })
  .state('novita', {
    url:'/novita',
    templateUrl: 'client/novita/novita.template.html',
    controller: 'NovitaCtrl'
  })
  .state('prodotti', {
    url:'/prodotti',
    templateUrl: 'client/prodotti/prodotti.template.html',
    controller: 'ProdottiCtrl'
  })
});
