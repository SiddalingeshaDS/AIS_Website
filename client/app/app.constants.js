'use strict';

import angular from 'angular';

export default angular.module('aisV1App.constants', [])
  .constant('appConfig', require('../../server/config/environment/shared'))
  .name;
