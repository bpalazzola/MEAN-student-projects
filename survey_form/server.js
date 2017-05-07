const express = require('express');
const bodyParser = require('body-parser');
const path = require("path");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.resolve("static")));
app.set('views', path.resolve("views"));
app.set('view engine', 'ejs');

app.get('/', function(req, res){
    res.render('index');
})
app.post('/process', function(req, res){
    res.render('result', req.body);
})

const port = 6789;
app.listen(port, function() {
 console.log('listening on port 6789');
});
