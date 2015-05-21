(function() {
  'use strict';

  var qcs = angular.module('qcs');

  /* Setup App Main Controller */
  qcs.controller('AppController', ['$scope', '$rootScope', function($scope, $rootScope) {
    $scope.$on('$viewContentLoaded', function() {
        Metronic.initComponents(); // init core components
        //Layout.init(); //  Init entire layout(header, footer, sidebar, etc) on page load if the partials included in server side instead of loading with ng-include directive 
    });
  }]);


  /***
  Layout Partials.
  By default the partials are loaded through AngularJS ng-include directive. In case they loaded in server side(e.g: PHP include function) then below partial 
  initialization can be disabled and Layout.init() should be called on page load complete as explained above.
  ***/

  /* Setup Layout Part - Header */
  qcs.controller('HeaderController', ['$scope', function($scope) {
      $scope.$on('$includeContentLoaded', function() {
          Layout.initHeader(); // init header
      });
  }]);

  /* Setup Layout Part - Sidebar */
  qcs.controller('SidebarController', ['$scope', function($scope) {
      $scope.$on('$includeContentLoaded', function() {
          Layout.initSidebar(); // init sidebar
      });
  }]);

  /* Setup Layout Part - Quick Sidebar */
  qcs.controller('QuickSidebarController', ['$scope', function($scope) {    
      $scope.$on('$includeContentLoaded', function() {
          setTimeout(function(){
              QuickSidebar.init(); // init quick sidebar        
          }, 2000)
      });
  }]);

  /* Setup Layout Part - Theme Panel */
  qcs.controller('ThemePanelController', ['$scope', function($scope) {    
      $scope.$on('$includeContentLoaded', function() {
          Demo.init(); // init theme panel
      });
  }]);

  /* Setup Layout Part - Footer */
  qcs.controller('FooterController', ['$scope', function($scope) {
      $scope.$on('$includeContentLoaded', function() {
          Layout.initFooter(); // init footer
      });
  }]);

})();