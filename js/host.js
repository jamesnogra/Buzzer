var dbRef;
var contestant_name = "NONE";

$(document).ready(function() {

	dbRef = firebase.database().ref();
	dbRef.on("child_changed", function(data) {
		contestant_name = data.val();
		if (contestant_name != "NONE") {
			$('#contestant-name-display').html(contestant_name);
		}
	});

});

function resetContestant() {
	contestant_name = "NONE";
	$('#contestant-name-display').html("");
	dbRef.set({
	    active_contestant: "NONE",
	});
}