var dbRef;
var contestant_name = "NONE";
var buzzed = false;

$(document).ready(function() {

	dbRef = firebase.database().ref();
	dbRef.on("child_changed", function(data) {
		contestant_name = data.val();
		if (contestant_name != "NONE") {
			$('#contestant-name-display').html(contestant_name);
			dbRef.off();
		}
	});

});

function resetContestant() {
	contestant_name = "NONE";
	addEventListener();
	$('#contestant-name-display').html("");
	dbRef.set({
	    active_contestant: "NONE",
	});
}

function addEventListener() {
	dbRef.on("child_changed", function(data) {
		contestant_name = data.val();
		if (contestant_name != "NONE") {
			$('#contestant-name-display').html(contestant_name);
			dbRef.off();
		}
	});
}