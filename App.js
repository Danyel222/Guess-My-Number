"use strict";

let inpOfGuess = document.querySelector(".guess");
let checkBtn = document.querySelector(".btn-checker");
let message = document.querySelector(".message");
let number = document.querySelector(".number");
let scoreEl = document.querySelector(".score");
let body = document.body.style;
let againBtn = document.querySelector(".btn-again");

let score = 5;
let randomNumGen;

function resetGame() {
  score = 6;
  inpOfGuess.value = "";
  number.textContent = "?";
  message.textContent = "Start guessing...";
  scoreEl.textContent = score;
  body.backgroundColor = "red";
  checkBtn.removeAttribute("disabled");
  checkBtn.style.backgroundColor = "";
  checkBtn.style.cursor = "pointer";
  randomNumGen = Math.ceil(Math.random() * 6); // Reset random number here
}

function gamer(e) {
  e.preventDefault();

  let userGuess = Number(inpOfGuess.value);

  if (!userGuess) {
    message.textContent = "Input field must not be empty!";
  } else if (userGuess > randomNumGen) {
    message.textContent = "You guessed higher!";
    number.textContent = randomNumGen;
    score--;
    scoreEl.textContent = score;
    body.backgroundColor = "blue";
  } else if (userGuess < randomNumGen) {
    message.textContent = "You guessed lower!";
    number.textContent = randomNumGen;
    score--;
    scoreEl.textContent = score;
    body.backgroundColor = "yellow";
  } else {
    message.textContent = "You guessed right! 👍";
    number.textContent = randomNumGen;
    body.backgroundColor = "green";
  }

  if (score === 0) {
    checkBtn.setAttribute("disabled", "disabled");
    message.textContent = "Game over, restart 👎";
    checkBtn.style.backgroundColor = "gray";
    checkBtn.style.cursor = "no-drop";
  }
}

checkBtn.addEventListener("click", gamer);
againBtn.addEventListener("click", resetGame);
