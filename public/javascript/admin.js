$(document).ready(function() {

	var areTeaVis = false;
	var dataTea;

	$("#add-tea-bar").hide();
//Menu Functionality

 $("#view-teas").on("click", getDisplayTeas);



 //Tea image Functionality

  $("#add-item-button").on("click", postTeas);

 $(document).on("click", "#delete-button", deleteTea);
 $(document).on("click", "#edit-tea-button", editTea);
// $(document).on("click", '#delete-button', dataTea.modalButton);

 
//------------------Functions for getting Teas-----------------
 function getDisplayTeas() {

 	if (areTeaVis === false) {
 	
 	$.get("/get/teas").done( function(data) {
 		dataTea = data;
 		 showDisplayTeas(data);
 		
 	});

 	areTeaVis = true;
 }
 }

 function showDisplayTeas(teaData) {

 	$('#tea-list').empty();

 	$("#add-tea-bar").show();

 	console.log(teaData);

 	// var teaObj = {};

 	// var list = '<li class="list-group-item">';
 	// var teaInfo = "";
 	// for (var i = teaData.length - 1; i >= 0; i--) {

 	// 	teaObject = {
 	// 		name: teaData[i].name,
 	// 		priceCup: teaData[i].priceCup,
 	// 		pricePot: teaData[i].pricePot,
 	// 		priceOz: teaData[i].priceOz,
 	// 		description: teaData[i].description,
 	// 		types: teaData[i].teaTypes
 	// 	};
 for (var i = 0; i < teaData.length; i++) {
 	// console.log(teaData[i].teaHTMLObj);
 	$('#tea-list').append(teaData[i].teaHTMLObj);
 }
 		
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

 		console.log("DELETE");
 		console.log(dataTea);
		dataTea.modalButton;

 	}

 	function editTea() {

 		// console.log("EDIT");

 		// modalFunction(this.name);

 	}

 	//Modal Javascript

//  	function modalFunction(identifier) {
//  		// console.log(this.onclick);
//  		// Get the modal
//  if (identifier === "delete") {
// var modal = document.getElementById('deleteModal');
// } else if (identifier === "edit") {
// 	var modal = document.getElementById('editModal');
// } else 
// // console.log(modal);

// // Get the button that opens the modal differs based on button
// if (identifier === "delete") {
// var btn = document.getElementById("delete-button");
// } else if (identifier === "edit") {
// 	var btn = document.getElementById("edit-tea-button");
// }
// // Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];

// // When the user clicks on the button, open the modal 
// btn.onclick = function() {
//     modal.style.display = "block";
// }

// // When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//     modal.style.display = "none";
// }

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//     if (event.target == modal) {
//         modal.style.display = "none";
//     }
// }
//  	}

//  	function modalVarSet(id) {
//  		 if (identifier === "delete") {
// var modal = document.getElementById('deleteModal');
// } else if (identifier === "edit") {
// 	var modal = document.getElementById('editModal');
// } else 
// console.log(modal);

// // Get the button that opens the modal differs based on button
// if (identifier === "delete") {
// var btn = document.getElementById("delete-button");
// } else if (identifier === "edit") {
// 	var btn = document.getElementById("edit-tea-button");
// }
// // Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];

// }



});


