var app = angular.module('calcbtc', ['ngRoute']);

var routes = function($routeProvider){
  $routeProvider
         // route for the home page
         .when('/', {
             templateUrl : 'tpl/bitcoincalculator.html',
             controller  : 'mbCtrl'
         })
         // route for the about page
           .when('/satoshi', {
               templateUrl : 'tpl/satoshicalculator.html',
               controller  : 'mbCtrl'
           })
}


var mbCtrl = function($scope, $http, $resource) {

  $http.get("services/services.php?brand=btctoyou").then(function(response) {
    $scope.btctoyou = response.data;
  });

  $http.get("services/services.php?brand=flowbtc").then(function(response) {
    $scope.flowbtc = response.data;
  });

  $http.get("services/services.php?brand=negociecoins").then(function(response) {
    $scope.negociecoins = response.data;
  });

  $http.jsonp("https://api.blinktrade.com/api/v1/BRL/ticker?crypto_currency=BTC&callback=JSON_CALLBACK").then(function(response) {
    $scope.foxbit = response.data;
  });

  $http.get("services/bitvalor_services.php").then(function(response) {
    $scope.bitvalor = response.data;
  });

/*
  $http.get("promasters_services.php").then(function(response) {
    $scope.promasters = response.data;
  });
*/

  $http.get("services/doge_cryptsy_services.php").then(function(response) {
    $scope.doge = response.data;
  });

  $http.get("services/dash_cryptsy_services.php").then(function(response) {
    $scope.dash = response.data;
  });

  $http.get("services/lite_cryptsy_services.php").then(function(response) {
    $scope.lite = response.data;
  });

  $http.get("services/ether_cryptsy_services.php").then(function(response) {
    $scope.ether = response.data;
  });

  /*

  API disabled per exceed limit of GETs

  $http.get("services.php?brand=mtc").then(function(response) {
    $scope.mtc = response.data;
  });

  */

}



app.controller("mbCtrl", ["$scope", "$http", mbCtrl]);
app.config(routes);
