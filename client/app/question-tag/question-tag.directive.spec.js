'use strict';

describe('Directive: questionTag', function() {
  // load the directive's module and view
  beforeEach(module('aisApp.question-tag'));
  beforeEach(module('app/question-tag/question-tag.html'));

  var element, scope;

  beforeEach(inject(function($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function($compile) {
    element = angular.element('<question-tag></question-tag>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).to.equal('this is the questionTag directive');
  }));
});
