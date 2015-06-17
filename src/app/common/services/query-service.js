(function() {
  'use strict';

  angular
    .module('qcs')
    .factory('QueryService', QueryService);

    function QueryService() {
      var config = {
        headers: {
         'Content-Type': 'application/json'
        }
      };

      var queryOption = {
        pagination: {
          current: 1,
          total: null,
          perPage: 10,
          maxSize: 5
        },
        search: {
        },
        orderBy: {
          name: null,
          type: true
        }
      };

      function handlingQuery(searchKeys, defaultKey) {
        if (jQuery.isEmptyObject(searchKeys)) {
          return [{
            connection: 'and',
            key: defaultKey,
            condition: 'like',
            value: '',
            isValueADigital: false
          }];
        } else {
          var queryCriterias = [];
          angular.forEach(searchKeys, function(value, key){
            if (value !== null) {
              if (jQuery.type(value) === 'string') {
                queryCriterias.push(
                  {
                    connection: 'and',
                    key: key,
                    condition: 'like',
                    value: value,
                    isValueADigital: false
                  }
                );
              } else if (jQuery.type(value) === 'boolean') {
                queryCriterias.push(
                  {
                    connection: 'and',
                    key: key,
                    condition: '=',
                    value: Boolean(value),
                    isValueADigital: true
                  }
                );
              } else if (jQuery.type(value) === 'object') {
                queryCriterias.push(
                  {
                    connection: 'and',
                    key: key,
                    condition: 'like',
                    value: value.name,
                    isValueADigital: false
                  }
                );
              } else if (jQuery.type(value) === 'array') {
                for (var i = 0; i < value.length; i++) {
                  queryCriterias.push(
                    {
                      connection: 'and',
                      key: key,
                      condition: 'like',
                      value: value[i],
                      isValueADigital: false
                    }
                  );
                }
              }
            }
          });
          return queryCriterias;
        }
      }

      function assembleOptions(option, defaultKey) {
        return {
          pagingTool: {
            currentPage: option.pagination.current || 1,
            pageSize: option.pagination.perPage || 10
          },
          queryCriterias: handlingQuery(option.search, defaultKey),
          queryOrderBies: [
            {
              columnName: option.orderBy.name || defaultKey,
              orderType: option.orderBy.type ? 'asc' : 'desc'
            }
          ]
        };
      }

      return {
        assembleOptions: function(option, defaultKey) {
          return assembleOptions(option, defaultKey);
        },
        getDefaultQueryOption: function() {
          return queryOption;
        }
      }
    }
})();
