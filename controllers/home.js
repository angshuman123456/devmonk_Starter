module.exports = {
    setRouting: function(router) {
        router.get('/', this.getHomePage);
        router.get('/about', this.getAbout);
        router.get('/codeOfConduct', this.getCodeOfConduct);
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
};
