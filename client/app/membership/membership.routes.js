'use strict';

export default function routes($stateProvider) {
  'ngInject';

  $stateProvider.state('membership', {
    url: '/membership',
    template: '<membership></membership>'
  });
}
