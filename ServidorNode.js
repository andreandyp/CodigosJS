var http = require('http');
var server = http.createServer();
server.on('request', control);
server.listen(8082);
console.log("Servidor iniciado");

function control(petic, resp) {
	resp.writeHead(200, {'content-type': 'text/html'});
	resp.write('<h1>Hola desde Node.js</h1>');
	resp.end();
}