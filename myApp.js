let express = require('express');
let app = express();

app.route('/name').get(function (req, res) {
    res.json({ name: 'firstname lastname' });
}).post(function (req, res) {
    req.query;
});



































 module.exports = app;
