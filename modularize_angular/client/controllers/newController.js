angular.module('app').controller('newController', ['$scope','userFactory', function($scope, userFactory) {
  $scope.addUser = function(){
    userFactory.create($scope.user, function(users){
        $scope.users = users;
    })
  }
}]);
