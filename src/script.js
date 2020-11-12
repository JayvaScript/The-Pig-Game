'use strict';

const player0Element = document.querySelector(`.player--0`);
const player1Element = document.querySelector(`.player--1`);
const score0Element = document.getElementById(`score--0`);
const score1Element = document.getElementById(`score--1`);
const current0Element = document.getElementById(`current--0`);
const current1Element = document.getElementById(`current--1`);
const diceElement = document.querySelector(`.dice`);
const buttonNew = document.querySelector(`.btn--new`);
const buttonRoll = document.querySelector(`.btn--roll`);
const buttonHold = document.querySelector(`.btn--hold`);

let scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let gameActive = true;
const baseCurrentScore = 0;

const togglePlayers = function () {
  player0Element.classList.toggle(`player--active`);
  player1Element.classList.toggle(`player--active`);
  document.getElementById(
    `current--${activePlayer}`
  ).textContent = baseCurrentScore;
  currentScore = baseCurrentScore;
  activePlayer = activePlayer === 0 ? 1 : 0;
};

const init = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  gameActive = true;
  currentScore = 0;
  activePlayer = 0;
  currentScore = baseCurrentScore;
  gameActive = true;
  scores = [0, 0];
  score0Element.textContent = 0;
  score1Element.textContent = 0;
  current0Element.textContent = 0;
  current1Element.textContent = 0;
  diceElement.classList.add(`hidden`);
  player0Element.classList.add(`player--active`);
  player1Element.classList.remove(`player--active`);
  player0Element.classList.remove(`player--winner`);
  player1Element.classList.remove(`player--winner`);
};

init();

buttonRoll.addEventListener(`click`, function () {
  if (gameActive) {
    const dice = Math.trunc(Math.random() * 6) + 1;

    diceElement.classList.remove(`hidden`);
    diceElement.src = `dice-${dice}.png`;

    if (dice !== 1) {
      currentScore += dice;
      document.getElementById(
        `current--${activePlayer}`
      ).textContent = currentScore;
    } else {
      togglePlayers();
    }
  }
});

buttonHold.addEventListener(`click`, function () {
  if (gameActive) {
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    if (scores[activePlayer] >= 100) {
      gameActive = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add(`player--winner`);
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove(`player--active`);
      diceElement.classList.add(`hidden`);
    } else {
      togglePlayers();
    }
  }
});

buttonNew.addEventListener(`click`, init);
