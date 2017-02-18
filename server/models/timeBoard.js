const mongoose = require('mongoose');

let timeBoardSchema = mongoose.Schema({
  employeeId: mongoose.Schema.Types.ObjectId,
  day: String,
  startTime: String,
  finishTime: String
});

timeBoardSchema.statics.addTimeBoard = function(employeeId, startTime, finishTime, callback) {
  const TimeBoard = this;

  let timeBoard = new TimeBoard({employeeId, startTime, finishTime});
  timeBoard.save((err, data) => {
    if(err) {
      callback(err);
    } else {
      callback(null, data);
    }
  });
};

timeBoardSchema.statics.editTimeBoard = function(employeeId, startTime, finishTime, callback) {
  const TimeBoard = this;
  
  TimeBoard.findOneAndUpdate({"employeeId": {$in: [employeeId]}}, {$set: {startTime, finishTime}}, function(err, data) {
    if(err) {
      callback(err);
    } else {
      callback(null, data);
    }
  });
};

timeBoardSchema.statics.deleteTimeBoard = function(employeeId, callback) {
  const TimeBoard = this;

  TimeBoard.remove({"employeeId": {$in: [employeeId]}}, function(err, data) {
    if(err) {
      callback(err);
    } else {
      callback(null, data);
    }
  });
};

timeBoardSchema.statics.getAllTimeBoards = function(callback) {
  const TimeBoard = this;

  TimeBoard.find({}, function(err, timeBoards) {
    if(err) {
      callback(err);
    } else {
      callback(null, timeBoards);
    }
  });
};

module.exports = mongoose.model('TimeBoard', timeBoardSchema);