let express = require('express');
let app = express();


app.get('/name', function (req, res) {
    const { firstname, lastname } = req.query;

    if (firstname && lastname) {
        res.json({ name: '${firstname} ${lastname}' });

    } 
});



































 module.exports = app;
