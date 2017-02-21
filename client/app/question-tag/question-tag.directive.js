'use strict';
const angular = require('angular');

export default angular.module('aisApp.question-tag', [])
  .directive('questionTag', function() {
    return {
      template: require('./question-tag.html'),
      restrict: 'E',
      scope: {
        question: '@',
        answer: '@',
        author: '@'
      },
      link: function(scope, element, attrs) {}
    };
  })
  .name;
