angular.module('app8').directive('loginDirective', function() {
  return {
    templateUrl: 'login.html',
    controller: function($scope) {
      $scope.login = function() {
        alert('Great Success!');
      }
    }
  }
})
