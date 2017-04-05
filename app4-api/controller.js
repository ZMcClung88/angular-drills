angular.module('apiApp').controller('mainCtrl', function($scope, service) {

    $scope.getApi = function() {
      service.getApi().then(function(response) {
        $scope.data = response.data.data;
      });
    };

})
