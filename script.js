"use strict";

// selecting an element
// we will acces the dom and then define what we want to select
//using the class name ('.className');
// using the .textContent we will devine the text from the element
// console.log(document.querySelector('.message').textContent);
// //assign a new contenet
// document.querySelector('.message').textContent = 'Correct Number!';
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 23;
// document.querySelector('.guess').value;
// define the event on the page

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};
//document.querySelector('.number').textContent = secretNumber;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  // where is no imput
  if (!guess) {
    displayMessage("No number");
    // when guess wins
  } else if (guess === secretNumber) {
    displayMessage("Correct");
    document.body.style.backgroundColor = "green";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".number").textContent = secretNumber;
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  }
  // when guess is diffrent from secret number
  else if (guess !== secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent =
        guess > secretNumber ? "Too high" : "Too low";
      score--;
      document.querySelector(".score").textContent = score;
    } // when the guess is to low
    else {
      document.querySelector(".message").textContent = "Game over";
      document.querySelector(".score").textContent = 0;
    }
  }
});

// select the element with the 'again' class;
// create an anonimus function
// set the restart values
document.querySelector(".again").addEventListener("click", function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  displayMessage("Start guessing...");
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "black";
  document.querySelector(".number").style.width = "15rem";
});
