const Message = require('../models/messages');

exports.createMessage = function (req, res) {
  let message = {
    name: req.body.name,
    contact: req.body.phone,
    email: req.body.email,
    post: req.body.post,
  };
  Message.create(message, function (err) {
    if (err) {
      console.log('error uploading');
    } else {
      res.redirect('/');
    }
  });
};

exports.getMessages = function (req, res) {
  Message.find().exec(function (err, result) {
    if (err) {
      res.render('/cms.html');
    }
    return res.send(result);
  });
};
