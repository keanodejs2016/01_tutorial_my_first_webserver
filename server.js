var http = require('http');


var server = http.createServer(function(req, res){

	res.writeHead(200, {'Content-Type' : 'text/html'} );
	res.write('index.html');


	res.write('<p>This is from node.js class</p>');
	res.end();

});


server.listen(3000);