var Word = require("./word.js");
var words = new Word(["first", "newbie", "crunch", "three", "adam", "jason"]);
var Letters = require("./letter");
var keypress = require('../node_modules/keypress');


//Global Vars
var wordOptions = words.n;
var selectedWord = Letters.selectedWord;
var letterinWord = Letters.letterinWord;
var numBlanks = Letters.numBlanks;
var blanksAndSuccesses = Letters.blankandsuccess; // j _ _ _ _ 
var wrongLetters = Letters.wrongLetters;

var winCount = 0;
var lossCount = 0;
var guessCount = 9;

function startGame () {
	selectedWord = wordOptions[Math.floor(Math.random() * wordOptions.length)];
	letterinWord = selectedWord.split("");
	numBlanks = letterinWord.length;

	guessesLeft = 9;
	wrongLetters = [];
	blanksAndSuccesses = [];

	//populated blanks and success with right number of blanks

	for (var i = 0; i < numBlanks; i++) {
		blanksAndSuccesses.push("_")
	}

	//change html to reflect round conditions
	console.log(blanksAndSuccesses.join(" "));
	console.log("guess left: ", guessesLeft);
	console.log("win count: ", winCount);
	console.log("loss count", lossCount);

	console.log(selectedWord);
	// console.log(letterinWord);
	// console.log(numBlanks);
	console.log(blanksAndSuccesses)
}

function roundComplete() {
	console.log("win", winCount, "loss", lossCount, "guess", guessesLeft);
	//update html

	// document.getElementById("numGuesses").innerHTML = guessesLeft;
	// document.getElementById("wordToGuess").innerHTML = blanksAndSuccesses.join(" ");
	// document.getElementById("wrongGuesses").innerHTML = wrongLetters.join(" ");
	if(wrongLetters.length > 1){console.log("incorrect letters used: ",wrongLetters.join(","));}
	
	// check if user won
	if(letterinWord.toString() == blanksAndSuccesses.toString()) {
		winCount++;
		console.log("win");
		console.log("win count: ", winCount);
		// startGame();
		process.exit();
	}
	// check if user lost
	else if(guessesLeft == 0){
		lossCount++;
		console.log("loser");
		console.log("lose count: ", lossCount);
		// startGame();
		process.exit();
	}
}
startGame();

// make `process.stdin` begin emitting "keypress" events 
keypress(process.stdin);
 
// listen for the "keypress" event 
process.stdin.on('keypress', function (ch, key) {
  	if(key ==  undefined) {
  		console.log("choose a different key");
  	} else {
  		var letterGuessed = key.name;
  	}
	  Letters(letterGuessed);
	  console.log(letterGuessed);
	  roundComplete();
  if (key && key.ctrl && key.name == 'c') {
    process.stdin.pause();
  }
});
 
process.stdin.setRawMode(true);
process.stdin.resume();