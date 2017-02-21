'use strict';

export default function routes($stateProvider) {
  'ngInject';

  $stateProvider.state('events', {
    url: '/events',
    template: '<events></events>'
  });
}
