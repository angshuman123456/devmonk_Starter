const mongoose = require('mongoose');

let mossaic = new mongoose.Schema({
  fileName: String,
  link: String,
});

module.exports = mongoose.model('Mossaic', mossaic);
