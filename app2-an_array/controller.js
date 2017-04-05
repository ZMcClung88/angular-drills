angular.module('arrayApp').controller('arrayController', function($scope, service) {
  $scope.quotes = service.myData;
})
