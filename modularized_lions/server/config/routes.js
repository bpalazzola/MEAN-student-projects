const mongoose = require('mongoose');
const Lion = mongoose.model('Lion');
const lions = require('../controllers/lions.js');

module.exports = function(app){

    app.get('/', function(req, res){
        lions.show(req, res);
    })

    app.get('/lions/new', function(req, res){
        res.render('new_lion');
    })

    app.post('/lions', function(req, res){
        lions.create(req, res);
    })

    app.get('/lions/edit/:id', function(req, res){
        lions.showOneEdit(req, res);
    })

    app.post('/lions/destroy/:id', function(req, res){
        lions.delete(req, res);
    })

    app.get('/lions/:id', function(req, res){
        lions.showOne(req, res);
    })

    app.post('/lions/:id', function(req, res){
        lions.update(req, res);
    })
}
