module.exports = function (obj) {

	var elementName = obj.name.replace(/ /g, "-");
    elementName = elementName.toLowerCase()

                return elementName;

}