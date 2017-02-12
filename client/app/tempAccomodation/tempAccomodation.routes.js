'use strict';

export default function routes($stateProvider) {
  'ngInject';

  $stateProvider.state('tempAccomodation', {
    url: '/',
    template: '<temp-accomodation></temp-accomodation>'
  });
}
