'use strict';

import questions from './questions.component';
import {
  QuestionsController
} from './questions.component';

describe('Component: QuestionsComponent', function() {
  beforeEach(angular.mock.module(questions));
  beforeEach(angular.mock.module('stateMock'));
  beforeEach(angular.mock.module('socketMock'));

  var scope;
  var questionsComponent;
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
    questionsComponent = $componentController('questions', {
      $http,
      $scope: scope,
      socket
    });
  }));

  it('should attach a list of things to the controller', function() {
    questionsComponent.$onInit();
    $httpBackend.flush();
    expect(questionsComponent.awesomeThings.length)
      .to.equal(4);
  });
});
