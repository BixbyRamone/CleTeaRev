$(document).ready(function() {

	var areTeaVis = false;

	$("#add-tea-bar").hide();
//Menu Functionality

 $("#view-teas").on("click", getDisplayTeas);



 //Tea image Functionality

  $("#add-item-button").on("click", postTeas);

 $(document).on("click", "#delete-button", deleteTea);
 $(document).on("click", "#edit-tea-button",editTea);


 
//------------------Functions for getting Teas-----------------
 function getDisplayTeas() {

 	if (areTeaVis === false) {
 	
 	$.get("/get/teas").done( function(data) {
 		 showDisplayTeas(data);
 		
 	});

 	areTeaVis = true;
 }
 }

 function showDisplayTeas(teaData) {

 	$('#tea-list').empty();

 	$("#add-tea-bar").show();

 	var teaObj = {};

 	var list = '<li class="list-group-item">';
 	// var teaInfo = "";
 	for (var i = teaData.length - 1; i >= 0; i--) {

 		teaObject = {
 			name: teaData[i].name,
 			priceCup: teaData[i].priceCup,
 			pricePot: teaData[i].pricePot,
 			priceOz: teaData[i].priceOz,
 			description: teaData[i].description,
 			types: teaData[i].teaTypes
 		};

 		teaObjtoHTML(teaObject, list);	
 		
 		}

 		function teaObjtoHTML (teaObj, list) {

 			var teaInfo = list;
 		teaInfo += '<div class="col-md-6">name: ' + teaObj.name + ' ' + '<br> ';
 		teaInfo += 'price: ' + teaObj.priceCup + ' <br> ';
 		teaInfo += 'description: ' + teaObj.description + ' <br> ';
 		teaInfo += 'tea types: ' + teaObj.types;
 		teaInfo += '<img class="col-md-12 " src="https://static1.squarespace.com/static/5254245de4b0d49865bf2ad0/551db655e4b0c1bae096e600/551db6e9e4b0a007421e8164/1428010733370/golden+assam.jpg?format=500w">';
 		teaInfo = appendDeleteButton(teaInfo, teaObj);
 		teaInfo += '</li>';		 
 

 		$("#tea-list").append(teaInfo); 		

 		teaInfo = "";		

 		}
 } 

 function appendDeleteButton(display, obj) {

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

 //=================================================

 //-------------------Funcitions for posting Teas----------------------

 function createGroup(data) {
		$.post("/api/group/new", data, function() {
			window.location.href = "/group";
		});
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

 		// console.log("DELETE");

		modalFunction(this.name);

 	}

 	function editTea() {

 		// console.log("EDIT");

 		modalFunction(this.name);

 	}

 	//Modal Javascript

 	function modalFunction(identifier) {
 		// console.log(this.onclick);
 		// Get the modal
 if (identifier === "delete") {
var modal = document.getElementById('deleteModal');
} else if (identifier === "edit") {
	var modal = document.getElementById('editModal');
} else 
// console.log(modal);

// Get the button that opens the modal differs based on button
if (identifier === "delete") {
var btn = document.getElementById("delete-button");
} else if (identifier === "edit") {
	var btn = document.getElementById("edit-tea-button");
}
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
 	}

 	function modalVarSet(id) {
 		 if (identifier === "delete") {
var modal = document.getElementById('deleteModal');
} else if (identifier === "edit") {
	var modal = document.getElementById('editModal');
} else 
console.log(modal);

// Get the button that opens the modal differs based on button
if (identifier === "delete") {
var btn = document.getElementById("delete-button");
} else if (identifier === "edit") {
	var btn = document.getElementById("edit-tea-button");
}
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

}



});


