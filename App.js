"use strict"
let inpOfGuess = document.querySelector(".guess");
let checkBtn = document.querySelector(".btn-checker");
let message = document.querySelector(".message");
let number = document.querySelector(".score");
let score = document.querySelector(".score");


    function gamer(e) {
  e.preventDefault();
  let randomNumGen = Math.ceil(Math.random() * 2);
  let body = document.body.style;
  console.log(randomNumGen);

  if (!inpOfGuess.value) {
    message.textContent = "input field must not be empty";
  } else if (inpOfGuess.value > randomNumGen) {
    message.textContent = "you guessed higher";
    number.textContent = randomNumGen;
    score.textContent--
    body.backgroundColor = "blue";
  }else if(inpOfGuess.value < randomNumGen){
    message.textContent = "you guessed lower";
    number.textContent = randomNumGen;
    score.textContent--;
    body.backgroundColor = "yellow";
  }else if(number(inpOfGuess.value) === randomNumGen){
    message.textContent = "you guessed right 👍";
    number.textContent = randomNumGen;
    body.backgroundColor = "green";
  }

  if (score.textContent < 1) {
    checkBtn.setAttribute("disabled", "disabled");
    message.textContent = "game over, restart 👎";
    checkBtn.style.backgroundColor = "gray";
    checkBtn.style.cursor = "no-drop";
  }
}

checkBtn.addEventListener("click", gamer);