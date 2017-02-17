import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

import employeeList from './views/employeeList.html';
import employeeDetails from './views/employeeDetails.html';

import angular from 'angular';
import ngRoute from 'angular-route';
import ngAnimate from 'angular-animate';

import uibootstrap from 'angular-ui-bootstrap';

import services from './services/index';
import controllers from './controllers/index';

const app = angular.module('app', [ngRoute, ngAnimate,uibootstrap]);

services(app);
controllers(app);

app.config($routeProvider => {
  $routeProvider
    .when('/', {
      controller: 'EmployeeCtrl',
      template: employeeList
    })
    .when('/:id', {
      controller: 'EmployeeDetailsCtrl',
      template: employeeDetails
    })
    .otherwise({redirectTo: '/'});
});