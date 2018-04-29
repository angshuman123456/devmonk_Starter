module.exports = {
    setRouting: function(router) {
        router.get('/', this.getHomePage);
        router.get('/about', this.getAbout);
    },
    getHomePage: function(req, res) {
        res.render('page/home');
    },
    getAbout: function(req, res) {
        res.render('page/aboutUs');
    },
};
