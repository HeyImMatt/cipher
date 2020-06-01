let userSentence;
let cipherSentence;

function getUserInput() {
  userSentence = prompt('Please enter a sentence to encode:');
  capitalizeFirstAndLastLetter(userSentence);
}

function capitalizeFirstAndLastLetter(userSentence) {
  const firstAndLastLetter = userSentence.substring(0, 1) + userSentence.slice(-1);
  reverseLettersAndAdd(firstAndLastLetter.toUpperCase(), userSentence);
}

function reverseLettersAndAdd(letters, userSentence) {
  const combinedSentence = userSentence + (letters.split("").reverse().join(""));
  insertLetter(userSentence, combinedSentence)
}

function insertLetter(userSentence, combinedSentence) {
  const letterToRemove = Math.floor((userSentence.length / 2))
  const result = userSentence.slice(letterToRemove, letterToRemove + 1) + combinedSentence;
  reverseCipherSentence(result);
}

function reverseCipherSentence(result) {
  cipherSentence = (result.split("").reverse().join(""));
}

getUserInput();

console.log(userSentence);
console.log(cipherSentence);