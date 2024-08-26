// Ini JavaScript

function validateForm() {
	const name = document.forms["message-form"]["name"].value;
	const birthDate = document.forms["message-form"]["birth-date"].value;
	const gender = document.forms["message-form"]["gender"].value;
	const message = document.forms["message-form"]["message"].value;
		
	if (name == "" || birthDate == "" || gender == "" || message == "") {
		alert("There can be no empty fields.");
		return false;
	}
		
	setSenderUI(name, birthDate, gender, message);
		
	return false;
}

function setSenderUI(name, birthDate, gender, message) {
	document.getElementById("sender-name").innerHTML = name;
	document.getElementById("sender-birth-date").innerHTML = birthDate;
	document.getElementById("sender-gender").innerHTML = gender;
	document.getElementById("sender-message").innerHTML = message;
} 	