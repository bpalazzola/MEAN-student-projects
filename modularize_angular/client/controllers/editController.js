angular.module('app').controller('editController', ['$scope', 'userFactory', '$location', '$routeParams', function($scope, userFactory, $location, rParams) {
  /* Public Properties */
  this.controlValue = "Current Name:";
  var controller = this;
  /* Public Methods */
  this.getUser = function() {
    userFactory.show(rParams.id, function passedToUserFactoryShow(user) {
      $scope.user = user;
    })
  }
  this.updateUser = function(){
    userFactory.update($scope.users, rParams.id, function passedToUserFactoryUpdate(userFromFactory){
      $scope.user = userFromFactory;
      // what is this?
      controller.controlValue = "Updated Name: "
    });
  }
  /* on load time */
  this.getUser();
  console.log(this);
}]);
