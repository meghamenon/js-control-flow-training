console.log("security_questions.js loaded");

var securityQuestions = 
[

{question: "What is your mother's maiden name", expectedAnswer: "meena"} ,

{question: "What is your favorite food", expectedAnswer: "pizza"} ,

{question: "What is your pet's name?", expectedAnswer: "smokey"}

]

for (var i = 0; i < securityQuestions.length; i++){

	var answer = prompt(securityQuestions[i].question);
	if (answer !== securityQuestions[i].expectedAnswer){

		alert("Incorrect answer!");
		console.log("Try again");
	} 

}