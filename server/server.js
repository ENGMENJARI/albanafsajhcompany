var express = require('express');
var mongoose = require('mongoose');
var app = express();

var http = require('http').Server(app);






// require your middleware and routes here
require('./config/middleware.js')(app, express);
require('./config/routes.js')(app, express);


// =============================================================================
/*									Database								 */
// =============================================================================
var mongoURI = "mongodb://localhost/banafsajh";
mongoose.connect(mongoURI);
var db = mongoose.connection;



// =============================================================================
/*									Server   								 */
// =============================================================================

mongoose.Promise = global.Promise
var port = process.env.PORT || 3000;
http.listen(port, function() {
	console.log('server now open on port ' + port);
});

module.exports = app;
