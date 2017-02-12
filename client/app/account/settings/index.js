'use strict';

import angular from 'angular';
import SettingsController from './settings.controller';

export default angular.module('aisApp.settings', [])
  .controller('SettingsController', SettingsController)
  .name;
