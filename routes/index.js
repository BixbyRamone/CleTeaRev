let indexController = require("../controllers/indexControllers.js");

module.exports = function(app) {
	// HTML routes

	app.get("/admin", indexController.admin),
	app.get("/home", indexController.home),


	// API routes
	app.get("/get/teas", indexController.getTeas),
	app.post("/put/tea", indexController.addTea)

};