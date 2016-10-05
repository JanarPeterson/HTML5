var guess;
var correct;
var turn;
var response;

var output;
var txtGuess;
var btnAgain;

function init() {
  output = document.getElementById("output");
  txtGuess = document.getElementById("txtGuess");
  btnAgain = document.getElementById("again");

  btnAgain.style.display = "none";

  turn = 0;

  output.innerHTML = "I’m thinking of a number between 0 and 100. ";
  output.innerHTML = "Guess my number, and I’ll tell if you are ";
  output.innerHTML = "too high, too low, or correct.";

  correct = parseInt(Math.random()*100);
  console.log(correct);

  txtGuess.focus();
}

function checkGuess() {
  turn++;

  response = turn + ") ";
  guess = parseInt(txtGuess.value);
  if (guess < correct) {
    response += "too low";
  }else if (guess > correct) {
    response = "too high";
  }else if (guess === correct) {
    response = "correct :)";
      btnAgain.style.display = "block";
  }else {
    response = "enter number between 1-100";
  }
  output.innerHTML = response;

}
