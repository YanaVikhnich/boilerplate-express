require('dotenv').config();
let express = require('express');
let app = express();


app.get('/json', function (req, res, next) {
    console.log(req.method + " " + req.path + " - " + req.ip);
    next();
});
app.post('/json', function (req, res, next) {
    console.log(req.method + " " + req.path + " - " + req.ip);
    next();
});




































 module.exports = app;
