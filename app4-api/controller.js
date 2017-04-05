angular.module('apiApp').controller('mainCtrl', function($scope, service) {

    $scope.getSmurf = function() {
      service.getSmurf().then(function(data) {
        $scope.smurfs = data.data;
      });
      
    }
    $scope.getSmurf();

})
