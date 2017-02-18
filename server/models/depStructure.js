const mongoose = require('mongoose');

const depStructureSchema = mongoose.Schema({
  employeeId: mongoose.Schema.Types.ObjectId,
  subordinates: [String]
});

depStructureSchema.statics.addDepStructure = function(employeeId, subordinates, callback) {
  const DepStructure = this;

  let depStructure = new DepStructure({employeeId, subordinates});
  depStructure.save((err, data) => {
    if(err) {
      callback(err);
    } else {
      callback(null, data);
    }
  });
};

depStructureSchema.statics.addSubordinate = function(employeeId, subordinate, callback) {
  const DepStructure = this;
  DepStructure.findOneAndUpdate({"employeeId": {$in: [employeeId]}}, {$push: {subordinates: subordinate}}, function(err, data) {
    if(err) {
      callback(err);
    } else {
      callback(null, data)
    };
  })
};

depStructureSchema.statics.deleteDepStructure = function(employeeId, callback) {
  const DepStructure = this;

  DepStructure.remove({"employeeId": {$in: [employeeId]}}, function(err, data) {
    if(err) {
      callback(err);
    } else {
      callback(null, data);
    }
  });
};

depStructureSchema.statics.getSubordinates = function(employeeId, callback) {
  const DepStructure = this;

  DepStructure.findOne({"employeeId": {$in: [employeeId]}}, function(err, subordinates) {
    if(err) {
      callback(err);
    } else {
      callback(null, subordinates);
    }
  });
};

module.exports = mongoose.model('DepStructure', depStructureSchema);