import angular from 'angular';
import uiRouter from 'angular-ui-router';
import routing from './events.routes';

export class EventsController {
  events = [{
    "name": "Republic Day",
    "eventDate": "January 26, 2017"
  },
  {
    "name": "Orientation for Spring 2017",
    "eventDate": "January 7, 2017"
  },
  {
    "name": "Diwali",
    "eventDate": "October 30, 2016"
  },
  {
    "name": "Resume/Career Workshop",
    "eventDate": "October 8, 2016"
  },
  {
    "name": "Garba",
    "eventDate": "October 2, 2016"
  },
  {
    "name": "Social Mixer",
    "eventDate": "September 3, 2016"
  },
  {
    "name": "Independence Day",
    "eventDate": "August 15, 2016"
  }];
}

export default angular.module('aisApp.events', [uiRouter])
  .config(routing)
  .component('events', {
    template: require('./events.html'),
    controller: EventsController
  })
  .name;
