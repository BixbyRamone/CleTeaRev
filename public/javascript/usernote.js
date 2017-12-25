$(document).ready(function() {

	$(document).on("click", ".log-out", logoutFunc);

	getUser();

	// Function for retrieving user info
	function getUser() {

		$.get("/api/user", function(data) {


			if (data.firstName && data.lastName) {

				appendDropdown(data.firstName + " " + data.lastName);

			} else if (data.firstName && !data.lastName){

				appendDropdown(data.firstName);

			} else if (!data.firstName && data.lastName){

				appendDropdown(data.lastName);

			} else {

				appendDropdown(data.email)

			}

			
		});
	}

	function appendDropdown(name) {
		$("#signed-in").html("");
		$("#signed-in").append('<div class="nametag-drop"><button type="" class="btn nametag-drop dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">' + name + '<span class="caret"></span></button><ul class="dropdown-menu"><li role="separator" class="divider"></li><li><a href="/store.html">My Account</a></li><li role="separator" class="divider"></li><li><a href="/menu.html">My Purchases</a></li><li role="separator" class="divider"></li><li class="log-out"><a href="/index.html">Logout</a></li></ul></div> ');
	}

	function logoutFunc() {
		$.get('/logout', function() {
			console.log("logged out");
		})
	}

});

