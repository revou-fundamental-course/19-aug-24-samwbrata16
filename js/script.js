// Ini JavaScript

function replaceName () {
var welcomeName = prompt ("Hi, What's your name?", "");
document.getElementById("welcome-name").innerHTML = welcomeName;
}

document.getElementById('name-button').addEventListener("click", function() {
	replaceName();
})

var slideIndex = 1;
	showDivs(slideIndex);
	
function plusDivs(n){
	showDivs((slideIndex += n));
}	
	
function showDivs(n) {
	var i;
	var imgList = document.getElementsByClassName("img-slideshow");
	if (n > imgList.length) slideIndex = 1;
	else if (n < 1) slideIndex = imgList.length;
	
	for(i = 0; i < imgList.length; i++) {
		imgList[i].style.display = "none";
}
	imgList[slideIndex - 1].style.display = "block";
		
}

setInterval(() => {
	plusDivs(1);
}, 3000)	

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