const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const port = process.env.PORT || 6789;

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.resolve('static')));
app.set('views', path.join('./client/views'));
app.set('view engine', 'ejs');

require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);

app.listen(port, function(){
    console.log(`connected on port ${port}`);
})
