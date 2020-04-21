var http = require('http');

var server = http.createServer(function(request, response) {

    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end("Hello World!\n PORT:"+process.env.PORT+"\n DYNO:"+ process.env.DYNO+"\n APP NAME:"+process.env.HEROKU_APP_NAME);

});

var port = process.env.PORT;
server.listen(port);

console.log("Server running at http://localhost:%d", port);
