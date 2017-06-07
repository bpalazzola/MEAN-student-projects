angular.module('app')
.controller('wallController', ['$scope', 'messageFactory', 'commentFactory', 'AuthService','$location',
    function($scope, messageFactory, commentFactory, auth, $location){
        if(!auth.isAuthed()){
            return $location.path('/');
        }
        $scope.newMessage = {};
        $scope.newComment = {};
        $scope.messages = [];
        $scope.comments = [];
        $scope.username = auth.currentUsername();
        if(!$scope.message){
            messageFactory.index(function(messages){
            $scope.messages = messages;
            })
        }
        if($scope.message){
            commentFactory.index($scope.message._id, function(comments){
                $scope.comments = comments;
            })
        }
        $scope.addMessage = function(message){
            message._user = auth.currentUserId();
            messageFactory.create(message, function(response){
                if(response.errors){
                    return $scope.errors = response.errors;
                }
                $scope.newMessage = {};
                messageFactory.show(response._id.toString(), function(message){
                    $scope.messages.unshift(message);
                });
            });
        };
        $scope.addComment = function(comment){
            comment._user = auth.currentUserId();
            comment._message = $scope.message._id;
            commentFactory.create(comment, function(response){
                if(response.errors){
                    return $scope.errors = response.errors;
                }
                $scope.newComment = {};
                commentFactory.show(response._id.toString(), function(comment){
                    $scope.message._comments.push(comment);
                });
            })
        }
    }
])
