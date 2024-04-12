'use strict';
const displayM = function (message) {
  document.querySelector('.message').textContent = message;
};
let Secretnumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
document.querySelector('.number').textContent = '?';
let highScore = 0;
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    displayM('No Number!');
    //when there is no input
  } else if (guess === Secretnumber) {
    displayM('Correct Number!!!');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
    //when the player wins
  } else if (guess !== Secretnumber) {
    if (score > 1) {
      //   document.querySelector('.message').textContent =
      //     guess > Secretnumber ? 'Too High!' : 'Too Low!';
      displayM(guess > Secretnumber ? 'Too High!' : 'Too Low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      //   document.querySelector('.message').textContent = 'You Loose!';
      displayM('You Loose!');
      document.querySelector('.score').textContent = 0;
    }
    //guess bigger than number
    //   } else if (guess < Secretnumber) {
    //     if (score > 1) {
    //       document.querySelector('.message').textContent = 'Too Low!';
    //       score--;
    //       document.querySelector('.score').textContent = score;
    //     } else {
    //       document.querySelector('.message').textContent = 'You Loose!';
    //       document.querySelector('.score').textContent = 0;
    //     }
    //     //guess smaller than number
  }
});
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  Secretnumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  //   document.querySelector('.message').textContent = 'start guessing...';
  displayM('start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
});
