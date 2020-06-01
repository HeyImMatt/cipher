function getUserInput() {
  const userSentence = prompt('Please enter a sentence to encode:');
  console.log(userSentence);
  capitalizeFirstAndLastLetter(userSentence);
}

function capitalizeFirstAndLastLetter(userSentence) {
  let firstAndLastLetter = userSentence.substring(0, 1) + userSentence.slice(-1);
  console.log(firstAndLastLetter.toUpperCase())
  reverseLettersAndAdd(firstAndLastLetter.toUpperCase(), userSentence);
}

function reverseLettersAndAdd(letters, userSentence) {
  const combinedSentence = userSentence + (letters.split("").reverse().join(""));
  console.log(combinedSentence)
  insertLetter(userSentence, combinedSentence)
}

getUserInput();