$(document).ready(function() {

	// var Tea = require('/constructors/adminconstructors.js');

	var areTeasVis = false;

	$('#add-tea-bar').hide();

	$('#view-teas').on("click", getDisplayTeas);



	//Tea image Functionality

  $("#add-item-button").on("click", postTeas);

 $(document).on("click", "#delete-button", deleteTea);
 $(document).on("click", "#edit-tea-button",editTea);

	//======================Constructor Stuff==============

	function Tea(teaData) {

		this.name = teaData.name;
		this.nameElement = nameToElement(teaData);
		this.priceCup = teaData.priceCup;
		this.pricePot = teaData.pricePot;
		this.priceOz = teaData.priceOz;
		this.description = teaData.description;
		this.teaTypes = teaData.teaTypes;
		this.teaHTMLObj = teaObjtoHTML(this);
		// this.modalFunction = modalFunction();
	}

	function teaObjtoHTML(obj) {

			var teaInfo = '<li class="list-group-item">';
 		teaInfo += '<div class="col-md-6">name: ' + obj.name + ' ' + '<br> ';
 		teaInfo += 'price: ' + obj.priceCup + ' <br> ';
 		teaInfo += 'description: ' + obj.description + ' <br> ';
 		teaInfo += 'tea types: ' + obj.teaTypes;
 		teaInfo += '<img class="col-md-12 " src="https://static1.squarespace.com/static/5254245de4b0d49865bf2ad0/551db655e4b0c1bae096e600/551db6e9e4b0a007421e8164/1428010733370/golden+assam.jpg?format=500w">';
 		teaInfo = appendDeleteButton(teaInfo, obj);
 		teaInfo += '</li>';

 		return teaInfo;

	}

	function appendDeleteButton(display, thisTea) {

		console.log(thisTea.nameElement);

		display += '<div class="row">'
 	display += '<button name="' + thisTea.nameElement + '-delete" id="delete-button" class="' + thisTea.nameElement + ' col-sm-6">DELETE</button>';
 	display += '<button name="' + thisTea.nameElement + '" id="edit-tea-button" class="' + thisTea.nameElement + ' col-sm-6">EDIT</button>';
 	display += '</div>'
 	display += '<div hidden id="' + thisTea.nameElement + '-add-tea-popup" class="container"><div class="input-group"><input id="tea-name-input" type="text" class="form-control" placeholder="'+thisTea.name+'" aria-describedby="basic-addon1"></div><div class="input-group"><span class="input-group-addon" id="basic-addon1">$</span><input id="tea-price-cup-input" type="text" class="form-control" placeholder="'+thisTea.priceCup+' per Cup" aria-describedby="basic-addon2"></div><div class="input-group"><span class="input-group-addon" id="basic-addon1">$</span><input id="tea-price-pot-input" type="text" class="form-control" placeholder="'+ thisTea.pricePot +' per Pot" aria-describedby="basic-addon2"></div><div class="input-group"><span class="input-group-addon" id="basic-addon1">$</span><input id="tea-price-oz-input" type="text" class="form-control" placeholder="'+thisTea.priceOz+' per Oz" aria-describedby="basic-addon2"></div><label for="basic-url">Tea Description:</label><div class="input-group"><input id="tea-descript-input" type="text" class="form-control" aria-label="Amount (to the nearest dollar)" placeholder="'+thisTea.description+'"></div><label for="basic-url">Tea Types:</label><div class="input-group"><input id="tea-types-input" type="text" class="form-control" aria-label="Amount (to the nearest dollar)" placeholder="'+thisTea.teaTypes+'"></div>Currently Availble  <input id="checkbox-id" type="checkbox" name="availability" checked><br><button id="add-item-button"> Submit </button></div>'
 	// display += '<div id="'+ thisTea.nameElement + '-delete-modal" class="modal"><!-- Modal content --><div class="modal-content"><span class="close">&times;</span><button>Are You Certain You Want To Delete This Item?</button></div></div>';
 	// display += '<div id="' + thisTea.nameElement + '-edit-modal" class="modal"><!-- Modal content --><div class="modal-content"><span class="close">&times;</span><div id="add-tea-bar" class="container"><label for="basic-url">Tea Name:</label><div class="input-group"><input id="tea-name-input" type="text" class="form-control" placeholder="'+ thisTea.name + '" aria-describedby="basic-addon1"></div><label for="basic-url">Tea Price:</label><div class="input-group"><span class="input-group-addon" id="basic-addon1">$</span><input id="tea-price-cup-input" type="text" class="form-control" placeholder="Cup: ' + thisTea.priceCup + '" aria-describedby="basic-addon2"></div><div class="input-group"><span class="input-group-addon" id="basic-addon1">$</span><input id="tea-price-pot-input" type="text" class="form-control" placeholder="Pot: ' + thisTea.pricePot + '" aria-describedby="basic-addon2"></div><div class="input-group"><span class="input-group-addon" id="basic-addon1">$</span><input id="tea-price-oz-input" type="text" class="form-control" placeholder="Oz: '+ thisTea.priceOz + '" aria-describedby="basic-addon2"></div><label for="basic-url">Tea Description:</label><div class="input-group"><input id="tea-descript-input" type="text" class="form-control" aria-label="Amount (to the nearest dollar)" placeholder="' + thisTea.description + '"></div><label for="basic-url">Tea Types:</label><div class="input-group"><input id="tea-types-input" type="text" class="form-control" aria-label="Amount (to the nearest dollar)" placeholder="' + thisTea.types + '"></div>Currently Availble  <input id="checkbox-id" type="checkbox" name="availability" checked><br><button id="add-item-button"> Submit </button></div></div></div>';
 	// console.log(this);

 	$('#'+thisTea.nameElement+'-add-tea-popup').hide();

 	// modalFunction(thisTea.nameElement); 

 	return display;

	}

	//=====================================================

	// function for getting teas from db
	function getDisplayTeas() {

		if (areTeasVis === false) {

			$.get('/get/teas').done(function(data) {


				showDisplayTeas(data);
			});

			areTeasVis = true;
		}
	}

	function showDisplayTeas(teaData) {

		$('#tea-list').empty();
		$('#add-tea-bar').show();

		for (var i = 0; i < teaData.length; i++) {
			var teaPanel = new Tea(teaData[i]);
			console.log(teaPanel);
			$('#tea-list').append(teaPanel.teaHTMLObj);
		}
	}

	function postTeas() {

 		var teaPostObj = {
 			name: $("#tea-name-input").val().trim(),
 			priceCup: $("#tea-price-cup-input").val().trim(),
 			pricePot: $("#tea-price-pot-input").val().trim(),
 			priceOz: $("#tea-price-oz-input").val().trim(),
 			description: $("#tea-descript-input").val().trim(),
 			teaTypes: $("#tea-types-input").val().trim()
 		};

 		// console.log(teaPostObj);
		// console.log(window.location);
 		$.post("/post/tea", teaPostObj, function() {
			getDisplayTeas();
			// console.log($(document));
		});

 		$("#tea-name-input").val('');
 		$("#tea-price-cup-input").val('');
 		$("#tea-price-pot-input").val('');
 		$("#tea-price-oz-input").val('');
 		$("#tea-descript-input").val('');
 		$("#tea-types-input").val('');

 		areTeaVis = false;
	
 	}

 	function deleteTea() {

 		$("#" + this.id + "-add-tea-popup").attr('show');

 		
 		console.log(this);
 		// console.log(this);
 		// console.log(this.name);
 		// console.log(this.id);
 		// console.log(this.class);
 		// modalFunction(this.name);

 	}

 	function editTea() {
 		var idVar = this.name + "-add-tea-popup";
 		console.log(idVar);


 		 $("#" + idVar).attr('show');


 		console.log(this.name + "-add-tea-popup");

 		// modalFunction(this.name);

 	}


 	function nameToElement(obj) {
 		
 		var elementName = obj.name.replace(/ /g, "-");
 		var elementName = elementName.toLowerCase()

 		return elementName;
 	}

 	

});