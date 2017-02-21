'use strict';

export default function routes($stateProvider) {
  'ngInject';

  $stateProvider.state('donate', {
    url: '/donate',
    template: '<donate></donate>'
  });
}
