'use strict';

export default function routes($stateProvider) {
  'ngInject';

  $stateProvider.state('about', {
    url: '/',
    template: '<about></about>'
  });
}
