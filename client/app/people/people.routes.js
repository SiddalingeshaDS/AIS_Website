'use strict';

export default function routes($stateProvider) {
  'ngInject';

  $stateProvider.state('people', {
    url: '/',
    template: '<people></people>'
  });
}
