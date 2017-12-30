$(document).ready(function() {


	$('#search-items-div').hide();
	// $('#search-items-input').hide();
    $('#view-search-terms').on("click", getDisplaySearchTerms);
    $('#add-search-term-button').on("click", postSearchTerm);


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
    	console.log("getDisplaySearchTerms");
    	$("#chkbx-menu").hide();
    	$('#search-items-div').show();
    	$('#add-tea-bar').hide();
    	$('#tea-list').empty();
		// $('#search-items-input').show();

		
	    	$.get('/get/searchterms').done(function(data) {
	    			console.log("callback")
	    			displaySearchTerms(data);
	    		});


    	$.get('/get/teas').done(function(teaData) {

    		dynamicSearchTermsFunc(teaData);

    	});

	    	// $.get('/get/searchterms').done(function(data) {
	    	// 		console.log("callback")
	    	// 		displaySearchTerms(data);
	    	// 	});
    }

    function dynamicSearchTermsFunc(teaData) {
    	var headersArray = [];

    		for (var i = 0; i < teaData.length; i++) {
    			if (headersArray.indexOf(teaData[i].category) === -1) {
		    			headersArray.push(teaData[i].category);
    			}

    		}
    		console.log(headersArray);
    }

    function postSearchTerm() {

    	var postVar ={
    		term: $('#search-item-input-text-field').val().trim()
    	};

    	if (postVar.term !== null) {
    		$.post('/post/searchterm', postVar, function() {

    			$('#search-item-input-text-field').val('');
    		});	
    	}
    	
    }

   function displaySearchTerms(data) {
   	console.log("displaySearchTerms");
   	console.log(data);

   	for (var i = 0; i < data.length; i++) {
   		console.log(data[i]);
   		$('#search-items-list').append.data[i];
   	}
   }	
})