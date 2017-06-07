const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const port = process.env.PORT || 6789;
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost/1955_db');

const PersonSchema = mongoose.Schema({
    name: String,
})
mongoose.model('Person', PersonSchema);
const Person = mongoose.model('Person');

app.get('/', function(req, res){
    Person.find({}, function(err, people){
        res.json(people);
    })
})
app.get('/new/:name', function(req, res){
    const new_person = new Person({name: req.params.name});
    new_person.save(function(err){
        if(err){
            console.log(err);
        }
        res.redirect('/');
    })
})
app.get('/remove/:name', function(req, res){
    Person.remove({name: req.params.name}, function(err){
        if(err){
            console.log(err);
        }
        res.redirect('/');
    })
})
app.get('/:name', function(req, res){
    Person.findOne({name: req.params.name}, function(err, person){
        if(err){
            console.log(err);
        }
        res.json(person)
    })
})
app.listen(port, function(){
    console.log(`connected on port ${port}`);
})
