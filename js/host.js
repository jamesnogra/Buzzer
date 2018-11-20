var dbRef;
var contestant_name = "NONE";
var buzzed = false;

$(document).ready(function() {

	dbRef = firebase.database().ref();
	dbRef.on("child_changed", function(data) {
		contestant_name = data.val();
		if (contestant_name != "NONE" && $('#contestant-name-display').text()=="") {
			console.log('trying to replace ' + contestant_name + ' with "' + $('#contestant-name-display').text() + '"');
			$('#contestant-name-display').html(contestant_name);
			$('#contestant-name-display').addClass('animate-bg');
		}
	});
	resetContestant();

});

function resetContestant() {
	contestant_name = "NONE";
	$('#contestant-name-display').html("");
	$('#contestant-name-display').removeClass('animate-bg');
	dbRef.set({
	    active_contestant: "NONE",
	});
}