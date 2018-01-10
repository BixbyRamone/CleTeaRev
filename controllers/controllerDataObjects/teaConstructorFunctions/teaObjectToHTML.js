module.exports = function(obj) {
console.log("obj here ===================================");
console.log(obj);
console.log("obj here ===================================");
function teaObjtoHTML(obj) {
                var availability = availFunction(obj.available);

                var teaInfo = '<li class="list-group-item ' + obj.category + '">';
                teaInfo += '<div class="col-md-6">name: ' + obj.name + ';   id#: ' + obj.id + '<br> ';
                teaInfo += 'Category: ' + obj.category + ' <br> ';
                teaInfo += 'price per cup: ' + obj.priceCup + ' <br> ';
                teaInfo += 'price per pot: ' + obj.pricePot + ' <br> ';
                teaInfo += 'price per oz: ' + obj.priceOz + ' <br> ';
                teaInfo += 'description: ' + obj.description + ' <br> ';
                teaInfo += 'tea types: ' + obj.teaTypes + '<br>';
                teaInfo += 'availability: ' + availability + ' <br> ';
                teaInfo += '<img class="col-md-12 " src="https://static1.squarespace.com/static/5254245de4b0d49865bf2ad0/551db655e4b0c1bae096e600/551db6e9e4b0a007421e8164/1428010733370/golden+assam.jpg?format=500w">';
                teaInfo = appendDeleteButton(teaInfo, obj); // see below
                teaInfo += '</li>';

                return teaInfo;

            }

            function appendDeleteButton(display, thisTea) {

                display += '<div class="row">'
                display += '<button name="' + thisTea.nameElement + '-delete" id="delete-button" class="' + thisTea.nameElement + ' col-sm-6 ng-change">DELETE</button>';
                display += '<button name="' + thisTea.nameElement + '-edit" id="edit-tea-button" class="' + thisTea.nameElement + ' col-sm-6">EDIT</button>';
                display += '</div>'

                //modal html -- This is predominantly copied and pasted from the HTML for the tea input box on admin.html
                // html is constructed using Tea constructor keys. 
                display += '<div id="' + thisTea.nameElement + '-delete-modal" class="modal"><!-- Modal content --><div class="modal-content"><span class="close">&times;</span><button>Are You Certain You Want To Delete This Item?</button></div></div>';

                display += '<div id="' + thisTea.nameElement + '-edit-modal" class="modal"><!-- Modal content --><div class="modal-content"><span class="close">&times;</span><div id="add-tea-bar" class="container"><label for="basic-url">Tea Name:</label><div class="input-group"><input id="tea-name-input-modal" type="text" class="form-control" placeholder="' + thisTea.name + '" aria-describedby="basic-addon1"></div><label for="basic-url">Tea Price:</label><div class="input-group"><span class="input-group-addon" id="basic-addon1">$</span><input id="tea-price-cup-input-modal" type="text" class="form-control" placeholder="' + thisTea.priceCup + ' per Cup" aria-describedby="basic-addon2"></div><div class="input-group"><span class="input-group-addon" id="basic-addon1">$</span><input id="tea-price-pot-input-modal" type="text" class="form-control" placeholder="' + thisTea.pricePot + ' per Pot" aria-describedby="basic-addon2"></div><div class="input-group"><span class="input-group-addon" id="basic-addon1">$</span><input id="tea-price-oz-input-modal" type="text" class="form-control" placeholder="' + thisTea.priceOz + ' per Oz" aria-describedby="basic-addon2"></div><label for="basic-url">Tea Description:</label><div class="input-group"><input id="tea-descript-input-modal" type="text" class="form-control" aria-label="Amount (to the nearest dollar)" placeholder="' + thisTea.description + '"></div><label for="basic-url">Tea Category:</label><div class="input-group"><input id="tea-category-input-modal" type="text" class="form-control" aria-label="Amount (to the nearest dollar)" placeholder="' + thisTea.category + '"></div>Currently Availble  <input id="checkbox-id-modal" type="checkbox" name="availability" checked><br><button id="add-item-modal-button"> Submit </button><div hidden id="tea-id-modal" class="' + thisTea.id + '" value="' + thisTea.id + '">' + thisTea.id + '</div></div></div></div>';

                return display;

            }
            

            /*

            teaObjtoHTML: function (obj) {
                var availability = availFunction(obj.available);

                var teaInfo = '<li class="list-group-item ' + obj.category + '">';
                teaInfo += '<div class="col-md-6">name: ' + obj.name + ';   id#: ' + obj.id + '<br> ';
                teaInfo += 'Category: ' + obj.category + ' <br> ';
                teaInfo += 'price per cup: ' + obj.priceCup + ' <br> ';
                teaInfo += 'price per pot: ' + obj.pricePot + ' <br> ';
                teaInfo += 'price per oz: ' + obj.priceOz + ' <br> ';
                teaInfo += 'description: ' + obj.description + ' <br> ';
                teaInfo += 'tea types: ' + obj.teaTypes + '<br>';
                teaInfo += 'availability: ' + availability + ' <br> ';
                teaInfo += '<img class="col-md-12 " src="https://static1.squarespace.com/static/5254245de4b0d49865bf2ad0/551db655e4b0c1bae096e600/551db6e9e4b0a007421e8164/1428010733370/golden+assam.jpg?format=500w">';
                teaInfo = this.appendDeleteButton(teaInfo, obj); // see below
                teaInfo += '</li>';

                return teaInfo;

            }

 appendDeleteButton: function (display, thisTea) {

                display += '<div class="row">'
                display += '<button name="' + thisTea.nameElement + '-delete" id="delete-button" class="' + thisTea.nameElement + ' col-sm-6 ng-change">DELETE</button>';
                display += '<button name="' + thisTea.nameElement + '-edit" id="edit-tea-button" class="' + thisTea.nameElement + ' col-sm-6">EDIT</button>';
                display += '</div>'

                //modal html -- This is predominantly copied and pasted from the HTML for the tea input box on admin.html
                // html is constructed using Tea constructor keys. 
                display += '<div id="' + thisTea.nameElement + '-delete-modal" class="modal"><!-- Modal content --><div class="modal-content"><span class="close">&times;</span><button>Are You Certain You Want To Delete This Item?</button></div></div>';

                display += '<div id="' + thisTea.nameElement + '-edit-modal" class="modal"><!-- Modal content --><div class="modal-content"><span class="close">&times;</span><div id="add-tea-bar" class="container"><label for="basic-url">Tea Name:</label><div class="input-group"><input id="tea-name-input-modal" type="text" class="form-control" placeholder="' + thisTea.name + '" aria-describedby="basic-addon1"></div><label for="basic-url">Tea Price:</label><div class="input-group"><span class="input-group-addon" id="basic-addon1">$</span><input id="tea-price-cup-input-modal" type="text" class="form-control" placeholder="' + thisTea.priceCup + ' per Cup" aria-describedby="basic-addon2"></div><div class="input-group"><span class="input-group-addon" id="basic-addon1">$</span><input id="tea-price-pot-input-modal" type="text" class="form-control" placeholder="' + thisTea.pricePot + ' per Pot" aria-describedby="basic-addon2"></div><div class="input-group"><span class="input-group-addon" id="basic-addon1">$</span><input id="tea-price-oz-input-modal" type="text" class="form-control" placeholder="' + thisTea.priceOz + ' per Oz" aria-describedby="basic-addon2"></div><label for="basic-url">Tea Description:</label><div class="input-group"><input id="tea-descript-input-modal" type="text" class="form-control" aria-label="Amount (to the nearest dollar)" placeholder="' + thisTea.description + '"></div><label for="basic-url">Tea Category:</label><div class="input-group"><input id="tea-category-input-modal" type="text" class="form-control" aria-label="Amount (to the nearest dollar)" placeholder="' + thisTea.category + '"></div>Currently Availble  <input id="checkbox-id-modal" type="checkbox" name="availability" checked><br><button id="add-item-modal-button"> Submit </button><div hidden id="tea-id-modal" class="' + thisTea.id + '" value="' + thisTea.id + '">' + thisTea.id + '</div></div></div></div>';

                return display;

            }
            */

        }

        /*
teaObjtoHTML: function (obj) {
                var availability = availFunction(obj.available);

                var teaInfo = '<li class="list-group-item ' + obj.category + '">';
                teaInfo += '<div class="col-md-6">name: ' + obj.name + ';   id#: ' + obj.id + '<br> ';
                teaInfo += 'Category: ' + obj.category + ' <br> ';
                teaInfo += 'price per cup: ' + obj.priceCup + ' <br> ';
                teaInfo += 'price per pot: ' + obj.pricePot + ' <br> ';
                teaInfo += 'price per oz: ' + obj.priceOz + ' <br> ';
                teaInfo += 'description: ' + obj.description + ' <br> ';
                teaInfo += 'tea types: ' + obj.teaTypes + '<br>';
                teaInfo += 'availability: ' + availability + ' <br> ';
                teaInfo += '<img class="col-md-12 " src="https://static1.squarespace.com/static/5254245de4b0d49865bf2ad0/551db655e4b0c1bae096e600/551db6e9e4b0a007421e8164/1428010733370/golden+assam.jpg?format=500w">';
                teaInfo = this.appendDeleteButton(teaInfo, obj); // see below
                teaInfo += '</li>';

                return teaInfo;

            }

 appendDeleteButton: function (display, thisTea) {

                display += '<div class="row">'
                display += '<button name="' + thisTea.nameElement + '-delete" id="delete-button" class="' + thisTea.nameElement + ' col-sm-6 ng-change">DELETE</button>';
                display += '<button name="' + thisTea.nameElement + '-edit" id="edit-tea-button" class="' + thisTea.nameElement + ' col-sm-6">EDIT</button>';
                display += '</div>'

                //modal html -- This is predominantly copied and pasted from the HTML for the tea input box on admin.html
                // html is constructed using Tea constructor keys. 
                display += '<div id="' + thisTea.nameElement + '-delete-modal" class="modal"><!-- Modal content --><div class="modal-content"><span class="close">&times;</span><button>Are You Certain You Want To Delete This Item?</button></div></div>';

                display += '<div id="' + thisTea.nameElement + '-edit-modal" class="modal"><!-- Modal content --><div class="modal-content"><span class="close">&times;</span><div id="add-tea-bar" class="container"><label for="basic-url">Tea Name:</label><div class="input-group"><input id="tea-name-input-modal" type="text" class="form-control" placeholder="' + thisTea.name + '" aria-describedby="basic-addon1"></div><label for="basic-url">Tea Price:</label><div class="input-group"><span class="input-group-addon" id="basic-addon1">$</span><input id="tea-price-cup-input-modal" type="text" class="form-control" placeholder="' + thisTea.priceCup + ' per Cup" aria-describedby="basic-addon2"></div><div class="input-group"><span class="input-group-addon" id="basic-addon1">$</span><input id="tea-price-pot-input-modal" type="text" class="form-control" placeholder="' + thisTea.pricePot + ' per Pot" aria-describedby="basic-addon2"></div><div class="input-group"><span class="input-group-addon" id="basic-addon1">$</span><input id="tea-price-oz-input-modal" type="text" class="form-control" placeholder="' + thisTea.priceOz + ' per Oz" aria-describedby="basic-addon2"></div><label for="basic-url">Tea Description:</label><div class="input-group"><input id="tea-descript-input-modal" type="text" class="form-control" aria-label="Amount (to the nearest dollar)" placeholder="' + thisTea.description + '"></div><label for="basic-url">Tea Category:</label><div class="input-group"><input id="tea-category-input-modal" type="text" class="form-control" aria-label="Amount (to the nearest dollar)" placeholder="' + thisTea.category + '"></div>Currently Availble  <input id="checkbox-id-modal" type="checkbox" name="availability" checked><br><button id="add-item-modal-button"> Submit </button><div hidden id="tea-id-modal" class="' + thisTea.id + '" value="' + thisTea.id + '">' + thisTea.id + '</div></div></div></div>';

                return display;

            }
        */