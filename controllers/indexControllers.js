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

	//API routes
	getTeas: 
}