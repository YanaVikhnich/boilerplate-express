let express = require('express');
let app = express();
const querystring = require('querystring');

app.route('/name').get(function (req, res) {
    res.json({ name: req.query.querystring });
}).post(function (req, res) {
    querystring = '?first=firstname&last=lastname';
});



































 module.exports = app;
