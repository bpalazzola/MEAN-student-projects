const express = require('express');
const path = require('path');
const port = process.env.PORT || 6789;
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.resolve('static')));

const server = app.listen(port, function() {
 console.log('listening on port ' + port);
});

const io = require('socket.io').listen(server);

let count = 0;
io.sockets.on('connection', function(socket){
    socket.on('plus_button_click', function(){
        io.emit('server_response_addition', {count : ++count})
    });
    socket.on('user_has_joined', function(){
        socket.emit('server_response_count', {count : count});
    });
    socket.on('reset_button_click', function(){
        count = 0;
        io.emit('server_response_count', {count : count});
    })
});
