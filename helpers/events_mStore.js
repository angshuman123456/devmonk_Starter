const Event = require('../models/events');

exports.createEvent = function (req, res) {
  let event = {
    eventName: req.body['event-name'],
    description: req.body['event-desc'],
    date: req.body.date,
    time: req.body.time,
    eventLink1: req.body['event-link-1'],
    eventLink2: req.body['event-link-2'],
    fileName: req.files[0].key,
    link: req.files[0].location,
  };
  Event.create(event, function (err) {
    if (err) {
      console.log('error uploading');
    } else {
      res.redirect('/cms.html');
    }
  });
}

exports.findAllEvent = function (req, res) {
  Event.find().exec(function (err, result) {
    if (err) {
      res.render('page/home');
    }
    res.render('page/events', {
      data: result
    });
  });
};
