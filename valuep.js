var app = angular.module('calcbtc', []);

var mbCtrl = function($scope, $http, $resource) {

  $http.get("services.php?brand=btctoyou").then(function(response) {
    $scope.btctoyou = response.data;
  });

  $http.get("services.php?brand=mtc").then(function(response) {
    $scope.mtc = response.data;
  });

  $http.get("services.php?brand=negociecoins").then(function(response) {
    $scope.negociecoins = response.data;
  });

  $http.get("http://api.bitvalor.com/v1/ticker.json").then(function(response) {
    $scope.bitvalor = response.data;
  });

  $http.jsonp("https://api.blinktrade.com/api/v1/BRL/ticker?crypto_currency=BTC&callback=JSON_CALLBACK").then(function(response) {
    $scope.foxbit = response.data;
  });

}

app.controller("mbCtrl", ["$scope", "$http", mbCtrl]);
