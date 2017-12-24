$(document).ready(function() {

	getUser();

	// Function for retrieving user info
	function getUser() {

		$.get("/api/user", function(data) {


			if (data.firstName && data.lastName) {

				$("#signed-in").html("Signed in as " + data.firstName +" "+ data.lastName);

			} else if (data.firstName && !data.lastName){

				$("#signed-in").html("Signed in as " + data.firstName);

			} else if (!data.firstName && data.lastName){

				$("#signed-in").html("Signed in as " + data.lastName);

			} else {

				$("#signed-in").html("Signed in as " + data.email);
			}

			
			
		});
	}

});