const express = require('express');
const Router = express.Router();
const ctrl = require('./controllers');

Router.post('/employees', ctrl.addEmp);
Router.put('/employees', ctrl.editEmp);
Router.delete('/employees', ctrl.deleteEmp);
Router.get('/employees', ctrl.getAllEmps);

Router.get('/subords/:id', ctrl.getSubords);
Router.put('/subords/:id', ctrl.addSubord);
Router.delete('/subords/:id', ctrl.deleteSubord);

module.exports = Router;