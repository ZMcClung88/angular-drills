angular.module('app4').controller('mainCtrl', function($scope, service) {

  $scope.getPeople = function() {
    service.getPeople().then(function(data) {
      $scope.people = data.data.results;
      console.log($scope.people)
    });
  }

  $scope.getPeople();

})
