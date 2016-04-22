(function(){
  'use strict';

  angular
  .module('datingApp')
  .directive('register', register);

function register() {
  return {
    restrict: 'E',
    templateUrl: 'app/partials/register/register.html',
    controller: 'registerController',
    controllerAs: 'me',
    bindToController: true  
  };
}
})();