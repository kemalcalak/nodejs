var http = require('http');

var server = requestListener(function(req, res) {
    res.end('Hello Http');
    }
);

var server = http.createServer(requestListener);

server.listen(3000);

console.log('Server is running on port 3000');