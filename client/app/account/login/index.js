'use strict';

import angular from 'angular';
import LoginController from './login.controller';

export default angular.module('aisV1App.login', [])
  .controller('LoginController', LoginController)
  .name;
