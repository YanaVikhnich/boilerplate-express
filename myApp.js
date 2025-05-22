let express = require('express');
let app = express();

app.get('/:word/echo', function (req, res) {
    res.json({ echo: word });
    console.log(req.params.word);
});



































 module.exports = app;
