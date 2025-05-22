let express = require('express');
let app = express();
const querystring = require('querystring');

app.route('/name').get(function (req, res) {
    res.json({ name: req.query.name });
}).post(function (req, res) {
    querystring.parse('firstname lastname');
});



































 module.exports = app;
