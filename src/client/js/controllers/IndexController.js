(function () {

  'use strict';

  angular.module('myApp')
    .controller('IndexController', IndexController);

  IndexController.$inject = ['$scope', '$window'];


  function IndexController($scope, $window) {
    $scope.greeting = "DAN IS A FUCK";
  }

})();