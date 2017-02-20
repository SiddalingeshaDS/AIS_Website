'use strict';
const angular = require('angular');

export default angular.module('aisApp.question', [])
  .directive('aisEvent', function() {
    return {
      template: require('./ais-event.html'),
      restrict: 'E',
      scope: {
        name: '@',
        eventDate: '@'
      },
      link: function(scope, element, attrs) {}
    };
  })
  .name;
