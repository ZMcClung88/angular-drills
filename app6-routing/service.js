angular.module('myApp').service('service', function($http) {

  var URL = 'http://smurfs.devmounta.in/smurfs/';

    this.getSmurf = function() {
      return $http ({
        method: 'GET',
        url: URL,
        scope: 
      });
    }

});
