'use strict';

describe('Directive: aisEvent', function() {
  // load the directive's module and view
  beforeEach(module('aisApp.ais-event'));
  beforeEach(module('app/ais-event/ais-event.html'));

  var element, scope;

  beforeEach(inject(function($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function($compile) {
    element = angular.element('<ais-event></ais-event>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).to.equal('this is the aisEvent directive');
  }));
});
