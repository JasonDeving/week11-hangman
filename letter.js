module.exports = Letters;

exports.selectedWord = "";
exports.letterinWord = [];
exports.numBlanks = 0;
exports.blanksAndSuccesses = [];
exports.wrongLetters = [];

exports.winCount = 0;
exports.lossCount = 0;
exports.guessCount = 9;

function Letters(letter) {

	// this.selectedWord = "";
	// this.letterinWord = [];
	// this.numBlanks = 0;
	// this.blanksAndSuccesses = []; // j _ _ _ _ 
	// this.wrongLetters = [];
	// this.guessesLeft = 9;
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