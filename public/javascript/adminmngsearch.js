$(document).ready(function() {

    $('#view-search-terms').on("click", getDisplaySearchTerms);


     //======================Constructor Stuff==============
    //    Creates  a constructor to handle tea info on front end
    function Tea(teaData) {
        this.id = teaData.id;
        this.name = teaData.name;
        this.nameElement = nameToElement(teaData); // function for making a version of the name that can be used in creating classes and id's in the html
        this.priceCup = teaData.priceCup;
        this.pricePot = teaData.pricePot;
        this.priceOz = teaData.priceOz;
        this.description = teaData.description;
        this.category = teaData.category;
        this.available = teaData.available;
        this.teaTypes = teaData.teaTypes;
        this.teaHTMLObj = teaObjtoHTML(this); //function for cunstructing dynamic tea-panels
        this.modalFunction = modalFunction(); //  function for setting up a modal for the tea item
        this.checkboxHTML = checkboxHTMLFunction(this);
    }
    //========================================================

    function getDisplaySearchTerms() {

    	$.get('/get/teas').done(function(teaData) {

    		var headersArray = [];

    		for (var i = 0; i < teaData.length; i++) {
    			headersArray.push(teaData[i].category);
    			console.log(headersArray);
    		}

    	});
    }	
})