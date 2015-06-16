(function() {
  'use strict';

  angular
    .module('qcs')
    .filter('smarterLimitTo', smarterLimitTo);

  function smarterLimitTo() {
    return function(input, limit, begin) {
      if (Math.abs(Number(limit)) === Infinity) {
        limit = Number(limit);
      } else {
        limit = toInt(limit);
      }
      if (isNaN(limit)) return input;

      if (isNumber(input)) input = input.toString();
      if (!Array.isArray(input) && !isString(input)) return input;

      begin = (!begin || isNaN(begin)) ? 0 : toInt(begin);
      begin = (begin < 0 && begin >= -input.length) ? input.length + begin : begin;

      if (limit >= 0) {
        return input.slice(begin, begin + limit);
      } else {
        if (begin === 0) {
          return input.slice(limit, input.length);
        } else {
          return input.slice(Math.max(0, begin + limit), begin);
        }
      }
    };
  }

  function toInt(str) {
    return parseInt(str, 10);
  }

  function isNumber(value) {
    return typeof value === 'number';
  }

  function isString(value) {
    return typeof value === 'string';
  }

})();