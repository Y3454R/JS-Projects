'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
document.querySelector('.number').textContent = '?';
document.querySelector('.highscore').textContent = highScore;

const wrongGuessMessage = function (messageText) {
  score--;
  document.querySelector('.score').textContent = score;
  if (score > 0) {
    document.querySelector('.message').textContent = messageText;
  } else {
    document.querySelector('.message').textContent = '💥 You Lost!';
    //refresh();
  }
};

const refresh = function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;

  document.querySelector('.number').textContent = '?';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;

  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // when no input
  if (!guess) {
    document.querySelector('.message').textContent = '⛔️ No number!';
  }

  //when win
  else if (guess === secretNumber) {
    highScore = Math.max(highScore, score);
    document.querySelector('.highscore').textContent = highScore;

    document.querySelector('.message').textContent = '🎉 Correct!';

    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';
    //refresh();
  } else if (guess !== secretNumber) {
    let messageText;
    guess > secretNumber ? (messageText = '📈 High') : (messageText = '📉 Low');
    wrongGuessMessage(messageText);
  }
});

document.querySelector('.again').addEventListener('click', function () {
  refresh();
});
