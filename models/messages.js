const mongoose = require('mongoose');

let message = new mongoose.Schema({
  name: String,
  contact: String,
  email: String,
  post: String,
});

module.exports = mongoose.model('Message', message);
