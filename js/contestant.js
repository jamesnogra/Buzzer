var dbRef;
var temp_listener;

$(document).ready(function() {

	dbRef = firebase.database().ref();
	dbRef.on("child_changed", function(data) {
		temp_data = data.val();
		console.log(temp_data);
		if (temp_data == "NONE") {
			$('#big-buzzer-button').css('background-color', 'green');
		} else {
			$('#big-buzzer-button').css('background-color', 'red');
		}
	});

});

function buzzButton() {
	var contestant_name = $('#contestant-name').val();
	if (contestant_name.length == 0) {
		alert("Please enter your name!");
		$('#contestant-name').focus();
		return;
	}
	temp_listener = dbRef.on('value', function(snapshot) {
		var data = snapshot.val();
		if (data.active_contestant == "NONE") {
			//console.log("UPDATING");
			dbRef.set({
			    active_contestant: contestant_name,
			});
		}
		dbRef.off('value');
	});
}