/**
 *
 *
 */

'use strict';

var app = angular.module('webApp', ['ngCookies', 'ngResource', 'ngSanitize', 'ngRoute']);
app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/route/index.html',
      controller: 'mainController'
    })
    .when('/items/:id', {
      templateUrl: 'views/items/index.html',
      controller: 'itemController'
    })
    .otherwise({
      redirectTo: '/'
    });
}]);
