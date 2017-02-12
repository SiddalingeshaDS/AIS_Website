'use strict';

import angular from 'angular';
import routes from './admin.routes';
import AdminController from './admin.controller';

export default angular.module('aisV1App.admin', ['aisV1App.auth', 'ui.router'])
  .config(routes)
  .controller('AdminController', AdminController)
  .name;
