let indexController = require("../controllers/indexControllers.js");

module.exports = function(app) {
	// HTML routes

	app.get("/admin", indexController.admin),
	app.get("/home", indexController.home),
	app.get("/menu", indexController.menu),


	// API routes
	app.get("/get/teas", indexController.getTeas),
	app.post("/post/tea", indexController.addTea),
	app.put("/update/tea", indexController.updateTea)

};