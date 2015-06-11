(function() {
  'use strict';

  angular
    .module('qcs')
    .controller('FacilityEditCtrl', FacilityEditCtrl);

    FacilityEditCtrl.$inject = ['$scope', '$state', '$stateParams'];
    function FacilityEditCtrl($scope, $state, $stateParams) {
      // Metronic component
      FormWizard.init();


      // Scope variables
      $scope.corporates = [
        {
          "id": "1101",
          "fullName": "West Exploration",
          "shortName": "WE",
          "type": "Group",
          "managerId": "Eve Yong",
          "languageId": "",
          "status": "Active"
        },
        {
          "id": "1102",
          "fullName": "East Exploration",
          "shortName": "EE",
          "type": "Region",
          "managerId": "",
          "languageId": "EN",
          "status": "Active"
        }
      ];


      // Scope actions
      $scope.back = back;


      // Functions
      function back() {
        $state.go('facility');
      }
    }
})();