'use strict';

export default function routes($stateProvider) {
  'ngInject';

  $stateProvider.state('questions', {
    url: '/',
    template: '<questions></questions>'
  });
}
