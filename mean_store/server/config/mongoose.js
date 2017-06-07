const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');
mongoose.connect('mongodb://localhost/store_db');

const models_path = path.join(__dirname, './../models');
mongoose.connection.on('connected', ()=>console.log('connected to the database'))

fs.readdirSync(models_path).forEach(function(file){
    if(file.indexOf('.js') >= 0) {
        require(models_path + '/' + file);
    }
});
