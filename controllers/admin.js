const awsBrochure = require('../helpers/upload.js').uploadBrochure;
const awsMosaic = require('../helpers/uploadM.js').uploadMosaic;
const awsEvent = require('../helpers/uploadE.js').uploadEvent;
const createBrochure = require('../helpers/brochures_mStore.js').createBrochure;
const createMossaic = require('../helpers/mossaics_mStore.js').createMossaic;
const createEvent = require('../helpers/events_mStore.js').createEvent;
const fetchMessages = require('../helpers/messages_mStore').getMessages;

module.exports = {

    setRouting: function(router) {
        router.get('/getMessages', this.getMessages);
        router.post('/editMossaic', awsMosaic.any(), this.storeDataForMossaic);
        router.post('/editEvent', awsEvent.any(), this.storeDataForEvent);
        router.post('/editBrochure', awsBrochure.any(), this.storeDataForBrochure);
    },

    redirect: function(req, res) {
        res.redirect('/cms.html');
    },

    storeDataForBrochure: function(req, res) {
        createBrochure(req, res);
    },
    storeDataForMossaic: function(req, res) {
        createMossaic(req, res);
    },
    storeDataForEvent: function(req, res) {
        createEvent(req, res);
    },
    getMessages: function(req, res) {
        fetchMessages(req, res);
    }
};
