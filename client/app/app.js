'use strict';

import angular from 'angular';
// import ngAnimate from 'angular-animate';
import ngCookies from 'angular-cookies';
import ngResource from 'angular-resource';
import ngSanitize from 'angular-sanitize';
import 'angular-socket-io';

import uiRouter from 'angular-ui-router';
import uiBootstrap from 'angular-ui-bootstrap';
// import ngMessages from 'angular-messages';
// import ngValidationMatch from 'angular-validation-match';


import {
  routeConfig
} from './app.config';

import _Auth from '../components/auth/auth.module';
import account from './account';
import admin from './admin';
import navbar from '../components/navbar/navbar.component';
import footer from '../components/footer/footer.component';
import main from './main/main.component';
import questions from './questions/questions.component';
import tempAccomodation from './tempAccomodation/tempAccomodation.component';
import mentorProgram from './mentorProgram/mentorProgram.component';
import events from './events/events.component';
import membership from './membership/membership.component';
import donate from './donate/donate.component';
import people from './people/people.component';
import about from './about/about.component';

import constants from './app.constants';
import util from '../components/util/util.module';
import socket from '../components/socket/socket.service';

import './app.scss';

angular.module('aisApp', [ngCookies, ngResource, ngSanitize, 'btford.socket-io', uiRouter,
  uiBootstrap, _Auth, account, admin, navbar, footer, main, questions, tempAccomodation, mentorProgram, events, membership, donate, people, about, constants, socket, util
])
  .config(routeConfig)
  .run(function($rootScope, $location, Auth) {
    'ngInject';
    // Redirect to login if route requires auth and you're not logged in

    $rootScope.$on('$stateChangeStart', function(event, next) {
      Auth.isLoggedIn(function(loggedIn) {
        if(next.authenticate && !loggedIn) {
          $location.path('/login');
        }
      });
    });
  });

angular.element(document)
  .ready(() => {
    angular.bootstrap(document, ['aisApp'], {
      strictDi: true
    });
  });
