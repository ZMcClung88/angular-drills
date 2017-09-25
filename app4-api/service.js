angular.module('app4').service('service', function($http) {

  const URL="https://swapi.co/api/people/";

  this.getPeople = function() {
    return $http ({
      method: 'GET',
      url: URL
    });
  }
});
