import angular from 'angular';
import uiRouter from 'angular-ui-router';
import routing from './mentorProgram.routes';

export class MentorProgramController {
  awesomeThings = [];
  newThing = '';

  /*@ngInject*/
  constructor($http, $scope, socket) {
    this.$http = $http;
    this.socket = socket;

    $scope.$on('$destroy', function() {
      socket.unsyncUpdates('thing');
    });
  }

  $onInit() {
    this.$http.get('/api/things')
      .then(response => {
        this.awesomeThings = response.data;
        this.socket.syncUpdates('thing', this.awesomeThings);
      });
  }

  addThing() {
    if(this.newThing) {
      this.$http.post('/api/things', {
        name: this.newThing
      });
      this.newThing = '';
    }
  }

  deleteThing(thing) {
    this.$http.delete(`/api/things/${thing._id}`);
  }
}

export default angular.module('aisApp.mentorProgram', [uiRouter])
  .config(routing)
  .component('mentorProgram', {
    template: require('./mentorProgram.html'),
    controller: MentorProgramController
  })
  .name;
