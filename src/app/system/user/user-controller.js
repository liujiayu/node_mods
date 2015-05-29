(function() {
  'use strict';

  angular
    .module('qcs')
    .controller('UserCtrl', UserCtrl);

    UserCtrl.$inject = ['$scope', '$modal', '$state', 'UserService'];
    function UserCtrl($scope, $modal, $state, UserService) {
      // Scope variables
      $scope.users = [];
      $scope.displayedusers = [];
      $scope.showColumn1 = true;
      $scope.showColumn2 = true;
      $scope.showColumn3 = true;
      $scope.showColumn4 = true;
      $scope.showColumn5 = true;
      

      // Scope actions
      $scope.AddUser = AddUser;
      $scope.displayUser = displayUser;
      $scope.editUser = editUser;
      $scope.deleteUser = deleteUser;
      $scope.AddUserByModal = AddUserByModal;
      $scope.displayUserByModal = displayUserByModal;
      $scope.editUserByModal = editUserByModal;


      // Init
      UserService.getUsers()
        .then(getUserSuccess, getUserFail);


      // Functions
      function AddUser() {
        $state.go('user-detail', { isEditable: true, isNewUser: true });
      }

      function displayUser(user) {
        $state.go('user-detail', { userId: user.userId });
      }

      function editUser(user) {
        $state.go('user-detail', { userId: user.userId, isEditable: true });
      }

      function deleteUser(index) {
        UserService.deleteUser(index);
      }

      function getUserSuccess(response) {
        $scope.users = response.data.aaData;
        $scope.displayedusers = [].concat($scope.users);
        console.log($scope.users);
      }

      function getUserFail(error) {
        console.log(error)
      }

      function AddUserByModal(size) {
        var modalInstance = $modal.open({
          templateUrl: 'app/system/user/user-modal.html',
          controller: 'UserModalCtrl',
          size: size,
          windowClass: 'user-modal',
          resolve: {
            user: function () {
              return {};
            }
          }
        });
      }

      function displayUserByModal(user, size) {
        var displayedUser = angular.copy(user);
        displayedUser.readOnly = true;

        var modalInstance = $modal.open({
          templateUrl: 'app/system/user/user-modal.html',
          controller: 'UserModalCtrl',
          size: size,
          windowClass: 'user-modal',
          resolve: {
            user: function () {
              return displayedUser;
            }
          }
        });
      }

      function editUserByModal(user, size) {
        var modalInstance = $modal.open({
          templateUrl: 'app/system/user/user-modal.html',
          controller: 'UserModalCtrl',
          size: size,
          windowClass: 'user-modal',
          resolve: {
            user: function () {
              return angular.copy(user);
            }
          }
        });
      }
    }

})();