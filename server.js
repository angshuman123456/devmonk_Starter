'use strict';

// NATIVE MODULES
const path = require('path');

// EXTERNAL MODULES
const express = require('express');
const engine = require('ejs-mate');
const compression = require('compression');
const helmet = require('helmet');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');


// OWN MODULES
const homeController = require('./controllers/home');
const admin = require('./controllers/admin');
const mongoCredentials = require('./config').mongoCredentials;

setupExpress();

/**
 * sets up express middleware
 */
function setupExpress() {
    mongoose.Promise = global.Promise;
    mongoose.connect(mongoCredentials.url, (err) => {
        if (err) return console.log('connection error');
    });

    // CREATING AN INSTACE OF EXPRESS
    const app = express();
    const port = process.env.PORT || 3000;
    configureExpress(app);

    // IN FUTURE WE CAN OPT TO USE  'express-promise-router' INSTEAD
    const router = express.Router(); // eslint-disable-line new-cap

    homeController.setRouting(router);
    admin.setRouting(router);
    app.use(router);


    app.listen(port, (err, result) => {
        if (err) return console.log('server listen failed', err);
        console.log(`listening on ${port}`);
    });
}

/**
 * Configures express (setting up engine and other middlewares)
 * @param {Object} app - express object
 */
function configureExpress(app) {
    // VIEW ENGINE SETUP
    app.engine('ejs', engine);
    app.set('view engine', 'ejs');

    // MIDDLEWARES
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());
    app.use(express.static(path.join(__dirname, 'public')));
    app.use(helmet());
    app.use(compression());

}
