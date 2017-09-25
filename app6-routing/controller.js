angular.module('myApp').controller('mainCtrl', function($scope, service) {

    $scope.getName = function() {
      service.getName().then(function(data) {
        $scope.name = data.data;
      })
    }

    getName();


})
