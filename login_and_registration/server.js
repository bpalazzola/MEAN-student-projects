const express = require('express')
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const port = process.env.PORT || 6789;
const cookieParser = require('cookie-parser');
const session = require('express-session');

const sessionConfig = {
    secret:'secret',
    resave: false,
    saveUninitialized: true,
    name: 'cookieFromClient',
    cookie: {
        secure: false,
        httpOnly: false,
        maxAge: 3600000
    }
}
app.use(session(sessionConfig));
app.use(express.static(path.resolve('client')));
app.use(express.static(path.resolve('bower_components')));
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json());
app.use(cookieParser('secret'));
require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);

app.listen(port, ()=>console.log(`listening on port ${port}`))
