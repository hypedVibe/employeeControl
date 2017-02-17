const mongoose = require('mongoose');

const employeeSchema = mongoose.Schema({
  name: String,
  gender: String,
  contactInfo: String,
  dateAdded: String
});

employeeSchema.statics.addEmployee = function(name, gender, contactInfo, dateAdded, callback) {
  const Employee = this;
  let employee = new Employee({name, gender, contactInfo, dateAdded});
  employee.save((err, employee) => {
    if(err) {
      callback(err);
    } else {
      callback(null, employee);
    }
  })
};

employeeSchema.statics.editEmployee = function(id, name, gender, contactInfo, callback) {
  const Employee = this;

  Employee.findOneAndUpdate({_id: id}, {$set: {name, gender, contactInfo}}, function(err, employee) {
    if(err) {
      callback(err);
    } else {
      callback(null, employee);
    }
  });
};

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

module.exports = mongoose.model('Employee', employeeSchema);