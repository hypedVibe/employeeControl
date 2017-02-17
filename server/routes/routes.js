const express = require('express');
const Router = express.Router();
const ctrl = require('./controllers');

Router.post('/employees', ctrl.addEmp);
Router.put('/employees', ctrl.editEmp);
Router.delete('/employees', ctrl.deleteEmp);
Router.get('/employees', ctrl.getAllEmps);

Router.get('/getsubords/:id', ctrl.getSubords);

module.exports = Router;