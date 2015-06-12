(function() {
  'use strict';

  angular
    .module('qcs')
    .directive('basicTable', basicTable);
   
    function basicTable() {
      return {
        restrict: 'E',
        templateUrl: '/app/common/views/data-table.html',
        scope: {
          tableSource: '=',
          tableHead: '=',
          tableCell: '=',
          actionCreate: '=',
          actionRead: '=',
          actionUpdate: '=',
          actionDelete: '='
        },
        link: function(scope, elem, attr) {
          
        }

      };
    };

})();