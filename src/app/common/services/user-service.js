(function() {
  'use strict';

  angular
    .module('qcs')
    .factory('UserService', UserService);

    UserService.$inject = ['$http', 'api'];
    function UserService($http, api) {
      var postOptions = {
        method: 'POST',
        url: api.user + '/queryUser',
        headers: {
         'Content-Type': 'application/json'
        },
        data: {
          'loginId': '',
          'pageStart': '0',
          'pageLength': '-1'
        }
      }

      var options = {
        headers: {
         'Content-Type': 'application/json'
        }
      }


      return {
        getUsers: function() {
          // Get local data
          // return $http.get('../../../assets/data/users.json');
          return $http(postOptions);
        },

        getUser: function(id) {
          return $http.get(api.user + '/getUser/' + id);
        },

        addUser: function(user) {
          return $http.post(api.user + '/createUser', user, options);
        },

        updateUser: function(user) {
          return $http.put(api.user + '/updateUser', user, options);
        },

        deleteUser: function(id) {
          return $http.delete(api.user + '/deleteUser/' + id);
        }
      }
    }
})();