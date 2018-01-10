module.exports = function (teaData) {
	// var teaHTMLObjFunct = require("./teaConstructorFunctions/teaObjectoHTML.js")
	var teaObjArray = [];

	for (var i = 0; i < teaData.length; i++) {
		var teaObject = new Tea(teaData[i]);

		teaObjArray.push(teaObject);
		console.log("************************");
		console.log(teaObjArray);
		console.log("************************");
	}

	function Tea(teaData) {
                this.id = teaData.id;
                this.name = teaData.name;
                this.nameElement = require("./teaConstructorFunctions/nameToElement.js")(teaData); // function for making a version of the name that can be used in creating classes and id's in the html
                this.priceCup = teaData.priceCup;
                this.pricePot = teaData.pricePot;
                this.priceOz = teaData.priceOz;
                this.description = teaData.description;
                this.category = teaData.category;
                this.available = teaData.available;
                this.teaTypes = teaData.teaTypes;
                // this.teaHTMLObj = teaHTMLObjFunct.teaObjToHTML(this);
                this.teaHTMLObj = require("./teaConstructorFunctions/teaObjectToHTML.js")(this); //function for cunstructing dynamic tea-panels
                // this.modalFunction = modalFunction(); //  function for setting up a modal for the tea item
                // this.checkboxHTML = checkboxHTMLFunction(this);
            }
}