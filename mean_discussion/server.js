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
app.use('/user', require('./server/config/routes/userRoutes.js'));
app.use('/topics', require('./server/config/routes/topicRoutes.js'));
app.use('/categories', require('./server/config/routes/categoryRoutes.js'));
app.use('/comments', require('./server/config/routes/commentRoutes.js'));
app.use('/replies', require('./server/config/routes/replyRoutes.js'));
app.use('/votes', require('./server/config/routes/voteRoutes.js'));

app.listen(port, ()=>console.log(`listening on port ${port}`));
