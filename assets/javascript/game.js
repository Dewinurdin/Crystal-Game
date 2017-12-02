//default values/scores
var wins = 0;
var loses = 0;
var scoreCount = 0;

//START GAME: Target number is set, random numbers are set, and then user plays

// Set different values for each of the crystals (between 1 and 12)
	var blue = Math.floor(Math.random()*11+1);
	var green = Math.floor(Math.random()*11+1);
	var red = Math.floor(Math.random()*11+1);
	var yellow = Math.floor(Math.random()*11+1);
	$("#counter").text(scoreCount);
	

//setting target number
	var tarScore = Math.floor(Math.random()*101);
	$("#result").html(tarScore);
	// console.log(tarScore);

//to determine win or lose
function winOrLose(){
	if (tarScore === scoreCount) {
		wins++;
		$("#wins").text(wins);
		alert("You Win!");
		resetStart();
	} else if (scoreCount > tarScore) {
		loses++;
		$("#loses").text(loses);
		alert("You Lose!");
		resetStart();
	}
}

//when you click on the crystal a value appears,
// user keeps clicking on additional crystals until that target is reached(W) or exceeded (L)
$(".crystal").on("click", function(){
	var color = $(this).attr("id");
	if (color === "blue") {
		scoreCount += blue;
		$("#counter").text(scoreCount);
		winOrLose();
	}
	if (color === "red") {
		scoreCount += red;
		$("#counter").text(scoreCount);
		winOrLose();
	}
	if (color === "green") {
		scoreCount += green;
		$("#counter").text(scoreCount);
		winOrLose();
	}
	if (color === "yellow") {
		scoreCount += yellow;
		$("#counter").text(scoreCount);
		winOrLose();
	}

});

//reset function to restart the game
function resetStart(){
	blue = Math.floor(Math.random()*11+1);
	green = Math.floor(Math.random()*11+1);
	red = Math.floor(Math.random()*11+1);
	yellow = Math.floor(Math.random()*11+1);
	$("#counter").text(scoreCount);
	
	tarScore = Math.floor(Math.random()*101);
	$("#result").html(tarScore);
}
