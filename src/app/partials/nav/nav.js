(function(){
  'use strict';

  angular
    .module('datingApp')
    .directive('customNav', customNav);

  function customNav() {
    return {
      restrict: 'E',
      templateUrl: 'app/partials/nav/nav.html'  
    };
  }
})();

