$(document).ready(function() {


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
    	// var teaPanelArray = [];

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
        console.log(obj[0].category);
        var headers = [];

        for (var i = obj.length - 1; i >= 0; i--) {
        	console.log(obj[i].category);
        	console.log(headers.indexOf(obj[i].category));
        	if (headers.indexOf(obj[i].category) === -1) {
            headers.push(obj[i].category);
        }
        }

        console.log("setUpPage");
        console.log(headers);

        for (var i = headers.length - 1; i >= 0; i--) {
            headers[i] = headers[i] + '<div class="list-group ' + headers[i] + '" id="tea-list-' +headers[i]+ ' "></div>'
        }
        console.log(headers);

        for (var i = headers.length - 1; i >= 0; i--) {
            $("#menu-content").append(headers[i]);
        }

        showDisplayTeas(obj);


    }
    

    function nameToElement(obj) {

        var elementName = obj.name.replace(/ /g, "-");
        var elementName = elementName.toLowerCase()

        return elementName;
    }



});