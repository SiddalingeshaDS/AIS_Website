'use strict';

describe('Directive: questionTab', function() {
  // load the directive's module and view
  beforeEach(module('aisApp.question-tab'));
  beforeEach(module('app/question-tab/question-tab.html'));

  var element, scope;

  beforeEach(inject(function($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function($compile) {
    element = angular.element('<question-tab></question-tab>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).to.equal('this is the questionTab directive');
  }));
});
