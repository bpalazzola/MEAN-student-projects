const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 6789;
const path = require('path');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const sessionConfig = {
  secret: 'cookieMonster',
  resave: false,
  saveUninitialized: true,
  name: 'sessionCookie',
  cookie: {
    secure: false,
    httpOnly: false,
    maxAge: 3600000,
  }
};
app.use(session(sessionConfig));
app.use(cookieParser('randomphrase'));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(express.static(path.resolve('client')));
app.use(express.static(path.resolve('bower_components')));

require('./server/config/mongoose');
const userRoutes = require('./server/config/routes/userRoutes');
const messageRoutes = require('./server/config/routes/messageRoutes');
const commentRoutes = require('./server/config/routes/commentRoutes');
app.use('/user', userRoutes);
app.use('/message', messageRoutes);
app.use('/comment', commentRoutes);
app.listen(port, ()=>console.log(`listening on port ${port}`));
