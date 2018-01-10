$(document).ready(function() {
            var modalOpen = false;
            var checkboxArray = [];
            var teaObjArray = [];

            $('#add-tea-bar').hide();

            $('#view-teas').on("click", getDisplayTeas);

            //Tea image Functionality

            $("#add-item-button").on("click", postTeas);

            $(document).on("click", "#delete-button", deleteTea);
            $(document).on("click", "#edit-tea-button", editTea);
            $(document).on("change", "#category-checkbox-id", checkboxFunction);

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

            //===============Code For Dynamic Buttons

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

            function checkboxHTMLFunction(obj) {
                var checkbox = '<div id="' + obj.category + '-checkbox-div"><div type="checkbox" name="' + obj.category + '" id="category-checkbox-id" checked>' + obj.category.toUpperCase() + '<br></div>';

                return checkbox;
            }

            //=====================================================

            // function for getting teas from db
            function getDisplayTeas() {
                $('#search-items-div').hide();
                $("#chkbx-menu").show();

                $('#tea-list').empty();

                $.get('/get/teas').done(function(data) {

                    showDisplayTeas(data);
                });
            }

            function showDisplayTeas(teaData) {

                // empty out tea list to add prior to adding it
                $('#tea-list').empty();
                $('#add-tea-bar').show();
                $('#chkbx-menu').empty();

                for (var i = 0; i < teaData.length; i++) {


                    var teaPanel = new Tea(teaData[i]);
                    if ($('#tea-list').append(teaPanel.teaHTMLObj) === "on") {
                        $('#tea-list').append(teaPanel.teaHTMLObj);
                    }

                    teaObjArray.push(teaPanel);

                    placeCheckboxes(teaPanel);
                }
            }

            function placeCheckboxes(obj) {
                $('#chkbx-menu').empty();
                $('#chkbx-menu').append("Catergories" + '<br>')

                if (checkboxArray.indexOf(obj.checkboxHTML) === -1) {
                    checkboxArray.push(obj.checkboxHTML);
                }


                for (var i = checkboxArray.length - 1; i >= 0; i--) {
                    $('#chkbx-menu').append(checkboxArray[i]);
                }

            }

            function postTeas() {
                var avail = false;
                console.log($("#available-checkbox").prop("checked"));
                if ($("#available-checkbox").prop("checked")) {
                    avail = true;
                }

                var teaPostObj = {
                    name: $("#tea-name-input").val().trim(),
                    priceCup: $("#tea-price-cup-input").val().trim(),
                    pricePot: $("#tea-price-pot-input").val().trim(),
                    priceOz: $("#tea-price-oz-input").val().trim(),
                    description: $("#tea-descript-input").val().trim(),
                    category: $("#tea-category-input").val().trim(),
                    available: avail,
                    teaTypes: $("#tea-types-input").val().trim()
                };

                if (teaPostObj.name) {
                    $.post("/post/tea", teaPostObj, function() {

                        getDisplayTeas();

                    });

                    $("#tea-name-input").val('');
                    $("#tea-price-cup-input").val('');
                    $("#tea-price-pot-input").val('');
                    $("#tea-price-oz-input").val('');
                    $("#tea-descript-input").val('');
                    $("#tea-types-input").val('');
                    $("#tea-category-input").val('');

                    getDisplayTeas();
                } else {
                    alert("Please Enter Data");
                }
            }

            function deleteTea() {

                var htmlObject = modalFunction(this.name);
                htmlObject = modalClickExtension(htmlObject);

            }

            function editTea() {

                var htmlObject = modalFunction(this.name);
                modalClickExtension(htmlObject);

            }

            function modalFunction(idParam) {

                var htmlObj = {};

                // Get the modal
                htmlObj.modal = document.getElementById(idParam + "-modal");

                // Get the button that opens the modal
                htmlObj.btn = document.getElementsByName(idParam)[0];

                // Get the <span> element that closes the modal
                htmlObj.span = document.getElementsByClassName("close")[0];

                return htmlObj;

            }

            function nameToElement(obj) {

                var elementName = obj.name.replace(/ /g, "-");
                elementName = elementName.toLowerCase()

                return elementName;
            }


            function modalClickExtension(obj) {

                obj.modal.style.display = "block";
                // When the user clicks on <span> (x), close the modal
                $(document).on('click', ".close", function() {

                    obj.modal.style.display = "none";
                });



                $(document).on('click', '#add-item-modal-button', function() {

                        var avail = false;
                        console.log($("#checkbox-id-modal").prop("checked"));
                        if ($("#checkbox-id-modal").prop("checked")) {
                            avail = true;

                        }

                        var idelement = document.getElementById("tea-id-modal");
                       
                         console.log(idelement.class);

                            var teaPostModalObj = {
                                // id: modalInputDataFunction("tea-id-modal"),
                                name: modalInputDataFunction("tea-name-input-modal"),
                                priceCup: modalInputDataFunction("tea-price-cup-input-modal"),
                                pricePot: modalInputDataFunction("tea-price-pot-input-modal"),
                                priceOz: modalInputDataFunction("tea-price-oz-input-modal"),
                                description: modalInputDataFunction("tea-descript-input-modal"),
                                category: modalInputDataFunction("tea-category-input-modal"),
                                available: avail,
                                // teaTypes: modalInputDataFunction($("#tea-types-input-modal").val().trim())
                            };
                       

                                console.log(teaPostModalObj);

                            // $.post("/updated/tea, ")
                        });

                    // 

                    // When the user clicks anywhere outside of the modal, close it
                    window.onclick = function(event) {
                        if (event.target == obj.modal) {
                            obj.modal.style.display = "none";
                        }
                    }
                }

                function checkboxFunction() {

                    var header = this.name;
                    //gets the elements from the tea list by their class name
                    var elements = document.getElementsByClassName(header);
                    if (!this.checked) {

                        for (var i = 0; i < elements.length; i++) {
                            $(elements[i]).hide(500);

                        }
                        // elements.hide();
                    } else if (this.checked) {
                        for (var i = 0; i < elements.length; i++) {
                            $(elements[i]).show(500);
                        }

                    }

                }

                function modalInputDataFunction(data) {

                    var idVar = "#" + data;
                    // console.log(idVar);

                    if ($(idVar).val().trim()) {
                        return $(idVar).val().trim();
                    } else {
                        var element = document.getElementById(data);
                        // console.log(element.placeholder);
                        return element.placeholder;
                    }
                }

                function availFunction(data) {

                    if (data) {
                        return "available";
                    } else {
                        return "currently out of stock";
                    }
                }

            });