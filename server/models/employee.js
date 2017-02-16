const mongoose = require('mongoose');

const employeeSchema = mongoose.Schema({
  name: String,
  gender: String,
  contactInfo: String,
  dateAdded: String
});

employeeSchema.statics.getAllEmployees = function(callback) {
  const Employee = this;

  Employee.find({}, function(err, employees) {
    if(err) {
      callback(err);
    } else {
      callback(null, employees);
    }
  });
};

module.exports = mongoose.model('Employee', employeeSchema, 'employee');