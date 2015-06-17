(function() {
  'use strict';

  angular
    .module('qcs')
    .factory('UserService', UserService);

    UserService.$inject = ['$http', 'api', 'QueryService'];
    function UserService($http, api, QueryService) {
      var config = {
        headers: {
         'Content-Type': 'application/json'
        }
      };

      return {
        getUsers: function(queryOption) {
          // Get local data
          // return $http.get('../../../assets/data/users.json');
          return $http.post(api.user + 'list', QueryService.assembleOptions(queryOption, 'login_id'));
        },

        getUser: function(id) {
          return $http.get(api.user + id);
        },

        addUser: function(user) {
          return $http.post(api.user, user, config);
        },

        updateUser: function(user) {
          return $http.put(api.user, user, config);
        },

        deleteUser: function(id) {
          return $http.delete(api.user + id);
        }
      }
    }
})();
