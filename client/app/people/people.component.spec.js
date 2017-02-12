'use strict';

import people from './people.component';
import {
  PeopleController
} from './people.component';

describe('Component: PeopleComponent', function() {
  beforeEach(angular.mock.module(people));
  beforeEach(angular.mock.module('stateMock'));
  beforeEach(angular.mock.module('socketMock'));

  var scope;
  var peopleComponent;
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
    peopleComponent = $componentController('people', {
      $http,
      $scope: scope,
      socket
    });
  }));

  it('should attach a list of things to the controller', function() {
    peopleComponent.$onInit();
    $httpBackend.flush();
    expect(peopleComponent.awesomeThings.length)
      .to.equal(4);
  });
});
