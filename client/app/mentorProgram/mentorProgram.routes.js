'use strict';

export default function routes($stateProvider) {
  'ngInject';

  $stateProvider.state('mentorProgram', {
    url: '/mentor-program',
    template: '<mentor-program></mentor-program>'
  });
}
