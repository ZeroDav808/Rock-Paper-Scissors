console.log("Hello, World!");

const list = ["rock", "paper", "scissors"];
let humanScore = 0;
let computerScore = 0;

// Returns a random number in an interval
function getRandomFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// Returns a random string of either 'rock', 'paper', 'scissors'
function getComputerChoice() {
  return list[getRandomFromInterval(0, list.length - 1)];
}

function getHumanChoice() {
  return prompt("Enter one of the following: rock, paper, scissors.");
}

function playRound(humanChoice, computerChoice) {
  switch (humanChoice) {
    case "rock":
      if (computerChoice === "rock") {
        console.log("You both chose rock! You tied.");
      } else if (computerChoice === "paper") {
        computerScore += 1;
        console.log("Computer chose paper. Computer wins this round!");
      } else if (computerChoice === "scissors") {
        humanScore += 1;
        console.log("You win. rock beats scissors!");
      }
      break;
    case "paper":
      if (computerChoice === "paper") {
        console.log("You both chose paper! You tied.");
      } else if (computerChoice === "rock") {
        humanScore += 1;
        console.log("You win! Paper beats rock.");
      } else {
        computerScore += 1;
        console.log("Computer chose scissors! Scissors beats paper.");
      }
      break;
    case "scissors":
      if(computerChoice === "scissors"){
        console.log("You both chose scissors! You tied.");
      } else if(computerChoice === "rock"){
        computerScore += 1;
        console.log("Computer chose rock. Rock beats scissors.");
      } else {
        humanScore += 1;
        console.log("You win. Scissors beats paper.");
      }
      break;
  }
}

let humanChoice = getHumanChoice();
let computerChoice = getComputerChoice();

playRound(humanChoice, computerChoice);
