'use strict';

import about from './about.component';
import {
  AboutController
} from './about.component';

describe('Component: AboutComponent', function() {
  beforeEach(angular.mock.module(about));
  beforeEach(angular.mock.module('stateMock'));
  beforeEach(angular.mock.module('socketMock'));

  var scope;
  var aboutComponent;
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
    aboutComponent = $componentController('about', {
      $http,
      $scope: scope,
      socket
    });
  }));

  it('should attach a list of things to the controller', function() {
    aboutComponent.$onInit();
    $httpBackend.flush();
    expect(aboutComponent.awesomeThings.length)
      .to.equal(4);
  });
});
