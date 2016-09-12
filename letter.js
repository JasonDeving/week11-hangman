exports.checkLetters = function (letter) {

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