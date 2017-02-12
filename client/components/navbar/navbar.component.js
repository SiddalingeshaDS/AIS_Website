'use strict';
/* eslint no-sync: 0 */

import angular from 'angular';

export class NavbarComponent {
  menu = [
  //   {
  //   title: 'Home',
  //   state: 'main'
  // },
  {
    title: 'Questions',
    state: 'questions'
  },
  {
    title: 'Temporary Accomodation',
    state: 'tempAccomodation'
  },
  {
    title: 'Mentor Program',
    state: 'mentorProgram'
  },
  {
    title: 'Events',
    state: 'events'
  },
  {
    title: 'Membership',
    state: 'membership'
  },
  {
    title: 'Donate',
    state: 'donate'
  },
  {
    title: 'People',
    state: 'people'
  },
  {
    title: 'About',
    state: 'about'
  }];

  isCollapsed = true;

  constructor(Auth) {
    'ngInject';

    this.isLoggedIn = Auth.isLoggedInSync;
    this.isAdmin = Auth.isAdminSync;
    this.getCurrentUser = Auth.getCurrentUserSync;
  }

}

export default angular.module('directives.navbar', [])
  .component('navbar', {
    template: require('./navbar.html'),
    controller: NavbarComponent
  })
  .name;
