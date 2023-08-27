function playGuessingGame(numToGuess, totalGuesses) {
  console.log(numToGuess);
  console.log(totalGuesses);
  let countOfTries = 0;
  if (totalGuesses == undefined) {
    totalGuesses = 10;
  }
  let number = 0;
  while (number <= totalGuesses) {
    number = prompt("Enter a number between 1 and 100.", number);
    if (isNaN(number)) {
      alert("Please enter a number.");
    } else {
      if (number == numToGuess) {
        console.log("Guessed Correct");
        break;
      } else if (number < numToGuess) {
        countOfTries++;
        console.log("X is too small. Guess a larger number.");
      } else if (number > numToGuess) {
        countOfTries++;
        console.log("X is too large. Guess a smaller number.");
      }
    }
  }
  console.log("Tries ->", countOfTries);
  return countOfTries;
}
playGuessingGame(5, 3);
