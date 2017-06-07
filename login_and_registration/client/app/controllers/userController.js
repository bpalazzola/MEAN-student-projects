angular.module('app')
.controller('userController', ['$scope','$location','userService','authService',
    function($scope, $location, userService, authService){
        $scope.errors = [];
        $scope.username = "guest";
        $scope.login = function(user){
            userService.login(user)
            .then(function(response){
                console.log('SUCCESSFUL LOGIN FOR')
                console.log(response.data)
                $scope.username = response.data.username;
                $scope.user = {};
                $scope.errors = {};
                $location.path('/')
            })
            .catch(function(response){
                var err = {
                    errors:
                    {
                        username:
                        {
                            message:"USERNAME PASSWORD COMBO NOT FOUND",
                            kind:"what didn't work",
                            path:"reference to the schema's name",
                            value:"cause of the initial error"
                        }
                    },
                    name: "Validation error"
                }
                $scope.errors = err.errors;
                $scope.user.password = "";
            })
        };
        $scope.register = function(user){
            userService.register(user)
            .then(function(response){
                $scope.user = {};
                $scope.errors = {};
            })
            .catch(function(response){
                if(response.data.code == 11000){
                    var offending_field = response.data.errmsg.split('$')[1]
                    offending_field = offending_field.substring(0, offending_field.lastIndexOf("_"));
                    var err = {
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
                    }
                    $scope.errors = err.errors;
                }
                else{
                    $scope.errors = response.data.errors;
                }
                $scope.user.password = "";
                $scope.user.confirm_password = "";
            })
        };
        $scope.logout = function(){
            authService.logout()
            .then(function(response){
                $scope.username = "guest";
            })
            .catch(console.log)
        };
    }
])
