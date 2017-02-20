'use strict';
const angular = require('angular');

export default angular.module('aisApp.question-tab', [])
  .directive('questionTab', function() {
    return {
      template: require('./question-tab.html'),
      restrict: 'E',
      scope: {
        questions: '=',
        tabId: "="
      },
      link: function(scope, element, attrs) {}
    };
  })
  .name;
