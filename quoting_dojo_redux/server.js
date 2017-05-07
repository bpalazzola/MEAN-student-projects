const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const port = process.env.PORT || 6789;

mongoose.connect('mongodb://localhost/quoting_dojo');
const QuoteSchema = new mongoose.Schema({
    user: String,
    content: String
}, {timestamps: true})
mongoose.model('Quote', QuoteSchema);
const Quote = mongoose.model('Quote');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.resolve('static')));
app.set('views', path.join('views'));
app.set('view engine', 'ejs');

app.get('/', function(req, res){
    res.render('index');
})
app.get('/quotes', function(req, res){
    Quote.find({}, function(err, quotes){
        if(err){
            res.render('index');
        }
        res.render('quotes', {quotes: quotes});
    })
})
app.post('/quotes', function(req, res){
    console.log(req.body);
    const quote = new Quote(req.body);
    quote.save(function(err){
        if(err){
            res.render('index', {errors: quote.errors})
        } else {
            res.redirect('/quotes');
        }
    })
})



app.listen(port, function(){
    console.log(`listening on port ${ port }`);
})
