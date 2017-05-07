const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const port = process.env.PORT || 6789;

mongoose.connect('mongodb://localhost/lion_db');
const LionSchema = new mongoose.Schema({
    name: String,
    age: Number,
    house_words: String
}, {timestamps: true})
mongoose.model('Lion', LionSchema);
const Lion = mongoose.model('Lion');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.resolve('static')));
app.set('views', path.join('views'));
app.set('view engine', 'ejs');

app.get('/', function(req, res){
    Lion.find({}, function(err, lions){
        if(err){
            res.render('index', {errors: err})
        }
        res.render('index', {lions: lions})
    })
})

app.get('/lions/new', function(req, res){
    res.render('new_lion');
})





app.post('/lions', function(req, res){
    const lion = new Lion(req.body);
    lion.save(function(err){
        if(err){
            res.render('new_lion', {errors: err})
        }
        res.redirect('/')
    })
})

app.get('/lions/edit/:id', function(req, res){
    const lion = Lion.findOne({_id: req.params.id}, function(err, lion){
        if(err){
            res.redirect('/')
        }
        res.render('edit', {lion: lion});
    })
})

app.post('/lions/destroy/:id', function(req, res){
    Lion.remove({_id: req.params.id}, function(err){
        if(err){
            res.render('edit', {errors: err})
        }
        res.redirect('/')
    })
})

app.get('/lions/:id', function(req, res){
    Lion.findOne({_id: req.params.id}, function(err, lion){
        if(err){
            res.redirect('/');
        }
        res.render('one_lion', {lion: lion})
    })
})

app.post('/lions/:id', function(req, res){
    Lion.update({_id: req.params.id}, req.body, function(err){
        if(err){
            res.redirect(`/lions/edit/${req.params.id}`)
        }
        res.redirect(`/lions/${req.params.id}`)
    })
})



app.listen(port, function(){
    console.log(`connected on port ${port}`);
})
