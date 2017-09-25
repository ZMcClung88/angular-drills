angular.module('app6').controller('detailsCtrl', function($scope, service, $stateParams) {
  $scope.getPokemonDetails = function(id) {
    service.getPokemon(id).then(function(response) {
      console.log(response);
      $scope.pokemon = response;
    })
  }
  $scope.getPokemonDetails($stateParams.id);
})
