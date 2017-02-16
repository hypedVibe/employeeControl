import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

import angular from 'angular';

import services from './services/index';
import controllers from './controllers/index';
import directives from './directives/index';

const app = angular.module('app', []);
directives(app);
services(app);
controllers(app);