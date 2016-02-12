var SwaggerExpress = require('swagger-express-mw'),
	SwaggerUi = require('swagger-tools/middleware/swagger-ui'),
	app 	= require('express')(),
	express 	= require('express'),
	bodyParser = require('body-parser'),
	server = require('http').Server(app);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var port = process.env.PORT || 3000;

SwaggerExpress.create({ appRoot: __dirname }, function(err, swaggerExpress) {
	if (err) {
		console.error("SWAGGER ERROR");
		console.error(err);
		throw err; 
	}
	app.use(SwaggerUi(swaggerExpress.runner.swagger));
	swaggerExpress.register(app);
	server.listen(port, function() {  
	    console.info('Server listening on port '+ port);
	});
});

server.on("error", function(err) {
	console.error("HTTP SERVER ERROR");
    console.error(err);
});