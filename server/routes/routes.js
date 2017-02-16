const express = require('express');
const Router = express.Router();
const ctrl = require('./controllers');

Router.get('/employees', ctrl.getAllEmps);

module.exports = Router;