$(document).ready(function() {
            var teaObjArray = [];
            // var manualSearchItems = [];

            $('#cart-font-awesome').hide();
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
                    // $.get('/get/searchTerms').done(function(newData) {

                    //     for (var i = 0; i < newData.length; i++) {
                    //         manualSearchItems.push(newData[i].term);
                    //     }
                    //     console.log(manualSearchItems);

                    //     setUpPage(data, newData);
                    // })



                });

            }


            function showDisplayTeas(teaData) {

                $('#tea-list').empty();
                $('#add-tea-bar').show();

                for (var i = 0; i < teaData.length; i++) {
                    var teaPanel = new Tea(teaData[i]);
                    teaObjArray.push(teaPanel);
                    teaPanel = teaPanel.teaHTMLObj;

                    $("." + teaData[i].category).append(teaPanel);
                    // $("." + teaData[i].category).append("<b>Append</b>");   
                }
            }

            function teaObjtoHTML(obj) {
                // construcint html for a tea panel
                var availability = availFunction(obj.available);

                var teaInfo = '<div id="individual-selector-' + obj.nameElement + '" class="list-group-item">';
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
                // var typeHeaders = typeHeadersFunction(obj);

                //  Creates the names of the headings to go onto the page; pushes them into array var headers
                for (var i = obj.length - 1; i >= 0; i--) {

                    if (headers.indexOf(obj[i].category) === -1) {
                        headers.push(obj[i].category);
                    }
                }


                for (var i = headers.length - 1; i >= 0; i--) {
                    htmlElementArray[i] = '<div class="html-el-' + headers[i] + '" id="tea-header"</div>' + headers[i] + '<div class="list-group ' + headers[i] + '" id="tea-list-' + headers[i] + ' "></div><br>'
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
                console.log("checkbox function");
                console.log(this);
                //gets the name of the clicked on Element
                var headerId = this.name;
                //gets the elements from the tea list by their class name
                // var elements = document.getElementsByClassName(header);
                if (headerId.indexOf("description") === -1) {

                    if (!this.checked) {

                        $("." + headerId).hide(500);
                        $(".html-el-" + headerId).hide(500);

                    } else if (this.checked) {

                        $("." + headerId).show(500);
                        $(".html-el-" + headerId).show(500);

                    }
                // } else {
                //     var neededName = this.name.split("-");
                //     neededName = neededName[1];
                //     var itemsToChangeArray = [];

                //     for (var i = 0; i < teaObjArray.length; i++) {
                //         if (teaObjArray[i].description.indexOf(neededName) !== -1) {
                //             itemsToChangeArray.push(teaObjArray[i].nameElement);
                //         }
                //     }
                //     console.log(itemsToChangeArray);
                //     if (!this.checked) {

                //         $(".html-el-Blends").hide();
                //         // console.log(teaObjArray);
                //         // console.log("look here");
                //         // console.log(this.name);

                //         var name = this.name.split("-");
                //         name = name[1];
                //         var index = manualSearchItems.indexOf(name);
                //         manualSearchItems.splice(index, 1);

                //         console.log(manualSearchItems);

                //         for (var i = 0; i < teaObjArray.length; i++) {

                //             for (var j = 0; j < manualSearchItems.length; j++) {
                //                 var readyToPost = false;
                //                 if (teaObjArray[i].description.indexOf(manualSearchItems[j]) !== -1 ) {
                //                     //show html element

                //                      $("#menu-content").append(teaObjArray[i].teaObjtoHTML);

                //                                              $(".html-el-Blends").show();

                //                     console.log("this element should be visiable")
                //                     console.log(teaObjArray[i].description);
                //                     console.log(manualSearchItems[j]);
                //                     console.log(teaObjArray[i].teaHTMLObj);
                //                     var itemList = teaObjArray[i].teaHTMLObj.split("description:");
                //                     itemList = itemList[1];
                //                     console.log(itemList);
                //                     itemList = itemList.split("<br>");
                //                     itemList = itemList[0];
                //                     itemList = itemList.split(",");
                //                     console.log(itemList);
                //                 }
                //             }
                //            // if (indexOf(teaObjArray[i].)) {

                //            // }
                //         }

                //         // for (var i = 0; i < itemsToChangeArray.length; i++) {
                //         //     console.log("individual-selector-" + itemsToChangeArray[i]);
                //         //     $("#individual-selector-" + itemsToChangeArray[i]).hide(500);
                //         //     }


                //         }

                //     if (this.checked) {

                //         // $(".html-el-Blends").empty();


                //         for (var i = 0; i < itemsToChangeArray.length; i++) {
                //             console.log("individual-selector-" + itemsToChangeArray[i]);
                //             $("#individual-selector-" + itemsToChangeArray[i]).show(500);
                //             }


                //         }



                //         console.log(itemsToChangeArray);

                //         // if (!this.checked) {



                //         // }
                    }


                }

                function availFunction(data) {

                    if (data) {
                        return null;
                    } else {
                        return "currently out of stock";
                    }
                }



            });