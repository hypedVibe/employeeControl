const mongoose = require('mongoose');
const Employee = mongoose.model('Employee');

exports.getAllEmps = function(req, res) {
  Employee.getAllEmployees((err, employees) => {
    if(err) {
      res.status(400).json("No employees in DB");
    } else {
      res.status(200).json(employees);
    }
  });
}