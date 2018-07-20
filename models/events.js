const mongoose = require('mongoose');

let event = new mongoose.Schema({
  eventName: String,
  description: String,
  date: String,
  time: String,
  eventLink1: String,
  eventLink2: String,
  fileName: String,
  link: String,
});

module.exports = mongoose.model('Event', event);
