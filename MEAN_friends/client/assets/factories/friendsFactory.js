angular.module('app')
.factory('friendsFactory', ['$http', function($http) {
  var factory = {};
  factory.friends = [];
  factory.index = function(callback) {
      $http.get('/friends/').then(function(returned_data){
        factory.friends = [returned_data.data];
        callback(returned_data.data);
      });
  }
  factory.show = function(id, callback) {
      $http.get('/friends/' + id).then(function(returned_data){
          callback(returned_data.data);
      })
  }
  factory.create = function(newFriend, callback) {
      $http.post('/friends/', newFriend)
      .then(function(returned_data){
          factory.friends.push(returned_data.friend);
        if (typeof(callback) == 'function'){
          callback();
        }
      });
  }
  factory.update = function(newFriend, id, callback) {
    $http.put('/friends/' + id, newFriend).then(function(returned_data) {
        if (typeof(callback) == 'function'){
          callback(returned_data.data);
        }
    })
  }
  factory.delete = function(id, callback) {
      $http.delete('/friends/' + id)
      .then(function(returned_data){
          factory.friends.splice(factory.friends.indexOf(returned_data), 1);
          callback();
      })
  }
  return factory;
}]);
