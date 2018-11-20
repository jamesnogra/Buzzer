var dbRef;

$(document).ready(function() {

	dbRef = firebase.database().ref();

});

function buzzButton() {
	var contestant_name = $('#contestant-name').val();
	if (contestant_name.length == 0) {
		alert("Please enter your name!");
		$('#contestant-name').focus();
		return;
	}
	dbRef.on('value', function(snapshot) {
		var data = snapshot.val();
		if (data.active_contestant == "NONE") {
			console.log("UPDATING");
			dbRef.set({
			    active_contestant: contestant_name,
			});
		}
		dbRef.off();
	});
}