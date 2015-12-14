var app = angular.module('calcbtc', []);

var mbCtrl = function($scope, $http, $resource) {

/*
  $http.jsonp("https://www.bitcointoyou.com/api/ticker.aspx?callback=JSON_CALLBACK")
  .success(function(){alert("ok")});
*/

/*
  $http.jsonp("https://www.bitcointoyou.com/api/ticker.aspx?callback=saulera").success(function(data) {
    $scope.btctoyou(data);
  });
*/

  $http.jsonp("https://api.blinktrade.com/api/v1/BRL/ticker?crypto_currency=BTC&callback=JSON_CALLBACK").then(function(response) {
    $scope.foxbit = response.data;
  });

/*
  $http.jsonp("https://mercadobitcoin.net/api/ticker?callback=JSON_CALLBACK").then(function(response){
   $scope.mbbit = response.data;
  });
*/
  var currency = function(type) {
    return angular.equals(type, "BRL");
  }
}

app.controller("mbCtrl", ["$scope", "$http", mbCtrl]);
