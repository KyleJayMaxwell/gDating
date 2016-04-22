angular
  .module('datingApp')
  .controller('MembersController', MembersController);

MembersController.$inject = ['membersService', '$scope'];

function MembersController (membersService, $scope) {
  this.getAll = function() {
    membersService.getAll()
      .then(function(results){
        console.log(results.data.data);
        $scope.members = results.data.data;
      })
      .catch(function (error){
        return error;
      });
  }
  this.getAll();
}