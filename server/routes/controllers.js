const mongoose = require('mongoose');
const Employee = mongoose.model('Employee');

exports.getAllEmps = (req, res) => {
  Employee.getAllEmployees((err, employees) => {
    if(err) {
      res.status(400).json("No employees in DB");
    } else {
      res.status(200).json(employees);
    }
  });
};

exports.addEmp = (req, res) => {
  Employee.addEmployee(req.body.name, req.body.gender, req.body.contactInfo, req.body.dateAdded, (err) => {
    if(err) {
      res.status(400).json("Imposible to add employee");
    } else {
      res.status(200).json("Employee added");
    }
  });
}