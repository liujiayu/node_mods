(function() {
  'use strict';

  angular
    .module('qcs')
    .controller('UserCtrl', UserCtrl);

    UserCtrl.$inject = ['$scope', '$modal', 'UserService'];
    function UserCtrl($scope, $modal, UserService) {
      // Scope variables
      $scope.users = UserService.getUsers();
      $scope.displayedusers = [].concat($scope.users);
      $scope.showColumn1 = true;
      $scope.showColumn2 = true;
      $scope.showColumn3 = true;
      $scope.showColumn4 = true;
      $scope.showColumn5 = true;
      

      // Scope actions
      $scope.getUsers = getUsers;
      $scope.getUser = getUser;
      $scope.AddUser = AddUser;
      $scope.editUser = editUser;
      $scope.deleteUser = deleteUser;
      $scope.displayUser = displayUser;


      function getUsers() {

      }

      function getUser() {
        
      }

      function AddUser(size) {
        var modalInstance = $modal.open({
          templateUrl: 'app/user/user-detail.html',
          controller: 'UserDetailCtrl',
          size: size,
          windowClass: 'user-modal',
          resolve: {
            user: function () {
              return {};
            }
          }
        });

        modalInstance.result.then(function (selectedUser) {
          $scope.selected = selectedUser;
        }, function () {
          //
        });
      }

      function displayUser(user, size) {
        var displayedUser = angular.copy(user);
        displayedUser.readOnly = true;

        var modalInstance = $modal.open({
          templateUrl: 'app/user/user-detail.html',
          controller: 'UserDetailCtrl',
          size: size,
          windowClass: 'user-modal',
          resolve: {
            user: function () {
              return displayedUser;
            }
          }
        });
      }

      function editUser(user, size) {
        var modalInstance = $modal.open({
          templateUrl: 'app/user/user-detail.html',
          controller: 'UserDetailCtrl',
          size: size,
          windowClass: 'user-modal',
          resolve: {
            user: function () {
              return angular.copy(user);
            }
          }
        });

        modalInstance.result.then(function (selectedUser) {
          $scope.selected = selectedUser;
        }, function () {
          //
        });
      }

      function deleteUser(index) {
        UserService.deleteUser(index);
      }
    }

})();