const Brochure = require('../models/brochures');

exports.createBrochure = function(req, res) {
  let brochure = {
    fileName: req.files[0].key,
    link: req.files[0].location,
  };
  Brochure.create(brochure, function(err) {
    if (err) {
      console.log('error uploading');
    } else {
      res.redirect('/cms.html');
    }
  });
}

exports.findAllBrochure = function(req, res) {
  Brochure.find().exec(function(err, result) {
    if (err) {
      res.render('page/home');
    }
    res.render('page/brochure', {
      data: result
    });
  });
};


