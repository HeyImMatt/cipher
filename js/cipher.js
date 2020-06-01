let userSentence;
let cipherSentence;

function getUserInput() {
  userSentence = prompt('Please enter a sentence to encode:');
  capitalizeFirstAndLastLetter(userSentence);
}

function capitalizeFirstAndLastLetter(userSentence) {
  const firstAndLastLetter = userSentence.charAt(0) + userSentence.charAt(userSentence.length - 1);
  reverseLettersAndAdd(firstAndLastLetter.toUpperCase(), userSentence);
}

function reverseLettersAndAdd(letters, userSentence) {
  const combinedSentence = userSentence + (letters.split("").reverse().join(""));
  insertLetter(userSentence, combinedSentence)
}

function insertLetter(userSentence, combinedSentence) {
  const letterToRemove = Math.floor((userSentence.length / 2))
  const result = userSentence.charAt(letterToRemove) + combinedSentence;
  reverseCipherSentence(result);
}

function reverseCipherSentence(result) {
  cipherSentence = (result.split("").reverse().join(""));
}

getUserInput();

console.log(userSentence);
console.log(cipherSentence);