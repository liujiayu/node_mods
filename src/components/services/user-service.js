(function() {
  'use strict';

  angular
    .module('qcs')
    .factory('UserService', UserService);

    UserService.$inject = [];
    function UserService() {
      var users = [
        {
          id: 1,
          userName: 'admin',
          firstName: 'super',
          lastName: 'cool',
          email: 'super@logicsolutions.com',
          role: 'Super-Admin',
          lockStatus: 'Unlock',
          disabledStatus: 'Enabled',
          defaultLanguage: 'Simplified Chinese'
        },
        {
          id: 2,
          userName: 'user1',
          firstName: 'Abbie',
          lastName: 'Huang',
          email: 'abbie@logicsolutions.com',
          role: 'UHG Employee',
          lockStatus: 'Unlock',
          disabledStatus: 'Enabled',
          defaultLanguage: 'Simplified Chinese'
        },
        {
          id: 3,
          userName: 'user2',
          firstName: 'John',
          lastName: 'Lu',
          email: 'john@logicsolutions.com',
          role: 'Super-Admin',
          lockStatus: 'Unlock',
          disabledStatus: 'Disabled',
          defaultLanguage: 'English'
        }
      ];

      return {
        getUsers: function() {
          return users;
        },

        updateUser: function(id) {

        },

        deleteUser: function(index) {
          users.splice(index, 1);
        }
      }
    }
})();