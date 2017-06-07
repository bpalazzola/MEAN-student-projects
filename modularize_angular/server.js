const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const port = process.env.PORT || 6789;

app.use(express.static(path.resolve('client')));
app.use(express.static(path.resolve('bower_components')));
app.use(bodyParser.json());

app.listen(port, ()=>console.log(`listening on port ${port}`))
