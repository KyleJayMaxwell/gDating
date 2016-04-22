angular
  .module('datingApp')
  .controller('MembersController', MembersController);

MembersController.$inject = ['membersService', '$rootScope'];

function MembersController (membersService, $rootScope) {
  
  var me = this;

  me.findPopular = function(){
    var popular = [];

     me.members.forEach(function(el) {
      if(el._matches.length > 6) {
        popular.push(el);
      }
    })
    me.members = popular;
    console.log(me.members);
  };

  me.findMatches = function() {
    var testId = '5719234249f05f11000fdbff';
    var matches = [];

    me.members.forEach(function(el) {
      el._matches.forEach(function(element) {
        if(element === testId){
          matches.push(el);
        }
      })
    });
    console.log(matches);
    me.members = matches;
  };

  me.getAll = function() {
    membersService.getAll()
      .then(function(results){
        console.log(results.data.data);
        me.members = results.data.data;
      })
      .catch(function (error){
        return error;
      });
  }
  me.getAll();
}
