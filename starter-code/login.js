console.log("login.js loaded");

var userLogin = {username: "meghamenon", password: "12345"}
var count = 0;

while (count < 3){
var userInput = prompt("Enter password for " + userLogin.username);
if (userInput == userLogin.password){
	console.log("Password matched");
} else {

	alert("Incorrect!");
	count = count + 1;
	}

if (count === 3){
	console.log("Sorry! You've failed your 3 attempts");

}
}