'use strict';
const angular = require('angular');

export default angular.module('aisApp.portrait-banner', [])
  .directive('portraitBanner', function() {
    return {
      template: require('./portrait-banner.html'),
      restrict: 'E',
      scope: {
        persons: '='
      },
      link: function(scope, element, attrs) {}
    };
  })
  .name;
