angular.module('app10').directive('imageDirective', function() {
  return {
    scope: {
      image: '=imgSrc'
    },
    templateUrl: 'image.html'
  }
})
