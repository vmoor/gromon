/**
 * app.js
 */

var 
	express = require('express')
	, http = require('http')
	, path = require('path')
	, util = require('util')
	, serialport = require('serialport')

	, app = express()
	, server = http.createServer(app)
	, io = require('socket.io').listen(server)

	, routes = require('./routes')
	, user = require('./routes/user')

	, remoteProbe = new serialport.SerialPort(
		// "/dev/rfcomm0"
		"/dev/ptmx"
		, { baudrate: 38400, parser: serialport.parsers.readline("\n") }
		)
;

//var app = express();

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'ejs');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.cookieParser('your secret here'));
  app.use(express.session());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

// Define some routes.
app.get('/', routes.index);
app.get('/users', user.list);

// Slap in some socket.io
io.sockets.on('connection', function(socket){

	socket.on('connect', function() {
		console.log("New connection.");
		return lightSwitch;
	});

	socket.on('getSwitch', function(){
		console.log("getSwitch:  " + util.inspect(lightSwitch));
		return lightSwitch;
	});

 	socket.on('getTemp', function(){
		lightSwitch.state = !lightSwitch.state;
		io.sockets.emit('getSwitch', lightSwitch);
 		console.log("State is: " + lightSwitch.state);
		serialPort.write("cmd::getTemp!\n");
	});

}); // end io.sockets.on()

// Start it up!
server.listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
