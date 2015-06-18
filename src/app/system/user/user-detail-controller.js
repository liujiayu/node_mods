(function() {
  'use strict';

  angular
    .module('qcs')
    .controller('UserDetailCtrl', UserDetailCtrl);

    UserDetailCtrl.$inject = ['$scope', '$state', '$stateParams', '$timeout', 'UserService'];
    function UserDetailCtrl($scope, $state, $stateParams, $timeout, UserService) {
      // Scope variables
      $scope.isNewUser = $stateParams.isNewUser;
      $scope.isEditable = $stateParams.isEditable;
      $scope.role = {}
      $scope.role.selected = [];
      $scope.roles = [];

      console.log('isNewUser: ', $stateParams.isNewUser);
      console.log('isEditable: ', $stateParams.isEditable);


      // Scope actions
      $scope.addUser = addUser;
      $scope.getUser = getUser;
      $scope.updateUser = updateUser;
      $scope.cancel = cancel;


      // Init
      if(!$stateParams.isNewUser) {
        UserService.getUser($stateParams.userId)
          .then(getUserSuccess, errorCallback);
      } else {
        $scope.user = {};
      }

      UserService.getInitData()
        .then(initData, errorCallback);

      // Functions
      function addUser(user) {
        // Manually set 'defaultLang' as boolean
        // $scope.user.defaultLang = false;
        $scope.user.roleDTOs = $scope.role.selected;
        UserService.addUser(angular.toJson(user))
          .then(addUserSuccess, errorCallback);
      }

      function getUser(userId) {
        UserService.getUser(userId);
      }

      function updateUser(user) {
        // Manually set 'defaultLang' as boolean
        // $scope.user.defaultLang = false;
        $scope.user.roleDTOs = $scope.role.selected;
        UserService.updateUser(angular.toJson(user))
          .then(updateUserSuccess, errorCallback);
      }

      function cancel() {
        $state.go('user');
      }

      function addUserSuccess(response) {
        $state.go('user');
      }

      function getUserSuccess(response) {
        $scope.user = response.data.DATA;
        $scope.role.selected = response.data.DATA.roleDTOs;

        // Mannually set value, becasue API return null for these 3 fields.
        // $scope.user.lockStatus = false;
        // $scope.user.disabledStatus = false;
        // $scope.user.defaultLang = 'English';

        console.log('response: ', response);
        console.log('$scope.user: ', $scope.user);

        // Update value to Uniform.js
        // Used to make sure that uniform.js works with angular by calling it's update method when the angular model value updates.
        $timeout(jQuery.uniform.update, 0);
      }

      function updateUserSuccess(response) {
        $state.go('user');
      }

      function initData(response){
        $scope.default_locale = response.DATA.languageList;
        $scope.roles = response.DATA.roleList;
      }
      function errorCallback(error) {
        console.log(error)
      }
    }

})();
