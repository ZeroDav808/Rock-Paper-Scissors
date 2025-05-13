const choices = ["rock", "paper", "scissors"];
let humanScore = 0;
let computerScore = 0;

const textBox = document.querySelector("p");
const buttons = document.querySelectorAll("button");


function playRound(hChoice, cChoice) {
  textBox.textContent = "";
  if (hChoice === choices[0]) {
    if (cChoice === choices[0]) {
      textBox.textContent = `It's a tie!`;
    } else if (cChoice === choices[1]) {
      computerScore++;
      textBox.textContent = `Computer beats human! ${printScore()}`;
    } else {
      humanScore++;
      textBox.textContent = `Human beats computer! ${printScore()}`;
    }
  } else if (hChoice === choices[1]) {
    if (cChoice === choices[0]) {
      textBox.textContent = `Human beats computer! ${printScore()}`;
    } else if (cChoice === choices[1]) {
      textBox.textContent = `It's a tie!`;
    } else {
      computerScore++;
      textBox.textContent = `Computer beats human! ${printScore()}`;
    }
  } else if (hChoice === choices[2]) {
    if (cChoice === choices[0]) {
      computerScore++;
      textBox.textContent = `Computer beats human! ${printScore()}`;
    } else if (cChoice === choices[1]) {
      humanScore++;
      textBox.textContent = `Human beats computer! ${printScore()}`;
    } else {
      textBox.textContent = `It's a tie!`;
    }
  }
}

function gameEnd() {
    if(humanScore === 5){
        textBox.textContent = `Human wins the game! ${printScore()}`;
        humanScore = computerScore = 0;
    } else if(computerScore === 5){
        textBox.textContent = `Computer wins the game! ${printScore()}`;
        humanScore = computerScore = 0;
    }
}

function getComputerChoice() {
  const val = Math.floor(Math.random() * 3);
  return choices[val - 1];
}

function handleClick(e) {
  const value = e.target.id;
  const cChoice = getComputerChoice();
  switch (value) {
    case "one":
      playRound(choices[0], cChoice);
      gameEnd();
      break;
    case "two":
      playRound(choices[1], cChoice);
      gameEnd();
      break;
    case "three":
      playRound(choices[2], cChoice);
      gameEnd();
      break;
    default:
      console.log("???");
  }
}


buttons.forEach((button) => {
  button.addEventListener("click", handleClick);
});

function printScore() {
  return `The score is: User-> ${humanScore}, Computer-> ${computerScore}`;
}
