'use strict';
const angular = require('angular');

export default angular.module('aisApp.portrait', [])
  .directive('portrait', function() {
    return {
      template: require('./portrait.html'),
      restrict: 'E',
      scope: {
        title: '@',
        name: '@',
        link: '@'
      },
      link: function(scope, element, attrs) {}
    };
  })
  .name;
