let indexController = require("../controllers/indexControllers.js");

module.exports = function(app, passport) {
	// HTML routes

	app.get("/admin", indexController.admin),
	app.get("/home", indexController.home),
	app.get("/menu", indexController.menu),


	// API routes
	app.get("/get/teas", indexController.getTeas),
	app.post("/post/tea", indexController.addTea),
	// app.put("/update/tea", indexController.updateTea),
  	app.get("/api/user", indexController.getUserInfo),
  	app.post("/post/searchterm", indexController.postAdminSearchTerm),
  	app.get("/get/searchterms", indexController.getAdminSearchTerms),
  	// app.put("/update/tea", indexController.updateTeaInfo),

	// Passport Routes
	app.post("/signup", passport.authenticate('local-signup'), indexController.signup),
	app.post('/signin', passport.authenticate('local-signin'), indexController.signin),
	app.get("/logout", indexController.logout)

};