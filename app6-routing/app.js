angular.module('app6', ['ui.router']).config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'home.html',
      controller: 'mainCtrl'
    })
    .state('signup', {
      url: '/signup',
      templateUrl: 'signup.html'
    })
    .state('details', {
      url: '/details/:id',
      templateUrl: 'details.html',
      controller: 'detailsCtrl'
    })
})
