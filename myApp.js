let express = require('express');
let app = express();
let dotenv = require('dotenv').config();

app.get('/json', function (req, res) {
    res.json({ "message": "Hello json" });
    process.env.MESSAGE_STYLE;
});



































 module.exports = app;
