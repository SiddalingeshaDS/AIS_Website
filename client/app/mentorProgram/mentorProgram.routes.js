'use strict';

export default function routes($stateProvider) {
  'ngInject';

  $stateProvider.state('mentorProgram', {
    url: '/',
    template: '<mentor-program></mentor-program>'
  });
}
