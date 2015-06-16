(function() {
  'use strict';

  angular
    .module('qcs')
    .controller('FacilityCtrl', FacilityCtrl);

    FacilityCtrl.$inject = ['$scope', '$state'];
    function FacilityCtrl($scope, $state) {
      // Scope variables
      $scope.facilities = [
        {
          "id": "001",
          "fullName": "Facility A",
          "shortName": "FA",
          "status": "Active"
        },
        {
          "id": "002",
          "fullName": "Facility B",
          "shortName": "FB",
          "status": "Inactive"
        },
        {
          "id": "003",
          "fullName": "Facility C",
          "shortName": "FC",
          "status": "Active"
        },
        {
          "id": "004",
          "fullName": "Facility A",
          "shortName": "FA",
          "status": "Active"
        },
        {
          "id": "005",
          "fullName": "Facility B",
          "shortName": "FB",
          "status": "Inactive"
        },
        {
          "id": "006",
          "fullName": "Facility C",
          "shortName": "FC",
          "status": "Active"
        },
        {
          "id": "007",
          "fullName": "Facility A",
          "shortName": "FA",
          "status": "Active"
        },
        {
          "id": "008",
          "fullName": "Facility B",
          "shortName": "FB",
          "status": "Inactive"
        },
        {
          "id": "009",
          "fullName": "Facility C",
          "shortName": "FC",
          "status": "Active"
        },
        {
          "id": "010",
          "fullName": "Facility A",
          "shortName": "FA",
          "status": "Active"
        },
        {
          "id": "011",
          "fullName": "Facility B",
          "shortName": "FB",
          "status": "Inactive"
        },
        {
          "id": "012",
          "fullName": "Facility C",
          "shortName": "FC",
          "status": "Active"
        }
      ];

      $scope.colunmName = ['Facility ID', 'Facility Full Name', 'Facility Short Name', 'Status'];
      $scope.fieldName = ['id', 'fullName', 'shortName', 'status'];

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
        $state.go('facility-edit', { facilityId: facility.id });
      }

      function deleteFacility(facility) {
      }
    }

})();