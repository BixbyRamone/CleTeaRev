$(document).ready(function() {

	$(document).on("change", "#category-checkbox-id", checkboxFunction);
   
	getUser();
    getDisplayTeas();

    function Tea(teaData) {
        this.id = teaData.id;
        this.name = teaData.name;
        this.nameElement = nameToElement(teaData);
        this.priceCup = teaData.priceCup;
        this.pricePot = teaData.pricePot;
        this.priceOz = teaData.priceOz;
        this.description = teaData.description;
        this.category = teaData.category;
        this.avialbale = teaData.available;
        this.teaTypes = teaData.teaTypes;
        this.teaHTMLObj = teaObjtoHTML(this);
        // this.modalFunction = modalFunction();
    }

    function getUser() {
		$.get("/api/user", function(data) {
			if(!data.admin) {
				console.log("no data");
			}
			console.log("data");
			console.log(data);
		});
	}

    function getDisplayTeas() {

        // if (areTeasVis === false) {

        $.get('/get/teas').done(function(data) {

            setUpPage(data);
            // showDisplayTeas(data);
        });

        // areTeasVis = true;
        // }
    }


    function showDisplayTeas(teaData) {
    
        $('#tea-list').empty();
        $('#add-tea-bar').show();

        for (var i = 0; i < teaData.length; i++) {
            var teaPanel = new Tea(teaData[i]);
            teaPanel = teaPanel.teaHTMLObj;

            $("." + teaData[i].category).append(teaPanel);
        }
    }

    function teaObjtoHTML(obj) {
        // construcint html for a tea panel

        var teaInfo = '<li class="list-group-item">';
        teaInfo += '<div class="col-md-6">name: ' + obj.name + '<br> ';
        teaInfo += 'price per cup: ' + obj.priceCup + ' <br> ';
        teaInfo += 'price per pot: ' + obj.pricePot + ' <br> ';
        teaInfo += 'price per oz: ' + obj.priceOz + ' <br> ';
        teaInfo += 'description: ' + obj.description + ' <br> ';
        teaInfo += 'tea types: ' + obj.teaTypes + '<br>';
        teaInfo += 'availability: ' + "temp text" + ' <br> ';
        teaInfo += '<img class="col-md-12 " src="https://static1.squarespace.com/static/5254245de4b0d49865bf2ad0/551db655e4b0c1bae096e600/551db6e9e4b0a007421e8164/1428010733370/golden+assam.jpg?format=500w">';
        // teaInfo = appendDeleteButton(teaInfo, obj);// see below
        teaInfo += '</li>';

        return teaInfo;
    }

    function setUpPage(obj) {
        var headers = [];
        var htmlElementArray = [];

//	Creates the names of the headings to go onto the page; pushes them into array var headers
        for (var i = obj.length - 1; i >= 0; i--) {

        	if (headers.indexOf(obj[i].category) === -1) {
            headers.push(obj[i].category);
        }
        }


// G
        for (var i = headers.length - 1; i >= 0; i--) {
            htmlElementArray[i] = '<div class="html-el-' + headers[i] + '" id="tea-header"</div>' + headers[i] + '<div class="list-group ' + headers[i] + '" id="tea-list-' +headers[i]+ ' "></div><br>'
        }

        for (var i = htmlElementArray.length - 1; i >= 0; i--) {
            $("#menu-content").prepend(htmlElementArray[i]);
        }

        showDisplayTeas(obj);
        categoriesToCheckboxes(headers);

    }

    function categoriesToCheckboxes(array) {
    	// console.log(array.classList);
    	var checkbox = '';


    	for (var i = 0; i < array.length; i++) {
    		// console.log(array[i]);
    		checkbox = '<input type="checkbox" name="' + array[i] + '" id="category-checkbox-id" checked>' + array[i].toUpperCase() + '<br>';
    		// console.log(checkbox);
    		$(".tea-types-form").append(checkbox);
    	}
    }
    

    function nameToElement(obj) {

        var elementName = obj.name.replace(/ /g, "-");
        var elementName = elementName.toLowerCase()

        return elementName;
    }


    function checkboxFunction() {
    	//gets the name of the clicked on Element
    	var headerId = this.name;
    	//gets the elements from the tea list by their class name
    	// var elements = document.getElementsByClassName(header);
    	if (!this.checked) {
    			
    			$("." + headerId).hide(500);
    			$(".html-el-" + headerId).hide(500);				

    	} else if (this.checked) {
    		
    			$("." + headerId).show(500);
    			$(".html-el-" + headerId).show(500);		
    		
    	}
    	
    }

});