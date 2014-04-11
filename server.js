var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

app.configure(function(){
	app.use(express.static(__dirname + '/app')); 
	app.use(express.logger('dev'));
	app.use(express.bodyParser());
	app.use(express.methodOverride());
})

require('./server/route.js')(app);

app.listen(port);
console.log('App listening on port ' + port);
