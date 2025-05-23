let express = require('express');
let app = express();


app.route('/name').get( function (req, res) {
    var firstname = req.query.first;
    var lastname = req.query.last;
    var { first: firstname, last: lastname } = req.query;
}).post(function (req, res) {
    if (firstname && lastname) {
        res.json({ name: '${firstname} ${lastname}' });
    }
});
    




































 module.exports = app;
