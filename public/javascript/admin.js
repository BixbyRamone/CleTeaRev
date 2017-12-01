$(document).ready(function() {

	$("#add-tea-bar").hide();

 $("#view-teas").on("click", getDisplayTeas);
 $("#add-item-button").on("click", postTeas);

 
//------------------Functions for getting Teas-----------------
 function getDisplayTeas() {
 	console.log("clicked")
 	$.get("/get/teas").done( function(data) {
 		 showDisplayTeas(data);
 		
 	});
 }

 function showDisplayTeas(teaData) {

 	$("#add-tea-bar").show();

 	var teaObj = {};

 	var list = '<li class="list-group-item">';
 	// var teaInfo = "";
 	for (var i = teaData.length - 1; i >= 0; i--) {

 		teaObject = {
 			name: teaData[i].name,
 			price: teaData[i].price,
 			description: teaData[i].description,
 			types: teaData[i].teaTypes
 		};

 		teaObjtoHTML(teaObject, list);	
 		
 		}

 		function teaObjtoHTML (teaObj) {

 			var teaInfo = list;
 		teaInfo += '<div class="col-md-6">name: ' + teaObj.name + ' ' + '<br> ';
 		teaInfo += 'price: ' + teaObj.price + ' <br> ';
 		teaInfo += 'description: ' + teaObj.description + ' <br> ';
 		teaInfo += 'tea types: ' + teaObj.types;
 		teaInfo += '<img class="col-md-12 " src="https://static1.squarespace.com/static/5254245de4b0d49865bf2ad0/551db655e4b0c1bae096e600/551db6e9e4b0a007421e8164/1428010733370/golden+assam.jpg?format=500w">';
 		teaInfo = appendDeleteButton(teaInfo);
 		teaInfo += '</li>';

 		 

 		$("#tea-list").append(teaInfo);

 		

 		teaInfo = "";

 		

 		}
 } 

 

 function appendDeleteButton(display) {

 	display += '<button class="delete-button row">DELETE</button>'

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
 		console.log("button clicked");

 		var teaPostObj = {
 			name: $("#tea-name-input").val().trim(),
 			priceCup: $("#tea-price-cup-input").val().trim(),
 			pricePot: $("#tea-price-pot-input").val().trim(),
 			priceOz: $("#tea-price-oz-input").val().trim(),
 			description: $("#tea-descript-input").val().trim(),
 			teaTypes: $("#tea-types-input").val().trim()
 		};

 		console.log(teaPostObj);
		console.log(window.location);
 		$.post("/upload/tea", teaPostObj, function() {
			getDisplayTeas();
		});

 		$("#tea-name-input").val('');
 		$("#tea-price-cup-input").val('');
 		$("#tea-price-pot-input").val('');
 		$("#tea-price-oz-input").val('');
 		$("#tea-descript-input").val('');
 		$("#tea-types-input").val('');
	
 	}

});