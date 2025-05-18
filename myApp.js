let express = require('express');
let app = express();
absolutePath = __dirname + '/public';


app.use(absolutePath, express.static('/public'));




































 module.exports = app;
