'use strict';

export default function routes($stateProvider) {
  'ngInject';

  $stateProvider.state('tempAccomodation', {
    url: '/temp-accomodation',
    template: '<temp-accomodation></temp-accomodation>'
  });
}
