const mongoose = require('mongoose');
const Employee = mongoose.model('Employee');
const DepStructure = mongoose.model('DepStructure');

exports.addEmp = (req, res) => {
  Employee.addEmployee(req.body.name, req.body.gender, req.body.contactInfo, req.body.dateAdded, req.body.subordinates, (err) => {
    if(err) {
      res.status(400).json("Imposible to add employee");
    } else {
      res.status(200).json("Employee added");
    }
  });
};

exports.editEmp = (req, res) => {
  Employee.editEmployee(req.body.id, req.body.name, req.body.gender, 
    req.body.contactInfo, (err) => {
    if(err) {
      res.status(400).json("Imposible to edit employee");
    } else {
      res.status(200).json("Emloyee edited");
    }
  })
};

exports.deleteEmp = (req, res) => {
  Employee.deleteEmployee(req.body.id, (err) => {
    if(err) {
      res.status(400).json("Imposible to edit employee");
    } else {
      res.status(200).json("Emloyee deleted");
    }
  });
};

exports.getAllEmps = (req, res) => {
  Employee.getAllEmployees((err, employees) => {
    if(err) {
      res.status(400).json("No employees in DB");
    } else {
      res.status(200).json(employees);
    }
  });
};

exports.getSubords = (req, res) => {
  DepStructure.getSubordinates(req.params.id, (err, subordinates) => {
    if(err) {
      res.status(400).json("No subordinates in DB");
    } else {
      res.status(200).json(subordinates.subordinates);
    }
  });
};