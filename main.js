var Word = require("./word.js");
var words = new Word(["first", "newbie", "crunch", "three", "adam", "jason"]);
var game = require("./game.js");
var letters = require('./letter.js');
var keypress = require('keypress');
var prompt = require('prompt');

// Global Vars
var wordOptions = words.n;
var selectedWord = letters.selectedWord;
var letterinWord = letters.letterinWord;
var numBlanks = letters.numBlanks;
var blanksAndSuccesses = letters.blankandsuccess; // j _ _ _ _ 
var wrongLetters = letters.wrongLetters;

//gamecounters
var winCount = game.winCount;
var lossCount = game.lossCount;
var guessCount = game.guessCount;

// Functions 
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
function checkLetters(letter) {

	// check if letters exists in code at all
	var isLetterInWord = false;
	for (var i = 0; i < numBlanks; i++) {
		if(selectedWord[i] == letter) {
			isLetterInWord = true;
		}
	}

	// check where the word exists , then populate out blankandsuccess array.
	if(isLetterInWord) {
		for (var i = 0; i < numBlanks; i++) {
			if(selectedWord[i] == letter) {
				blanksAndSuccesses[i] = letter;
			}
		} 
	} 
	else {
		wrongLetters.push(letter);
		guessesLeft--;
	}
	console.log(blanksAndSuccesses);
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
// Main process
// Init Code
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
	  checkLetters(letterGuessed);
	  console.log(letterGuessed);
	  roundComplete();
  if (key && key.ctrl && key.name == 'c') {
    process.stdin.pause();
  }
});
 
process.stdin.setRawMode(true);
process.stdin.resume();