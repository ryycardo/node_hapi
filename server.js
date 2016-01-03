var Hapi = require('hapi');
var server = new Hapi.Server();

server.connection({ port: process.env.PORT, host:  process.env.IP});

server.ext('onRequest', function(request, replay){
    console.log('Received path ' + request.path);
    replay.continue();
});

server.route({
    path: '/',
    method: 'GET',
    handler: function(request, replay){
        replay('hello world');
    }
});

 server.start(function () {
        console.log('server running at: ' + server.info.uri);
 });