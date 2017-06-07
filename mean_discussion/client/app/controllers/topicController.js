angular.module('app')
.controller('topicController', ['$scope', 'topicFactory', 'categoryFactory', 'commentFactory', 'replyFactory', 'voteFactory', 'AuthService', 'UserService', '$location', '$routeParams',
    function($scope, topicFactory, categoryFactory, commentFactory, replyFactory, voteFactory, AuthService, UserService, $location, $routeParams){
        if(!AuthService.isAuthed()){
            return $location.path('/');
        }
        $scope.topics = [];
        $scope.categories = [];
        $scope.errors = {};
        $scope.index = function(){
            topicFactory.index(function(response){
                $scope.topics = response;
            });
            categoryFactory.index(function(response){
                $scope.categories = response;
            })
        };
        $scope.create = function(topic){
            if(topic){
                topic._user = AuthService.currentUserId();
            }
            topicFactory.create(topic, function(errors){
                if(errors){
                    return $scope.errors = errors;
                }
                $scope.newTopic = {};
            })
        };
        $scope.show = function(){
            topicFactory.show($routeParams.id, function(response){
                $scope.topic = response;
            })
        };
        $scope.addComment = function(comment){
            if(comment){
                comment._user = AuthService.currentUserId();
                comment._topic = $scope.topic._id;
                commentFactory.create(comment, function(response){
                    $scope.topic._comments.unshift(response.data);
                    $scope.newComment = {};
                })
            }
        };
        $scope.showComment = function(id){
            commentFactory.show(id, function(response){
                $scope.eachComment = response.data;
                $scope.eachComment.upvotes = 0;
                $scope.eachComment.downvotes = 0;
                response.data._votes.forEach(function(vote){
                    if(vote.upvote){
                        $scope.eachComment.upvotes ++;
                    }
                    else {
                        $scope.eachComment.downvotes ++;
                    }
                })
            })
        };
        $scope.addReply = function(reply){
            if(reply){
                reply._user = AuthService.currentUserId();
                reply._comment = $scope.eachComment._id;
                replyFactory.create(reply, function(response){
                    $scope.eachComment._replies.push(response.data);
                    $scope.newReply = {};
                })
            }
        };
        $scope.showReply = function(id){
            replyFactory.show(id, function(response){
                $scope.eachReply = response.data;
            })
        };
        $scope.addVote = function(vote){
            if(vote){
                vote._user = AuthService.currentUserId();
                vote._comment = $scope.eachComment._id;
                voteFactory.create(vote, function(response){
                    $scope.newVote = {};
                    if(response){
                        console.log(response);
                        return $scope.eachComment._votes.push(response.data);
                    }
                    $scope.errors.vote = "You already voted on this one!"
                })
            }
        }
    }
])
