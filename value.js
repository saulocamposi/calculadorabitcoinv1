
var app = angular.module('calcbticoin',[]);

var mbCtrl = function($scope, $http){
     $http.get("https://mercadobitcoin.net/api/ticker").then(function(response){
      $scope.mbbit = response.data;
      });
     $http.get("https://blockchain.info/ticker").then(function(response){
      $scope.blockchain = response.data;
      });



      $http.get("https://api.github.com/users/pabloleary").then(function(response){
       $scope.git = response.data;
       });

       var currency = function(type){
         return angular.equals(type, "BRL");
       }

}

app.controller("mbCtrl",["$scope","$http",mbCtrl]);
