(function() {
  'use strict';

  angular
    .module('qcs')
    .controller('FacilityCtrl', FacilityCtrl);

    FacilityCtrl.$inject = ['$scope'];
    function FacilityCtrl($scope) {
      // Scope variables
      $scope.facilities = [
        {
          id: '001',
          fullName: 'facility 001',
          shortName: 'f001',
          isActive: true
        },
        {
          id: '810',
          fullName: 'facility 810',
          shortName: 'f810',
          isActive: false
        }
      ];

      $scope.showColumn1 = true;
      $scope.showColumn2 = true;
      $scope.showColumn3 = true;
      $scope.showColumn4 = true;


      // Scope actions
      $scope.addFacility = addFacility;
      $scope.displayFacility = displayFacility;
      $scope.editFacility = editFacility;
      $scope.deleteFacility = deleteFacility;


      // Functions
      function addFacility() {
      }

      function displayFacility(facility) {
      }

      function editFacility(facility) {
      }

      function deleteFacility(facility) {
      }
    }

})();