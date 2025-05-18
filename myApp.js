let express = require('express');
let app = express();
absolutePath = __dirname + '/public';


app.use('/public', express.static(absolutePath));




































 module.exports = app;
