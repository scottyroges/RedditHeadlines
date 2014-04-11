// var fs = require('fs');
// var http = require('http');

// function route(pathname, res){
// 	if(pathname == '/service/headlines'){

// 		http.get('http://www.reddit.com/.rss', function(resp){
// 			var str = '';

// 			resp.on('data', function(chunk){
// 				str += chunk;
// 			});
// 			resp.on('end', function(){
// 				res.writeHead(200, {'ContentType':'applicaton/xml'});
// 				res.write(str);
// 				res.end();
// 			});
// 		}).on("error", function(e){
// 			console.log("Got error: " + e.message);
// 		});
// 	} else {
// 		if(pathname == '/'){
// 			pathname = '/index.html';
// 		}
// 		fs.readFile('app' + pathname, function(error, content){
// 			if(error){
// 				res.writeHead(500);
// 				res.end();
// 			} else {
// 				res.writeHead(200, {'ContentType':'text/html'});
// 				res.write(content, 'utf-8');
// 				res.end();
// 			}
// 		});
// 	}
// }

// exports.route = route;

var http = require('http');

module.exports = function(app){
	app.get('/service/headlines', function(req,res){
		http.get('http://www.reddit.com/.rss', function(resp){
			var str = '';

			resp.on('data', function(chunk){
				str += chunk;
			});
			resp.on('end', function(){
				res.send(str);
			});
		}).on("error", function(e){
				console.log("Got error: " + e.message);
			});
		});

	app.get('*', function(req, res){
		res.sendfile('./app/index.html');
	});
}