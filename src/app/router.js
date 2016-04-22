(function () {

  'use strict';

  angular.module('datingApp')
    .config(config)
    .run(routeChange);

  config.$inject = ['$routeProvider', '$httpProvider'];
  routeChange.$inject = ['$rootScope', '$location', '$window', 'authService'];


  function config($routeProvider, $httpProvider) {
    $routeProvider
    .when('/', {
      template: '<landing></landing>',
      restricted: true,
      preventLoggedIn: false
    })
    .when('/members', {
      template: '<members-all></members-all>',
      restricted: true,
      preventLoggedIn: false
    })
    .when('/register',{
      template: '<register></register>',
      controller: 'registerController',
      restricted: false,
      preventLoggedIn: true
    })
    .when('/login', {
      template: '<login></login>',
      controller: 'loginController',
      restricted: false,
      preventLoggedIn: true
    })
    .when('/logout', {
      restricted: false,
      preventLoggedIn: false,
      resolve: {
        test: function(authService, $rootScope, $location) {
          authService.logout();
          $rootScope.currentUser = authService.getUserInfo();
          $location.path('/login');
        }
      }
    })
    .otherwise({redirectTo: '/login'});
    $httpProvider.interceptors.push('authInterceptor');
  }

  function routeChange($rootScope, $location, $window, authService) {
    $rootScope.$on('$routeChangeStart', function(event, next, current) {
      // if route us restricted and no token is present
      if(next.restricted && !$window.localStorage.getItem('token')) {
        $location.path('/login');
      }
      // if token and prevent logging in is true
      if(next.preventLoggedIn && $window.localStorage.getItem('token')) {
        $location.path('/');
      }
    });
  }

})();