(function() {
  'use strict';

  angular
    .module('qcs')
    .directive('toggleColumn', toggleColumn);
   
    function toggleColumn() {
      return {
        restrict: 'E',
        templateUrl: '/app/common/views/toggle-column.html',
        scope: false,
        link: function(scope) {
          scope.showColumn = [];
          for (var i = 0; i < scope.columnName.length; i++) {
            scope.showColumn.push(true);
          }
        }
      };
    };

})();