var app = angular.module('calcbtc', []);

  app.config(['$httpProvider', function($httpProvider) {
          $httpProvider.defaults.useXDomain = true;
          delete $httpProvider.defaults.headers.common['X-Requested-With'];
  }]);

var mbCtrl = function($scope, $http) {
  $http.get("https://blockchain.info/ticker?cors=true").then(function(response) {
    $scope.blockchain = response.data;
  });

  $http.get("https://api.github.com/users/pabloleary?cors=true").then(function(response) {
    $scope.git = response.data;
  });

  $http.jsonp("https://api.blinktrade.com/api/v1/BRL/ticker?crypto_currency=BTC").then(function(response) {
    $scope.foxbit = response.data;
  });

  $http.jsonp("https://www.bitcointoyou.com/api/ticker.aspx").then(function(response) {
    $scope.btctoyou = response.data;
  });
  
  $http.jsonp("https://mercadobitcoin.net/api/ticker").then(function(response){
   $scope.mbbit = response.data;
  });

  var currency = function(type) {
    return angular.equals(type, "BRL");
  }
}

app.controller("mbCtrl", ["$scope", "$http", mbCtrl]);
