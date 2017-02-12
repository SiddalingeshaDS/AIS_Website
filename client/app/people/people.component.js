import angular from 'angular';
import uiRouter from 'angular-ui-router';
import routing from './people.routes';

export class PeopleController {
  persons = {
    "firstRow": [{
      "name":"Varun Soni",
      "title":"Faculty Advisor",
      "link":"/assets/images/directors/spring2014/soni.png"
    }
  ],
  "secondRow": [{
      "name":"Anureet Bahia",
      "title":"President",
      "link":"/assets/images/directors/fall2016/Anureet_1.jpg"
    },
    {
      "name":"Swetha Kaza",
      "title":"Vice President",
      "link":"/assets/images/directors/fall2016/Swetha.jpg"
    }
  ],
  "thirdRow":[{
      "name":"Romil Kumar Vasani",
      "title":"D. (Finance)",
      "link":"/assets/images/directors/fall2016/Romil.jpg"
    },
    {
      "name":"Swetha Kaza",
      "title":"D. (Program Management)",
      "link":"/assets/images/directors/fall2016/Swetha.jpg"
    },
    {
      "name":"Anand Garg",
      "title":"D. (Hospitality)",
      "link":"/assets/images/directors/fall2016/Anand.jpg"
    },
    {
      "name":"Raman Deep Singh",
      "title":"D. (Relations)",
      "link":"/assets/images/directors/fall2016/raman.jpg"
    }],
  "fourthRow":[{
      "name":"Sudeep Sureshan",
      "title":"D. (Membership)",
      "link":"/assets/images/directors/fall2016/Sudeep.jpg"
    },
    {
      "name":"Seema Raman",
      "title":"D. (Publicity)",
      "link":"/assets/images/directors/fall2016/Seema.jpg"
    },
    {
      "name":"Srinidhi Karthik B S",
      "title":"D. (Technology)",
      "link":"/assets/images/directors/fall2016/Srinidhi.jpg"
    }]
  };
}

export default angular.module('aisApp.people', [uiRouter])
  .config(routing)
  .component('people', {
    template: require('./people.html'),
    controller: PeopleController
  })
  .name;
