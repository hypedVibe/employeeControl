const mongoose = require('mongoose');
const DepStructure = mongoose.model('DepStructure');
const TimeBoard = mongoose.model('TimeBoard');

const employeeSchema = mongoose.Schema({
  name: String,
  gender: String,
  contactInfo: String,
  dateAdded: String
});

employeeSchema.statics.addEmployee = function(name, gender, contactInfo, dateAdded, subordinates,
  startTime, finishTime, callback) {

  const Employee = this;
  let employee = new Employee({name, gender, contactInfo, dateAdded});
  employee.save((err, employee) => {
    if(err) {
      callback(err);
    } else {
      DepStructure.addDepStructure(employee._id, subordinates, function(err, data) {
        if(err) {
          callback(err);
        } else {
          TimeBoard.addTimeBoard(employee._id, startTime, finishTime, function(err, data) {
            if(err) {
              callback(err);
            } else {
             callback(null, employee);
            }
          });
        }
      });
    }
  })
};

employeeSchema.statics.editEmployee = function(id, name, gender, contactInfo, 
  startTime, finishTime, callback) {

  const Employee = this;

  Employee.findOneAndUpdate({_id: id}, {$set: {name, gender, contactInfo}}, function(err, employee) {
    if(err) {
      callback(err);
    } else {
      TimeBoard.editTimeBoard(id, startTime, finishTime, function(err, data) {
        if(err) {
          callback(err);
        } else {
          callback(null, employee);
        }
      });
    }
  });
};

employeeSchema.statics.deleteEmployee = function(id, callback) {
  const Employee = this;

  Employee.findByIdAndRemove(id, function(err, data) {
    if(err) {
      callback(err);
    } else {
      TimeBoard.deleteTimeBoard(id, function(err, data) {
        if(err) {
          callback(err);
        } else {
          DepStructure.deleteDepStructure(id, function(err, data) {
            if(err) {
              callback(err);
            } else {
              callback(null, data);
            }
          });
        }
      });
    }
  });
};

employeeSchema.statics.getAllEmployees = function(callback) {
  const Employee = this;
  
  Employee.find({}, function(err, employees) {
    if(err) {
      callback(err);
    } else {
      TimeBoard.getAllTimeBoards((err, timeBoards) => {
        if(err) {
          throw new Error('Imposible to get data');
        } else {
          callback(null, createFullEmployeesObj(employees, timeBoards));
        }
      });
    }
  });
};

function createFullEmployeesObj(employees, timeBoards) {
  let newEmployees = [];
  for(let i of employees) {
    for(let j of timeBoards) {
      if(String(i._id) == String(j.employeeId)) {
        let empObj = {
          _id: i._id,
          name: i.name,
          gender: i.gender,
          contactInfo: i.contactInfo,
          dateAdded: i.dateAdded
        };
        let timeObj = {
          startTime: j.startTime,
          finishTime: j.finishTime
        };
        newEmployees.push(Object.assign({}, empObj, timeObj));
      }
    }
  }
  return newEmployees;
}

module.exports = mongoose.model('Employee', employeeSchema);