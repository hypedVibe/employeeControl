const express = require('express');
const Router = express.Router();
const ctrl = require('./controllers');

Router.post('/addemployee', ctrl.addEmp);
Router.put('/employees/:id', ctrl.editEmp);
Router.get('/employees', ctrl.getAllEmps);

module.exports = Router;