const mongoose = require('mongoose');
const DepStructure = mongoose.model('DepStructure');

const employeeSchema = mongoose.Schema({
  name: String,
  gender: String,
  contactInfo: String,
  dateAdded: String
});

employeeSchema.statics.addEmployee = function(name, gender, contactInfo, dateAdded, subordinates, callback) {
  const Employee = this;
  let employee = new Employee({name, gender, contactInfo, dateAdded});
  employee.save((err, employee) => {
    if(err) {
      callback(err);
    } else {
      DepStructure.addDepStructure(employee._id, subordinates, function(err) {
        if(err) {
          callback(err);
        } else {
          callback(null, employee);
        }
      });
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

employeeSchema.statics.deleteEmployee = function(id, callback) {
  const Employee = this;

  Employee.findByIdAndRemove(id, function(err, data) {
    if(err) {
      callback(err);
    } else {
      callback(null, data);
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