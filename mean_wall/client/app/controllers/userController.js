angular.module('app')
.controller('userController', ['$scope', '$location', 'AuthService', 'UserService',
  function($scope, $location, auth, userService){
    $scope.isAuthed = function(){
        return auth.isAuthed();
    };
    $scope.login = function(user){
      userService.login(user)
        .then(function(response) {
          $location.path('/wall');
        })
        .catch(function(err){
            $scope.errors = {
                login:
                {
                    message:'Invalid username/password combination',
                    kind:"what didn't work",
                    path:"User",
                    value:"Invalid username or password"
                }
            }
        });
    };
    $scope.logout = function(){
        auth.logout()
        .then(function(response){
            $location.path('/');
        })
        .catch(console.log);
    };
    $scope.register = function(user){
      userService.register(user)
        .then(function(response) {
            return $scope.login(user);
        })
        .catch(function(err){
            if(err.data.code === 11000){
                var offending_field = err.data.errmsg.split('$')[1]
                offending_field = offending_field.substring(0, offending_field.lastIndexOf("_"));
                var dupe_err = {
                    errors:
                    {
                        duplicates:
                        {
                            message:`That ${offending_field} is already registered, Dave`,
                            kind:"what didn't work",
                            path:"reference to the schema's name",
                            value:"cause of the initial error"
                        }
                    },
                    name: "Validation error"
                };
                $scope.errors = dupe_err.errors;
                $scope.user = {};
            } else {
                $scope.errors = err.data.errors;
                $scope.user = {};
            }

        });
    };
    if (auth.isAuthed()) {
      return $location.path('/wall');
    };
}])
