(function(){
  'use strict';

  angular
  .module('datingApp')
  //  directive called landing
  .directive('landing', landing);

function landing() {
  return {
    restrict: 'E',
    templateUrl: 'app/partials/landing/landing.html',
    // controller: 'LandingCtrl',
    // bindToController: true  
  };
}
})();