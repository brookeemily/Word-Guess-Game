
// Define variables

// letters that computer can choose
var computerChoice = ["Alaska Thunderfuck", "Sharon Needles", "RuPaul", "Shangela"];

// scoreboard
var wins = 0;
var loss = 0;


// guesses left & letters guessed 
var guessesLeft = 9;
var lettersGuessed = [];
var computerChose = [];

window.onload = function callLetter() {

      // This randomly chooses a letter from the computerChoice array - this is the computer's letter
      var computerLetter = computerChoice[Math.floor(Math.random()*computerChoice.length)];
      computerChose.push(computerLetter);
      console.log(computerChose[0]);
      
        // This splits the computer's choice into an array of characters, this is what the user needs to guess
        var letters = computerChose[0].split("");
        var displayWord = (" " + computerChose[0]).replace(/./g, ' _ ');
        console.log(letters);
        console.log(displayWord);
        // Display the computer's choice
        // displayWord.replace(letters, "_");
        // console.log(displayWord);





        // Creating a variable to hold our new HTML. Our HTML now keeps track of the user and computer guesses, and wins/losses/ties.
        var html =
            "<p>" + displayWord + "</p>";

        // Set the inner HTML contents of the #game div to our html string
         document.querySelector("#game").innerHTML = html;
}
      


  
