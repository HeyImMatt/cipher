function getUserInput() {
  const userSentence = prompt('Please enter a sentence to encode:');
  console.log(userSentence);
  capitalizeFirstAndLastLetter(userSentence);
}

function capitalizeFirstAndLastLetter(userSentence) {
  const firstLetter = userSentence.substring(0, 1);
  const lastLetter = userSentence.substring(-1);
  const firstAndLastLetter = firstLetter + lastLetter;
  console.log(firstAndLastLetter);
}

getUserInput();
