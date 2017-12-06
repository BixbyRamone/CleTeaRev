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
			var teaTotal = [];
			var teaPanel ={};
			for (var i = 0; i < results.length; i++) {
			 teaPanel = new furtherFunc.Tea(results[i]);
			teaTotal.push(teaPanel);
					
		}			
			res.json(teaTotal);
		});
	},

	addTea: function(req, res) {
		db.Tea.create({
			name: req.body.name,
			priceCup: req.body.priceCup,
			pricePot: req.body.pricePot,
			priceOz: req.body.priceOz,
			description: req.body.description,
			teaTypes: req.body.teaTypes
		}).then( function(results) {
			res.json(results);
		});
	},

	
}

furtherFunc = {
	Tea: function(teaData) {

		this.name = teaData.name;
		this.nameElement = furtherFunc.nameToElement(teaData);
		this.priceCup = teaData.priceCup;
		this.pricePot = teaData.pricePot;
		this.priceOz = teaData.priceOz;
		this.description = teaData.description;
		this.teaTypes = teaData.teaTypes;
		this.teaHTMLObj = furtherFunc.teaObjtoHTML(this);
		this.modalFunction = furtherFunc.modalFunction(this.nameElement);
		// this.modalButton = furtherFunc.modalClickExtension(this.modalFunction);
	},

	nameToElement: function(obj) {
 		
 		var elementName = obj.name.replace(/ /g, "-");
 		var elementName = elementName.toLowerCase()

 		return elementName;
 	},

 	teaObjtoHTML: function (obj) {


			var teaInfo = '<li class="list-group-item">';
 		teaInfo += '<div class="col-md-6">name: ' + obj.name + ' ' + '<br> ';
 		teaInfo += 'price: ' + obj.priceCup + ' <br> ';
 		teaInfo += 'description: ' + obj.description + ' <br> ';
 		teaInfo += 'tea types: ' + obj.teaTypes;
 		teaInfo += '<img class="col-md-12 " src="https://static1.squarespace.com/static/5254245de4b0d49865bf2ad0/551db655e4b0c1bae096e600/551db6e9e4b0a007421e8164/1428010733370/golden+assam.jpg?format=500w">';
 		teaInfo = furtherFunc.appendDeleteButton(teaInfo, obj);
 		teaInfo += '</li>';

 		return teaInfo;

	},

	appendDeleteButton: function (display, thisTea) {
		
		display += '<div class="row">'
 	display += '<button name="' + thisTea.nameElement + '-delete" id="delete-button" class="' + thisTea.nameElement + ' col-sm-6 ng-change">DELETE</button>';
 	display += '<button name="' + thisTea.nameElement + '-edit" id="edit-tea-button" class="' + thisTea.nameElement + ' col-sm-6">EDIT</button>';
 	display += '</div>'

 	//modal html
 	display += '<div id="'+ thisTea.nameElement + '-delete-modal" class="modal"><!-- Modal content --><div class="modal-content"><span class="close">&times;</span><button>Are You Certain You Want To Delete This Item?</button></div></div>';
 	display += '<div id="' + thisTea.nameElement + '-edit-modal" class="modal"><!-- Modal content --><div class="modal-content"><span class="close">&times;</span><div id="add-tea-bar" class="container"><label for="basic-url">Tea Name:</label><div class="input-group"><input id="tea-name-input" type="text" class="form-control" placeholder="'+ thisTea.name + '" aria-describedby="basic-addon1"></div><label for="basic-url">Tea Price:</label><div class="input-group"><span class="input-group-addon" id="basic-addon1">$</span><input id="tea-price-cup-input" type="text" class="form-control" placeholder="Cup: ' + thisTea.priceCup + '" aria-describedby="basic-addon2"></div><div class="input-group"><span class="input-group-addon" id="basic-addon1">$</span><input id="tea-price-pot-input" type="text" class="form-control" placeholder="Pot: ' + thisTea.pricePot + '" aria-describedby="basic-addon2"></div><div class="input-group"><span class="input-group-addon" id="basic-addon1">$</span><input id="tea-price-oz-input" type="text" class="form-control" placeholder="Oz: '+ thisTea.priceOz + '" aria-describedby="basic-addon2"></div><label for="basic-url">Tea Description:</label><div class="input-group"><input id="tea-descript-input" type="text" class="form-control" aria-label="Amount (to the nearest dollar)" placeholder="' + thisTea.description + '"></div><label for="basic-url">Tea Types:</label><div class="input-group"><input id="tea-types-input" type="text" class="form-control" aria-label="Amount (to the nearest dollar)" placeholder="' + thisTea.types + '"></div>Currently Availble  <input id="checkbox-id" type="checkbox" name="availability" checked><br><button id="add-item-button"> Submit </button></div></div></div>';
 	// console.log(this);

 	// modalFunction(thisTea.nameElement); 

 	return display;

	},

	modalFunction: function(idParam) {
 		console.log(idParam);

 		var htmlObj = {}

 		console.log(this.modalFunction);

 		// console.log(idParam + '-delete-modal');

 		// Get the modal
// htmlObj.modal = this.appendDeleteButton.getElementById(idParam + "-modal");

// console.log(htmlObj.modal);

// Get the button that opens the modal
// htmlObj.btn = this.appendDeleteButton.getElementsByName(idParam)[0];


// console.log(htmlObj.btn);
// Get the <span> element that closes the modal
// htmlObj.span = this.appendDeleteButton.getElementsByClassName("close")[0];
// console.log(htmlObj.span);

console.log(htmlObj)

// return htmlObj;

// When the user clicks on the button, open the modal 
// htmlObj.btn.onclick = function() {
//     htmlObj.modal.style.display = "block";
// }

// // When the user clicks on <span> (x), close the modal
// htmlObj.span.onclick = function() {
//     htmlObj.modal.style.display = "none";
// }

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//     if (event.target == htmlObj.modal) {
//         htmlObj.modal.style.display = "none";
//     }
// }
 	},

 	modalClickExtension: function(obj) {
 		console.log(obj);
 		// When the user clicks on the button, open the modal 
obj.btn.onclick = function() {
	console.log("btn clicked")
    obj.modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
obj.span.onclick = function() {
    obj.modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == obj.modal) {
        obj.modal.style.display = "none";
    }
}
 	}

}