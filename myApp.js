let express = require('express');
let app = express();


app.route('/name').get(function (req, res) {
    var firstname = req.query.first;
    var lastname = req.query.last;
    var { first: firstname, last: lastname } = req.query;
    let fullName;
    if (firstname === 'Mick' && lastname === 'Jagger') {
        fullName = 'Mick Jagger';
        res.json({ name: `${firstname} ${lastname}` });
    } else if (firstname === 'Keith' && lastname === 'Richards') {
        fullName = 'Keith Richards';
    } else {
        fullname = `${firstname} ${lastname}`;
    }
    res.json({ name: fullname });
}).post((req, res) => {
    const firstname = req.body.first;
    const lastname = req.body.last;

    const fullname = `${firstname} ${lastname}`;
    res.json({ name: fullname });
});
