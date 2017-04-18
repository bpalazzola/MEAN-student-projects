var http = require('http');
var fs = require('fs');

var server = http.createServer(function (request, response){

    if(request.url === '/cars'){
        fs.readFile('./views/cars.html', 'utf-8', function(errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(contents);
            response.end();
        });
    }
    else if (request.url === '/cats'){
        fs.readFile('./views/cats.html', 'utf-8', function(errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(contents);
            response.end();
        });

    }
    else if (request.url === '/cars/new'){
        fs.readFile('./views/new_car.html', 'utf-8', function(errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(contents);
            response.end();
        });
    }
    else if (request.url === '/stylesheets/css'){
        fs.readFile('./stylesheets/style.css', function(errors, contents){
            response.writeHead(200, {'Content-Type': 'text/css'});
            response.write(contents);
            response.end();
        });
    }
    else if (request.url === '/images/car_1.jpg'){
        fs.readFile('./images/car_1.jpg',  function(errors, contents){
            response.writeHead(200, {'Content-Type': 'image/jpg'});
            response.write(contents);
            response.end();
        });
    }
    else if (request.url === '/images/car_2.jpg'){
        fs.readFile('./images/car_2.jpg',  function(errors, contents){
            response.writeHead(200, {'Content-Type': 'image/jpg'});
            response.write(contents);
            response.end();
        });
    }
    else if (request.url === '/images/cat_1.jpg'){
        fs.readFile('./images/cat_1.jpg',  function(errors, contents){
            response.writeHead(200, {'Content-Type': 'image/jpg'});
            response.write(contents);
            response.end();
        });
    }
    else if (request.url === '/images/cat_2.jpg'){
        fs.readFile('./images/cat_2.jpg',  function(errors, contents){
            response.writeHead(200, {'Content-Type': 'image/jpg'});
            response.write(contents);
            response.end();
        });
    }
    else {
        response.end('File not Found!');
    }
});

server.listen(6789);

console.log("Running in localhost at port 6789");
