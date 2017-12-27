$(document).ready(function() {

	$(document).on("change", "#category-checkbox-id", checkboxFunction);
   

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
        this.available = teaData.available;
        this.teaTypes = teaData.teaTypes;
        this.teaHTMLObj = teaObjtoHTML(this);
    }

    function getDisplayTeas() {

        $.get('/get/teas').done(function(data) {

            setUpPage(data);

        });

    }


    function showDisplayTeas(teaData) {
    
        $('#tea-list').empty();
        $('#add-tea-bar').show();

        for (var i = 0; i < teaData.length; i++) {
            var teaPanel = new Tea(teaData[i]);
            teaPanel = teaPanel.teaHTMLObj;

            $("." + teaData[i].category).append(teaPanel);
            // $("." + teaData[i].category).append("<b>Append</b>");   
        }
    }

    function teaObjtoHTML(obj) {
        // construcint html for a tea panel
        var availability = availFunction(obj.available);

        var teaInfo = '<div class="list-group-item">';
        teaInfo += '<div class="col-md-8">name: ' + obj.name + '<br> ';
        teaInfo += 'price per cup: ' + obj.priceCup + ' <br> ';
        teaInfo += 'price per pot: ' + obj.pricePot + ' <br> ';
        teaInfo += 'price per oz: ' + obj.priceOz + ' <br> ';
        teaInfo += 'description: ' + obj.description + ' <br> ';
        teaInfo += 'tea types: ' + obj.teaTypes + '<br>';
        if (availability !== null) {
            teaInfo += 'availability: ' + availability + ' <br> ';
        } else {
            teaInfo += "<br>"
        }
        
        teaInfo += '<img class="col-md-12 " src="https://static1.squarespace.com/static/5254245de4b0d49865bf2ad0/551db655e4b0c1bae096e600/551db6e9e4b0a007421e8164/1428010733370/golden+assam.jpg?format=500w">';
        teaInfo += '</div>';

        return teaInfo;
    }

    function setUpPage(obj) {
        var headers = [];
        var htmlElementArray = [];
        var typeHeaders = typeHeadersFunction(obj);

//	Creates the names of the headings to go onto the page; pushes them into array var headers
        for (var i = obj.length - 1; i >= 0; i--) {

        	if (headers.indexOf(obj[i].category) === -1) {
            headers.push(obj[i].category);
        }
        }


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

    function availFunction(data) {

        if (data) {
            return null;
        } else {
            return "currently out of stock";
        }
    }

    function typeHeadersFunction(data) {

        console.log("naw");
        // var headers = [];
        // var item = "";
        // var itemArray = [];

        // // console.log(data);

        // for (var i = 0; i < data.length; i++) {
        //     if (data[i].description.indexOf("-") !== -1 ) {
        //         item = data[i].description.split("-");
        //         // console.log(item);
        //         item = item[1].split(",");
        //         // console.log(item);
        //         for (var j = 0; j < item.length; j++) {
        //             itemArray.push(item[j]);
        //             // console.log(item[j]);
        //         }
        //         console.log(itemArray);
        //     }
            
        // }
    }

});