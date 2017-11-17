let express = require('express');
let path = require('path');
let logger = require('morgan');
let cookieParser = require('cookie-parser');
let bodyParser = require('body-parser');
let session = require('express-session');
let methodOverride = require('method-override');
let passport = require('passport');
let moment = require('moment');
let fileUpload = require('express-fileupload');

var PORT = process.env.PORT || 3000;
let app = express();

// set variable to MySQL models
// let db = require('./models');

app.use(express.static('./public'));
let db = require('./models');



//---------------------------------------------

db.sequelize.sync(
	// {force:true}
	).then(function() {
	app.listen(PORT, function() {
		console.log("App is listening on PORT " + PORT);
	});
});