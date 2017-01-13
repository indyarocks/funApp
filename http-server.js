var http = require('http');

requestHandler = function(req, res){
	console.log('Inside Request Handler!');
	if(req.url == '/'){
		res.end('Welcome Home!');
	} else {
		res.end("Don't wander away from Home!")
	}
}

var server = http.createServer(requestHandler);

server.listen(3000, function(){
	console.log('Started server on port: 3000')
})
