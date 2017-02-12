'use strict';

describe('Directive: portraitBanner', function() {
  // load the directive's module and view
  beforeEach(module('aisApp.portrait-banner'));
  beforeEach(module('app/portrait-banner/portrait-banner.html'));

  var element, scope;

  beforeEach(inject(function($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function($compile) {
    element = angular.element('<portrait-banner></portrait-banner>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).to.equal('this is the portraitBanner directive');
  }));
});
