const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 6789;
const path = require('path');

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(express.static(path.resolve('client')));
app.use(express.static(path.resolve('bower_components')));

require('./server/config/mongoose');
const customerRoutes = require('./server/config/routes/customerRoutes.js');
const productRoutes = require('./server/config/routes/productRoutes.js');
const orderRoutes = require('./server/config/routes/orderRoutes.js');
app.use('/customers/', customerRoutes);
app.use('/products/', productRoutes);
app.use('/orders/', orderRoutes);

app.listen(port, ()=>console.log(`listening on port ${port}`));
