let indexController = require("../controllers/indexControllers.js");

module.exports = function(app) {
	// HTML routes


	// API routes
	app.get("/teas", indexController.getTeas)

};