let express = require('express');
let app = express();


app.route('/name').get( function (req, res) {
    const { firstname, lastname } = req.query;
}).post(function (req, res) {
    if (firstname && lastname) {
        res.json({ name: '${firstname} ${lastname}' });
    }
});
    




































 module.exports = app;
