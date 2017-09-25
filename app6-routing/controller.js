angular.module('app6').controller('mainCtrl', function($scope, service) {
  //721
  $scope.pokemonList = [];

  $scope.getRandomPokemon = function() {
    for (var i = 0; i < 9; i++) {
      service.getPokemon(Math.floor((Math.random() * 721) + 1)).then(function(response) {$scope.pokemonList.push(response)})
    }
  }

  $scope.getRandomPokemon();
})
