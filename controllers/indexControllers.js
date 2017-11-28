const path = require("path");
const db = require("../models");

module.exports = {

	//HTML routes
	home: function(req, res) {
		res.sendFile(path.join(__dirname, "../public/index.html"));
	},

	menu: function(req, res) {
		res.sendFile(path.join(__dirname, "../public/about.html"));
	},

	store: function(req, res) {
		res.sendFile(path.join(__dirname, "../public/blog.html"));
	},

	checkout: function(req, res) {
		res.sendFile(path.join(__dirname, "../public/checkout.html"));
	},

	kombucha: function(req, res) {
		res.sendFile(path.join(__dirname, "../public/kombucha.html"));
	},

	menu: function(req, res) {
		res.sendFile(path.join(__dirname, "../public/menu.html"));
	},

	store: function(req, res) {
		res.sendFile(path.join(__dirname, "../public/store.html"));
	},

	wholesale: function(req, res) {
		res.sendFile(path.join(__dirname, "../public/wholesale.html"));
	},

	admin: function(req, res) {
		res.sendFile(path.join(__dirname, "../public/admin.html"));
	},

	//API routes
	getTeas: function(req, res) {
		db.Tea.findAll({
			// where: {
			// 	id: 1
			// }
		}).then( function(results) {
			res.json(results);
		});
	},

	addTea: function(req, res) {
		db.Tea.create({
			name: req.body.name,
			price: req.body.price,
			description: req.body.description,
			teaTypes: req.body.teaTypes
		}).then( function(results) {
			res.json(results);
		});
	}

	// getTeaTypes
}