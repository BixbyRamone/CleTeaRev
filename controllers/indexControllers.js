const path = require("path");
const db = require("../models");

module.exports = {

	//HTML routes
	home: function(req, res) {
		res.sendFile(path.join(__dirname, "../public/index.html"));
	},

	about: function(req, res) {
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
		db.Tea.findAll({})
		.then( function(results) {
			// console.log(res.);
			// console.log("*******************************")
			res.json(results);
		});
	},

	addTea: function(req, res) {
		db.Tea.create({
			name: req.body.name,
			priceCup: req.body.priceCup,
			pricePot: req.body.pricePot,
			priceOz: req.body.priceOz,
			description: req.body.description,
			teaTypes: req.body.teaTypes,
			category: req.body.category,
			available: req.body.available
		}).then( function(results) {
			res.json(results);
		});
	},

	updateTea: function(req, res) {
		db.Tea.update(req.body, {			
			where: {
				id: req.user.Tea
			}
			// name: req.body.name,
			// priceCup: req.body.priceCup,
			// pricePot: req.body.pricePot,
			// priceOz: req.body.priceOz,
			// description: req.body.description,
			// teaTypes: req.body.teaTypes,
			// available: req.body.available,
			// imageLink1: req.body.imageLink1
		}).then(function(results) {
			console.log(results);
			res.json(results);
		});
	},

	signup: function(req, res) {
		if( req.session.invite_inviteCode ){
			if( req.xhr ){
		    	res.json({ successRedirect: '/index.html' });
			} else {
		    	res.redirect('/index.html');
			}
		} else {
			res.redirect('/index.html');
		}
	},

	getUserInfo: function(req, res) {
		db.User.findOne({
			where: {
				id: req.user.id
			}
		}).then( results => {
			res.json(results);
		});
	},

	signin: function(req, res) {
		if( req.session.invite_inviteCode ){
			if( req.xhr ){
		    	res.json({ successRedirect: '/index.html' });
			} else {
		    	res.redirect('/index.html');
			}
		} else {
		  res.redirect('/index.html');
		}
	},

	logout: function(req, res) {
		req.session.destroy(function (err) {
    res.redirect('/index.html'); 
		});
	},

	getAdminSearchTerms: function(req, res) {
		db.SearchTerm.findAll({
		}).then(function(results) {
			console.log(results);
			res.json(results);
		});
	},

	// getTeas: function(req, res) {
	// 	db.Tea.findAll({})
	// 	.then( function(results) {
	// 		// console.log(res.);
	// 		// console.log("*******************************")
	// 		res.json(results);
	// 	});
	// },

	postAdminSearchTerm: function(req, res) {
		db.SearchTerm.create({
			term: req.body.term
		}).then(function(results) {
			res.json(results);
		});
	}

	// getTeaTypes
}