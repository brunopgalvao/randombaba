(function () {

  'use strict';

  require('angular');
  require('angular-route');
  require('angular-animate');
  var mainCtrl = require('./controllers/mainctrl');

  angular.module('RandomBaba', ['ngRoute', 'ngAnimate'])

  .config([
    '$locationProvider',
    '$routeProvider',
    function($locationProvider, $routeProvider) {
      $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
      });
      //$locationProvider.hashPrefix('!');
      // routes
      $routeProvider
        .when("/", {
          templateUrl: "./partials/partial1.html",
          controller: "MainController"
        })
        .otherwise({
           redirectTo: '/'
        });
    }
    //$locationProvider.html5Mode(true);
  ])

  //Load controller
  .controller('MainController', ['$scope', mainCtrl]);

}());