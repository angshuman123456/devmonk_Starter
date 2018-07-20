const mongoose = require('mongoose');

let brochure = new mongoose.Schema({
  fileName: String,
  link: String,
});

module.exports = mongoose.model('Brochure', brochure);
