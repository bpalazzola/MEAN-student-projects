const express = require('express'),
app = express(),
bodyParser = require('body-parser'),
mongoose = require('mongoose'),
path = require('path')
port = process.env.PORT || 6789;

app.use( express.static( path.resolve('client' )));
app.use( express.static( path.resolve('bower_components' )));
app.use(bodyParser.json())

app.listen(port, ()=>console.log(`listening on port ${port}`))
