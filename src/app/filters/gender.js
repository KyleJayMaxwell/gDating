angular.module('datingApp')
  .filter('gender', function(){
    return function (gender) {
      if (gender === 0) {return 'Air';}
      else if (gender === 1) { return 'Earth';}
      else if (gender === 2) { return 'Fire';}
      else if (gender === 3) { return 'Water'};
    };
  });