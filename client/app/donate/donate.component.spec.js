'use strict';

import donate from './donate.component';
import {
  DonateController
} from './donate.component';

describe('Component: DonateComponent', function() {
  beforeEach(angular.mock.module(donate));
  beforeEach(angular.mock.module('stateMock'));
  beforeEach(angular.mock.module('socketMock'));

  var scope;
  var donateComponent;
  var state;
  var $httpBackend;

  // Initialize the controller and a mock scope
  beforeEach(inject(function(_$httpBackend_, $http, $componentController, $rootScope, $state,
    socket) {
    $httpBackend = _$httpBackend_;
    $httpBackend.expectGET('/api/things')
      .respond(['HTML5 Boilerplate', 'AngularJS', 'Karma', 'Express']);

    scope = $rootScope.$new();
    state = $state;
    donateComponent = $componentController('donate', {
      $http,
      $scope: scope,
      socket
    });
  }));

  it('should attach a list of things to the controller', function() {
    donateComponent.$onInit();
    $httpBackend.flush();
    expect(donateComponent.awesomeThings.length)
      .to.equal(4);
  });
});
