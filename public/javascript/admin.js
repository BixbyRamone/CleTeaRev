$(document).ready(function() {

 $("#view-teas").on("click", getDisplayTeas);

 

 function getDisplayTeas() {
 	console.log("clicked")
 	$.get("/get/teas").done( function(data) {
 		 showDisplayTeas(data);
 		
 	});
 }

 function showDisplayTeas(teaData) {

 	var list = '<li>';
 	var teaInfo = "";
 	for (var i = teaData.length - 1; i >= 0; i--) {

 		teaInfo += list;
 		teaInfo += '<div id="tea-name">name: ' + teaData[i].name + '</div><br>';
 		teaInfo += '<div id="tea-price">price: ' + teaData[i].price + '</div><br>';
 		teaInfo += '<div id="tea-description">description: ' + teaData[i].description + '</div><br>';
 		teaInfo += '<div id="tea-type">tea types: ' + teaData[i].teaTypes;
 		teaInfo += '</div></li>';

 		$("#tea-list").append(teaInfo);
 		teaInfo = "";
 		
 		}
 } 
});