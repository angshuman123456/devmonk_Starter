
const aws = require('../helpers/AWSupload.js');

module.exports = {

    setRouting: function(router) {
        
        router.post('/uploadFile',aws.Upload.any());

        // router.post('/editMosaic',this.adminPost);
    },

    adminPage : (req,res) => {
          
           
        res.render('admin/dashboard');

    },

    adminPost : (req,res) => {
    
        // const newClub = new Club();
        // newClub.name = req.body.club;
        // newClub.country = req.body.country;
        // newClub.image = req.body.upload;

        // newClub.save((err)=>{
        //     if(err) return console.log(err);
        //     res.render('admin/dashboard')
        // })
    },

    
};
