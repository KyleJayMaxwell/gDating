angular
  .module('datingApp')
  .service('membersService', membersService);

membersService.$inject = ['$http'];

function membersService ($http) {
  return {
    
    getAll: function(){
      return $http.get('https://galvanize-student-apis.herokuapp.com/gdating/members');
    }

  };

}