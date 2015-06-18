(function() {
  'use strict';

  angular
    .module('qcs')
    .directive('basicTable', basicTable);
   
    function basicTable() {
      return {
        restrict: 'E',
        templateUrl: '/app/common/views/data-table.html',
        replace: true,
        scope: {
          tableSource: '=',
          tableHead: '=',
          tableCell: '=',
          labelIndex: '=',
          labelSuccess: '=',
          labelDanger: '=',
          toggleColumnActive: '=',
          toggleColumnSource: '=',
          actionCreate: '=',
          actionRead: '=',
          actionUpdate: '=',
          actionDelete: '='
        },

        link: function(scope, elem, attr) {
          // Local variables
          var total, current, perPage, isLastPage;


          // Scope variables
          scope.pagination = {
            total: scope.tableSource.length,
            perPage: 10,
            current: 1,
            maxSize: 10
          }
          scope.orderByField = scope.tableCell[0];
          scope.orderReverse = false;
          scope.showColumn = [];


          // Scope actions
          scope.orderBy = orderBy;


          // Init
          updatePageInfo();
          initToggleColumn();


          // Listener
          scope.$watch('pagination', function(newValue, oldValue, scope) {
            if (newValue !== oldValue) {
              updatePageInfo();
            }
          }, true);


          // Functions
          function orderBy(field) {
            if (scope.orderByField === field) {
              scope.orderReverse = !scope.orderReverse;  
            } else {
              scope.orderReverse = false;
            }
            scope.orderByField = field;
          }

          function updatePageInfo() {
            total = scope.pagination.total;
            current = scope.pagination.current;
            perPage = scope.pagination.perPage;
            isLastPage = ((perPage * current) >= total);

            scope.pageInfo = {
              first: perPage * (current - 1) + 1,
              last: isLastPage ? total : perPage * current,
              total: total
            };
          }

          function initToggleColumn() {
            if (scope.toggleColumnActive) {
              scope.showColumn = scope.toggleColumnSource;
            } else {
              for( var i = 0; i <= scope.tableHead.length; i++) {
                scope.showColumn.push(true);
              }
            }
          }
        }
      };
    };

})();