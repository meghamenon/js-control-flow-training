console.log("sing.js loaded");


var howManyTimes = prompt("How many times do you want to her the song?");
var bottleNumber = "bottles";
while (howManyTimes > 0){

console.log(howManyTimes + " " + bottleNumber + " of beer on the wall, " + howManyTimes + bottleNumber + "of beer on the wall");
howManyTimes = howManyTimes - 1;
console.log("Take one down and pass it around, " + howManyTimes + " bottles of beer on the wall");

if (howManyTimes == 1){
  bottleNumber = "bottle";
}

if (howManyTimes == 0){
	console.log("No more bottles on the wall!");
}

}
