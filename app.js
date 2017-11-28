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

app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(fileUpload());

// user morgan for developement
app.use(logger('dev'));
// Override with POST 
app.use(methodOverride("_method"));	

let index = require('./routes/index.js')(app);

//Middleware
app.use(express.static('./public'));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(require('express-session')({ secret: 'keyboard cat', resave: true, saveUninitialized: true }));
app.use(passport.initialize());

app.use(passport.session());

//---------------------------------------------

db.sequelize.sync(
	// {force:true}
	).then(function() {
	app.listen(PORT, function() {
		console.log("App is listening on PORT " + PORT);
	});
});

	module.exports = app;