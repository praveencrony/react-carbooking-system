'use strict';

const express       = require('express');
const path          = require('path');
const app           = express();

//Set Public Path Dir
app.use(express.static(path.join(__dirname, 'public')));


// Handles all routes so you do not get a not found error
app.get('*', function (request, response){
    response.sendFile(path.resolve(__dirname, 'public', 'index.html'))
})

//Port Config
const server      = require('http').Server(app);
const serverIp    = process.env.APP_IP || '0.0.0.0';
const serverPort  = process.env.PORT || 5000; // for heroku purpose otherwise get it from env

server.listen(serverPort); //pass serverIp also if u want

module.exports = app;
