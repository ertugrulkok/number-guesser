var msg1 = document.getElementById("message1");
var msg2 = document.getElementById("message2");
var msg3 = document.getElementById("message3");
var title = document.getElementById("title")

var computerRandom = Math.floor(Math.random() * 101);
console.log(computerRandom)


var numberOfGuesses = 0;

var guessedNumbers = [];

function startGame() {
  var userGuess = document.getElementById("guess").value;

  if (userGuess < 1 || userGuess > 100) {
    alert("Enter a valid number");
  } else {

    numberOfGuesses++;
  
    guessedNumbers.push(userGuess);

   
    if (userGuess < computerRandom) {
      msg1.textContent = "Try: " + numberOfGuesses;
      msg2.textContent = "Numbers entered so far: " + guessedNumbers;
      msg3.textContent = "Too low";
   
    } else if (userGuess > computerRandom) {
      msg1.textContent = "Try: " + numberOfGuesses;
      msg2.textContent = "Numbers entered so far: " + guessedNumbers;
      msg3.textContent = "Too high";
  
    } else if (userGuess == computerRandom) {
      msg1.textContent = "Try: " + numberOfGuesses;
      msg2.textContent = "Numbers entered so far: " + guessedNumbers;
      msg3.textContent = "You won!";
      title.textContent = "Congratulations you won!"
      title.style.color = "green"
    }
  }
}

