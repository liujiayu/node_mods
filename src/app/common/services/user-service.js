(function() {
  'use strict';

  angular
    .module('qcs')
    .factory('UserService', UserService);

    UserService.$inject = ['$http', 'api', 'QueryService', '$q'];
    function UserService($http, api, QueryService, $q) {
      var config = {
        headers: {
         'Content-Type': 'application/json'
        }
      };

      var deferred = $q.defer();

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
        },

        getInitData: function(){
          // let defer to cache the response since we dont want to always make the call to server
          // this way user and user-detail can share one data
          $http.get(api.user + 'initData').success(function(response) {
            deferred.resolve({
              DATA: response.DATA
            });
          });
          return deferred.promise;
        }

      }
    }
})();
