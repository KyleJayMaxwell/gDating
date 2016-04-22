(function(){
  'use strict';

  angular
  .module('datingApp')
  //  directive called landing
  .directive('membersAll', membersAll);

function membersAll() {
  return {
    restrict: 'E',
    templateUrl: 'app/partials/members/members.html',
    controller: 'MembersController',
    controllerAs: 'me',
    bindToController: true  
  };
}
})();