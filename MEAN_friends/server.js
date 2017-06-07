const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const port = process.env.PORT || 6789;



app.use(express.static(path.resolve('client')));
app.use(express.static(path.resolve('bower_components')));
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json());
require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);

app.listen(port, ()=>console.log(`listening on port ${port}`))
