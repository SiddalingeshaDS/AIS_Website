'use strict';

import mentorProgram from './mentorProgram.component';
import {
  MentorProgramController
} from './mentorProgram.component';

describe('Component: MentorProgramComponent', function() {
  beforeEach(angular.mock.module(mentorProgram));
  beforeEach(angular.mock.module('stateMock'));
  beforeEach(angular.mock.module('socketMock'));

  var scope;
  var mentorProgramComponent;
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
    mentorProgramComponent = $componentController('mentorProgram', {
      $http,
      $scope: scope,
      socket
    });
  }));

  it('should attach a list of things to the controller', function() {
    mentorProgramComponent.$onInit();
    $httpBackend.flush();
    expect(mentorProgramComponent.awesomeThings.length)
      .to.equal(4);
  });
});
