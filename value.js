var app = angular.module('calcbticoin', []);

var mbCtrl = function($scope, $http) {
  /*   $http.get("https://mercadobitcoin.net/api/ticker").then(function(response){
      $scope.mbbit = response.data;
    });*/

  $http.get("https://blockchain.info/ticker").then(function(response) {
    $scope.blockchain = response.data;
  });

  $http.get("https://api.github.com/users/pabloleary").then(function(response) {
    $scope.git = response.data;
  });

  $http.get("https://api.github.com/users/pabloleary").then(function(response) {
    $scope.foxbit = response.data;
  });

  $http.get("https://www.bitcointoyou.com/api/ticker.aspx").then(function(response) {
    $scope.btctoyou = response.data;
  });



  var currency = function(type) {
    return angular.equals(type, "BRL");
  }

}

app.directive('numericOnly', function() {
  return {
    require: 'ngModel',
    link: function(scope, element, attrs, modelCtrl) {

      modelCtrl.$parsers.push(function(inputValue) {
        var transformedInput = inputValue ? inputValue.replace(/[^\d.-]/g, '') : null;

        if (transformedInput != inputValue) {
          modelCtrl.$setViewValue(transformedInput);
          modelCtrl.$render();
        }

        return transformedInput;
      });
    }
  };
});



app.controller("mbCtrl", ["$scope", "$http", mbCtrl]);
