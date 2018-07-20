const Mossaic = require('../models/mossaics');

exports.createMossaic = function(req, res) {
  let mossaic = {
    fileName: req.files[0].key,
    link: req.files[0].location,
  };
  Mossaic.create(mossaic, function(err) {
    if (err) {
      console.log('error uploading');
    } else {
      res.redirect('/cms.html');
    }
  });
}

exports.findAllMossaic = function(req, res) {
  Mossaic.find().exec(function(err, result) {
    if (err) {
      res.render('page/home');
    }
    res.render('page/mosaic', {
      data: result
    });
  });
};
