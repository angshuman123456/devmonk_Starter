const findAllBrochure = require('../helpers/brochures_mStore').findAllBrochure;
const findAllMossaic = require('../helpers/mossaics_mStore').findAllMossaic;
const findAllEvent = require('../helpers/events_mStore').findAllEvent;
const postMessage = require('../helpers/messages_mStore').createMessage;

module.exports = {
    setRouting: function(router) {
        //abhi
        router.get('/cms', this.getCMS);

        router.get('/', this.getHomePage);
        router.get('/about', this.getAbout);
        router.get('/codeOfConduct', this.getCodeOfConduct);
        router.get('/verticals', this.getVerticals);
        router.get('/projects', this.getProjects);
        router.get('/stories', this.getStories);
        router.get('/mosaic', this.getMosaic);
        router.get('/visionMission', this.getVisionMission);
        router.get('/events', this.getEvents);
        router.get('/brochure', this.getBrochure);
        router.get('/team', this.getTeam);
        router.get('/membership', this.getMembership);
        router.get('/rulesOfReimbursement', this.getRulesOfReimbursement);
        router.get('/advisoryCouncil', this.getAdvisoryCouncil);
        router.get('/careers', this.getCareers);
        router.get('/howHumTreeGrows', this.getHowHumTreeGrows);
        router.get('/whatIsHumtree', this.getWhatIsHumtree);
        router.get('/whyHumtree', this.getWhyHumtree);
        router.get('/howToGrowAHumtree', this.getHowToGrowAHumTree);
        router.get('/contact', this.contact);
        router.post('/postMessage', this.postMessage);
    },
    //abhi
    getCMS: function(req, res) {
        res.render('page/cms');
    },

    getHomePage: function(req, res) {
        res.render('page/home');
    },
    getAbout: function(req, res) {
        res.render('page/aboutUs');
    },
    getCodeOfConduct: function(req, res) {
        res.render('page/codeOfConduct');
    },
    getVerticals: function(req, res) {
        res.render('page/verticals');
    },
    getProjects: function(req, res) {
        res.render('page/projects');
    },
    getStories: function(req, res) {
        res.render('page/stories');
    },
    getMosaic: function(req, res) {
        findAllMossaic(req, res);
    },
    getVisionMission: function(req, res) {
        res.render('page/visionMission');
    },
    getEvents: function(req, res) {
        findAllEvent(req, res);
    },
    getBrochure: function(req, res) {
        findAllBrochure(req, res);
    },
    getTeam: function(req, res) {
        res.render('page/team');
    },
    getMembership: function(req, res) {
        res.render('page/membership');
    },
    getRulesOfReimbursement: function(req, res) {
        res.render('page/rulesOfReimbursement');
    },
    getAdvisoryCouncil: function(req, res) {
        res.render('page/advisoryCouncil');
    },
    getCareers: function(req, res) {
        res.render('page/careers');
    },
    getHowHumTreeGrows: function(req, res) {
        res.render('page/howHumTreeGrows');
    },
    getWhatIsHumtree: function(req, res) {
        res.render('page/whatIsHumtree');
    },
    getWhyHumtree: function(req, res) {
        res.render('page/whyHumtree');
    },
    getHowToGrowAHumTree: function(req, res) {
        res.render('page/howToGrowAHumTree');
    },
    contact: function(req, res) {
        res.render('page/contactus');
    },
    postMessage: function(req, res) {
        postMessage(req, res);
    },
};
