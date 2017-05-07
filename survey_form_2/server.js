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
const server = app.listen(port, function() {
 console.log('listening on port 6789');
});

const io = require('socket.io').listen(server);

io.sockets.on('connection', function(socket) {
    console.log('Socket to me!');
    socket.on("button_clicked", function (data){
        console.log("button clicked!" + data.reason);
        socket.emit('server_response', {response: "sockets rule"})
    })
})
