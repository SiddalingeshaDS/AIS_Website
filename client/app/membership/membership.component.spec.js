'use strict';

import membership from './membership.component';
import {
  MembershipController
} from './membership.component';

describe('Component: MembershipComponent', function() {
  beforeEach(angular.mock.module(membership));
  beforeEach(angular.mock.module('stateMock'));
  beforeEach(angular.mock.module('socketMock'));

  var scope;
  var membershipComponent;
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
    membershipComponent = $componentController('membership', {
      $http,
      $scope: scope,
      socket
    });
  }));

  it('should attach a list of things to the controller', function() {
    membershipComponent.$onInit();
    $httpBackend.flush();
    expect(membershipComponent.awesomeThings.length)
      .to.equal(4);
  });
});
