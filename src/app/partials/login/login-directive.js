(function(){
  'use strict';

  angular
  .module('datingApp')
  .directive('login', login);

function login() {
  return {
    restrict: 'E',
    templateUrl: 'app/partials/login/login.html',
    controller: 'loginController',
    controllerAs: 'me',
    bindToController: true  
  };
}
})();