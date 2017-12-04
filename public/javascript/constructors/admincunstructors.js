$(document).ready(function() {

	function Tea(teaData) {

		this.name = teaData.name;
		this.priceCup = teaData.priceCup;
		this.pricePot = teaData.pricePot;
		this.priceOz = teaData.priceOz;
		this.description = teaData.description;
		this.teaTypes = teaData.teaTypes;
		this.teaHTMLObj = teaObjtoHTML();
	}

	function teaObjtoHTML() {

			var teaInfo = list;
 		teaInfo += '<div class="col-md-6">name: ' + this.name + ' ' + '<br> ';
 		teaInfo += 'price: ' + this.priceCup + ' <br> ';
 		teaInfo += 'description: ' + this.description + ' <br> ';
 		teaInfo += 'tea types: ' + this.types;
 		teaInfo += '<img class="col-md-12 " src="https://static1.squarespace.com/static/5254245de4b0d49865bf2ad0/551db655e4b0c1bae096e600/551db6e9e4b0a007421e8164/1428010733370/golden+assam.jpg?format=500w">';
 		teaInfo = appendDeleteButton(teaInfo, this);
 		teaInfo += '</li>';

 		return teaInfo;

	}

	function appendDeleteButton(teaInfo, this) {

		display += '<div class="row">'
 	display += '<button name="delete" id="delete-button" class="col-sm-6">DELETE</button>';
 	display += '<button name="edit" id="edit-tea-button" class="col-sm-6">EDIT</button>';
 	display += '</div>'
 	display += '<div id="deleteModal" class="modal"><!-- Modal content --><div class="modal-content"><span class="close">&times;</span><button>Are You Certain You Want To Delete This Item?</button></div></div>';
 	display += '<div id="editModal" class="modal"><!-- Modal content --><div class="modal-content"><span class="close">&times;</span><div id="add-tea-bar" class="container"><label for="basic-url">Tea Name:</label><div class="input-group"><input id="tea-name-input" type="text" class="form-control" placeholder="'+ obj.name + '" aria-describedby="basic-addon1"></div><label for="basic-url">Tea Price:</label><div class="input-group"><span class="input-group-addon" id="basic-addon1">$</span><input id="tea-price-cup-input" type="text" class="form-control" placeholder="Cup: ' + obj.priceCup + '" aria-describedby="basic-addon2"></div><div class="input-group"><span class="input-group-addon" id="basic-addon1">$</span><input id="tea-price-pot-input" type="text" class="form-control" placeholder="Pot: ' + obj.pricePot + '" aria-describedby="basic-addon2"></div><div class="input-group"><span class="input-group-addon" id="basic-addon1">$</span><input id="tea-price-oz-input" type="text" class="form-control" placeholder="Oz: '+ obj.priceOz + '" aria-describedby="basic-addon2"></div><label for="basic-url">Tea Description:</label><div class="input-group"><input id="tea-descript-input" type="text" class="form-control" aria-label="Amount (to the nearest dollar)" placeholder="' + obj.description + '"></div><label for="basic-url">Tea Types:</label><div class="input-group"><input id="tea-types-input" type="text" class="form-control" aria-label="Amount (to the nearest dollar)" placeholder="' + obj.types + '"></div>Currently Availble  <input id="checkbox-id" type="checkbox" name="availability" checked><br><button id="add-item-button"> Submit </button></div></div></div>';
 	// console.log(this);

 	// modalTest();

 	return display;

	}

module.exports(Tea);


});