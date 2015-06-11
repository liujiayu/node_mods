(function() {
  'use strict';

  angular
    .module('qcs')
    .controller('FacilityEditCtrl', FacilityEditCtrl);

    FacilityEditCtrl.$inject = ['$scope', '$state', '$stateParams'];
    function FacilityEditCtrl($scope, $state, $stateParams) {
      // Scope variables
      // Scope actions
      $scope.back = back;


      // Functions
      function back() {
        $state.go('facility');
      }

    }

})();