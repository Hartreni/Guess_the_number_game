// Generate a random number between 1 and 100
const randomNumber = Math.floor(Math.random() * 100) + 1;

// Function to start the game
function startGame() {
  // Prompt the player to enter a guess
  const playerGuess = parseInt(prompt("Guess a number between 1 and 100"));

  // Get the result element
  const resultElement = document.getElementById("result");

  // Check if the guess is correct
  if (playerGuess === randomNumber) {
    resultElement.textContent = "Congratulations! You guessed the correct number.";
  } else if (playerGuess < randomNumber) {
    resultElement.textContent = "Too low! Try guessing a higher number.";
  } else {
    resultElement.textContent = "Too high! Try guessing a lower number.";
  }
}