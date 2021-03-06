"use strict";
process.stdin.setEncoding('utf-8');

var http = require('http');
var fs = require('fs');
var server = http.createServer();

server.on('request', function (request, response) {
    response.setHeader("Content-Type", "text/html; charset=utf-8");
    if (request.method === 'GET' && request.url === '/') {
        fs.readFile('./index.html', 'utf-8', function (err, data) {
            if (err) throw err;
            response.write(data);
            response.end();
        });

    } else {

        fs.readFile('404.jpg', function (err, data) {
            if (err) throw err;
            response.writeHead(200, {
                'Content-Type': 'image/jpeg'
            });
            response.statusCode = 404;
            response.end(data);
        });
    }
});

server.listen(9000);
