module.exports = {
    setRouting: function(router) {
        router.get('/', this.getHomePage);
        router.get('/about', this.getAbout);
        router.get('/codeOfConduct', this.getCodeOfConduct);
        router.get('/verticals', this.getVerticals);
        router.get('/projects', this.getProjects);
        router.get('/stories', this.getStories);
        router.get('/mosaic', this.getMosaic);
        router.get('/vissionMission', this.getVissionMission);
        router.get('/events', this.getEvents);
        router.get('/brochure', this.getBrochure);
        router.get('/team', this.getTeam);
        router.get('/membership', this.getMembership);
        router.get('/rulesOfReimbursement', this.getRulesOfReimbursement);
        router.get('/managementCommittee', this.getManagementCommittee);
        router.get('/advisoryCouncil', this.getAdvisoryCouncil);
        router.get('/careers', this.getCareers);
        router.get('/howHumTreeGrows', this.getHowHumTreeGrows);
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
        res.render('page/mosaic');
    },
    getVissionMission: function(req, res) {
        res.render('page/vissionMission');
    },
    getEvents: function(req, res) {
        res.render('page/events');
    },
    getBrochure: function(req, res) {
        res.render('page/brochure');
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
    getManagementCommittee: function(req, res) {
        res.render('page/managementCommittee');
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
};
