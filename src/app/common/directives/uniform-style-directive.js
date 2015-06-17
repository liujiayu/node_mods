// Simple directive to trigger jQuery Uniform plugin in Angular 
(function() {
  'use strict';

  angular
    .module('qcs')
    .directive('uniformStyle', uniformStyle);
   
    function uniformStyle() {
      return {
        restrict: 'A',
        link: function(scope, elem, attr) {
          $(elem).uniform();
        }
      };
    }

})();