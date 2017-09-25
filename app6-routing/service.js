angular.module('app6').service('service', function($http) {

  //http://pokeapi.co/api/v2/pokemon/
   this.getPokemon = function (id) {
    //  console.log('attempting');
     return $http({
       method: 'GET',
       url: 'http://pokeapi.co/api/v2/pokemon/' + id
     }).then(function(response) {
      //  console.log(response.data);
       return response.data
     })
   }
});
