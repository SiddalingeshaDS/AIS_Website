'use strict';
const angular = require('angular');

export default angular.module('aisApp.question', [])
  .directive('question', function() {
    return {
      template: require('./question.html'),
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
