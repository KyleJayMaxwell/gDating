
angular
  .module('datingApp')
  .controller('LoginController', LoginController);

LoginController.$inject = ['$rootScope', '$location', 'authService'];

function LoginController($rootScope, $location, authService) {
  var me = this;

  me.user = {};
  
  me.login = function() {
    
    authService.login(me.user)
   .then(function(user) { authService.setUserInfo(user);
                          $location.path('/members');
                          $rootScope.currentUser = JSON.parse(authService.getUserInfo()); 
                         })
    .catch( function (error) { console.log(error); return error; })
  
  };

}