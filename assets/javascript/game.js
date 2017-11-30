var tarScore = 0;
var crysRanNum = 0;
var win = 0;
var lose = 0;
var count = 0;


//appending random number to .targetScore in html
	tarScore = Math.floor(Math.random()*120)+19;
	$("#result").html(tarScore);
	console.log(tarScore);

//loop and random value 1-12 on each crystal
for (var i = 0; i < 4; i++) {
		crysRanNum = Math.floor(Math.random() * 11 ) + 1;
		$(".button").click(crysRanNum);
		console.log(".button");
		//$(".button").on("click", function() {
			/*$(".button").html(crysRanNum);
			console.log(crysRanNum);
		};
*/
//Score Counter

	//$(".button").click(function(){
	//	count++;
	///$("#counter").html(count);
	//console.log("#finalTotal");
	//});
		
};





//random number on crystal each has value between 1-12
// var crysRandom = Math.floor(Math.random() * 11) + 1;
// console.log(crysRandom);

// FOUR Crystals dislayed as BUTTONS on the page
// The player will be shown a Random Number at the Start of the game
// When the player clicks on a crystal, it will add a specific amount of points to the player's total score
	// Your game will hide this amount until the player clicks on a crystal
	// When they do click one, update the player's score counter

// The player wins if their total score matches the random number from the beeginning of the game
// Player loses if their score goes above the random number

// The game restarts whenever the player wins or loses
	//When thee game begins again, the player should see a new random number. Also all the crystals will have
	//four new hidden values.

// The random number shown at the start of the game should be between 19-120
// Each crystal should have a random hidden value between 1-12

// Alert Win or Lose

