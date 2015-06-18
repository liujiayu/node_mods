(function() {
  'use strict';

  angular
    .module('qcs')
    .controller('UserCtrl', UserCtrl);

    UserCtrl.$inject = ['$scope', '$modal', '$state', 'UserService', 'QueryService'];
    function UserCtrl($scope, $modal, $state, UserService, QueryService) {
      // Scope variables
      $scope.loading = true;
      $scope.users = [];

      $scope.showColumn1 = true;
      $scope.showColumn2 = true;
      $scope.showColumn3 = true;
      $scope.showColumn4 = true;

      $scope.queryOption = QueryService.getDefaultQueryOption();

      $scope.search = {
          login_id: null,
          first_name: null,
          last_name: null,
          email_primary: null,
          disabled: null,
          locked: null,
          default_locale: null,
          role_name: []
      };

      $scope.default_locale = [];

      $scope.roles = [];


      // Scope actions
      $scope.addUser = addUser;
      $scope.displayUser = displayUser;
      $scope.editUser = editUser;
      $scope.deleteUser = deleteUser;
      $scope.searchUser = searchUser;
      $scope.sortUser = sortUser;
      $scope.addUserByModal = addUserByModal;
      $scope.displayUserByModal = displayUserByModal;
      $scope.editUserByModal = editUserByModal;
      $scope.resetSearch = resetSearch;


      // Init
      UserService.getUsers($scope.queryOption)
        .then(getUserSuccess, errorCallback)
        .then(initListener);

      UserService.getInitData()
        .then(initData, errorCallback);

      // Functions
      function addUser() {
        $state.go('user-detail', { isEditable: true, isNewUser: true });
      }

      function displayUser(user) {
        $state.go('user-detail', { userId: user.id });
      }

      function editUser(user) {
        $state.go('user-detail', { userId: user.id, isEditable: true });
      }

      function deleteUser(id) {
        UserService.deleteUser(id)
          .then(deleteUserSuccess, errorCallback);
      }

      function searchUser() {
        $scope.queryOption.search = angular.copy($scope.search);
      }

      function sortUser(name) {
        if ($scope.queryOption.orderBy.name === name) {
          $scope.queryOption.orderBy.type = !$scope.queryOption.orderBy.type;
        } else {
          $scope.queryOption.orderBy.type = true;
          $scope.queryOption.orderBy.name = name;
        }
      }

      function getUserSuccess(response) {
        var total, current, perPage, isLastPage;

        $scope.loading = false;
        $scope.users = response.data.DATA;
        $scope.queryOption.pagination.total = response.data.TOTAL_COUNT;

        total = $scope.queryOption.pagination.total;
        current = $scope.queryOption.pagination.current;
        perPage = $scope.queryOption.pagination.perPage;
        isLastPage = ((perPage * current) >= total);

        $scope.userIndex = {
          first: perPage * (current - 1) + 1,
          last: isLastPage ? total : perPage * current,
          total: total
        };

        console.log('response: ', response);
        console.log('$scope.users: ', $scope.users);
      }

      function deleteUserSuccess(response) {
        UserService.getUsers($scope.queryOption)
          .then(getUserSuccess, errorCallback);
      }

      function initData(response){
        console.log(response);
        $scope.default_locale = response.DATA.languageList;
        $scope.roles = response.DATA.roleList;
      }

      function errorCallback(error) {
        console.log(error)
      }

      function initListener() {
        $scope.$watch('queryOption', function(newValue, oldValue) {
          if (newValue !== oldValue) {
            $scope.loading = true;
            UserService.getUsers($scope.queryOption)
              .then(getUserSuccess, errorCallback);
              console.log($scope.queryOption)
          }
        }, true);
      }

      function addUserByModal(size) {
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

      function resetSearch() {
        $scope.search = {}
        $scope.queryOption.search = {}
      }
    }

})();
