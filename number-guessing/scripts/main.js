var randomNumber = Math.floor(Math.random() * 100) + 1;
var guesses = document.querySelector('#guesses');
var lastResult = document.querySelector('#lastResult');
var lowOrHigh = document.querySelector('#lowOrHigh');
var guessCount = 1;

function checkGuess() {
  var userGuess = Number(guessInput.value);
  if (guessCount === 1) {
    guesses.textContent = 'Previous guesses: ';
  }

  guesses.textContent += userGuess + ' ';

  if (userGuess === randomNumber) {
    lastResult.textContent = 'Congratulations! You got it right!';
    lastResult.style.backgroundColor = 'green';
    lowOrHigh.textContent = '';
    setGameOver();
  } else if (guessCount === 10) {
    lastResult.textContent = '!!!GAME OVER!!!';
    lowOrHigh.textContent = '';
    setGameOver();
  } else {
    lastResult.textContent = 'Wrong!';
    lastResult.style.backgroundColor = 'red';

    if (userGuess < randomNumber) {
      lowOrHigh.textContent = 'Last guess was too low!';
    } else if (userGuess > randomNumber) {
      lowOrHigh.textContent = 'Last guess was too high!';
    }
  }

  guessCount++;
  guessInput.value = '';
}

guessSubmit.addEventListener('click', checkGuess);

function setGameOver() {
  guessInput.disabled = true;
  guessSubmit.disabled = true;
  resetButton = document.createElement('button');
  resetButton.textContent = 'Start new game';
  document.body.appendChild(resetButton);
  resetButton.addEventListener('click', resetGame);
}

function resetGame() {
  guessCount = 1;
  var resultSection = document.querySelectorAll('.result-section p');
  for (var i = 0; i < resultSection.length; i++) {
    resultSection[i].textContent = '';
  }

  resetButton.parentNode.removeChild(resetButton);
  guessInput.disabled = false;
  guessSubmit.disabled = false;
  guessInput.value = '';
  guessInput.focus();
  lastResult.style.backgroundColor = 'white';
  randomNumber = Math.floor(Math.random() * 100) + 1;
}