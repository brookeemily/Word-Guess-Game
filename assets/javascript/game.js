// Define variables

// lettersInWordthat computer can choose
var computerChoice = [
 "cat", "dog"
];

// scoreboard
var wins = 0;
var loss = 0;

// guesses left & lettersInWordguessed
var guessesLeft = 9;
var lettersGuessed = [];
var computerChose = [];
var userGuess = [];
var displayWord = [];
var lettersInWord = [];

window.onload = function callLetter() {

  // This randomly chooses a string from the computerChoice array
  var computerPicks = computerChoice[Math.floor(Math.random() * computerChoice.length)];
  computerChose.push(computerPicks);
  console.log(computerChose[0]);

  // This splits the computer's choice into an array of characters, this is what the user needs to guess
  lettersInWord= computerChose[0].split("");
  console.log(lettersInWord);

  // Display lettersInWordas dashes
  displayWord = (" " + computerChose[0]).replace(/./g, " _ ");
  console.log(displayWord);
};

// User input
document.onkeyup = function(event) {

  // Determines which key was pressed.
  userGuess = event.key;
  console.log(userGuess);

  // If user guess is included in the chosen word,
  if ((lettersInWord.includes(userGuess, 0))) {
      displayWord = (lettersInWord[0].replace(userGuess))
console.log("yay");
// If user guess is NOT included in the chosen word, store it in lettersInWordguessed & lose a guess
  } else {
    lettersGuessed.push(userGuess);
    guessesLeft--;
    console.log("lettersInWordguessed: " + lettersGuessed);
  }


//   Creating a variable to hold our new HTML. Our HTML now keeps track of the user and computer guesses, and wins/losses/ties.
  var html = "<p>" + displayWord + "</p>";

  // Set the inner HTML contents of the #game div to our html string
  document.querySelector("#game").innerHTML = html;
};
