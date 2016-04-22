(function(){
  'use strict';

  angular
  .module('datinApp')
  .directive('login', login);

function login() {
  return {
    restrict: 'E',
    templateUrl: 'app/partials/login/login.html',
    controller: 'LoginCtrl',
    controllerAs: 'me',
    bindToController: true  
  };
}
})();