angular
  .module('datingApp')
  .config(config);

  // putting in route
  config.$inject= ['$routeProvider'];

function config($routeProvider) {
  $routeProvider
  // directing it to home
  .when('/', {
    template: '<landing></landing>'
  })  
  .when('/members', {
    template: '<members-all></members-all>'
  })
  .otherwise({
    redirectTo: '/'
  });

}