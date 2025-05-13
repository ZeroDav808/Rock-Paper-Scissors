const choices = ["rock", "paper", "scissors"];
let humanScore = 0;
let computerScore = 0;

function playRound(hChoice, cChoice) {
  if (hChoice === choices[0]) {
    if (cChoice === choices[0]) {
        console.log(`It's a tie!`);     
    } else if (cChoice === choices[1]) {
      computerScore++;
      console.log(`Computer beats human! ${printScore()}`);
    } else {
      humanScore++;
      console.log(`Human beats computer! ${printScore()}`);
    }
  } else if (hChoice === choices[1]) {
    if (cChoice === choices[0]) {
        humanScore++;
        console.log(`Human beats computer! ${printScore()}`);
    } else if (cChoice === choices[1]) {
        console.log(`It's a tie!`);     
    } else {
        computerScore++;
        console.log(`Computer beats human! ${printScore()}`);
    }
  } else if (hChoice === choices[2]) {
    if (cChoice === choices[0]) {
        computerScore++;
        console.log(`Computer beats human! ${printScore()}`);
    } else if (cChoice === choices[1]) {
        humanScore++;
        console.log(`Human beats computer! ${printScore()}`);
    } else {
        console.log(`It's a tie!`);     
    }
  }
}

function getComputerChoice() {
  const val = Math.floor(Math.random() * 3);
  return choices[val - 1];
}

function handleClick(e) {
    const value = e.target.id;
    const cChoice = getComputerChoice();
    switch(value) {
        case 'one':
            playRound(choices[0], cChoice);
            break;
        case 'two':
            playRound(choices[1], cChoice);
            break;
        case 'three':
            playRound(choices[2], cChoice);
            break;
        default:
            console.log('???');
    }
}

const textBox = document.querySelector('p');
const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', handleClick);
});

function printScore() {
  return `The score is: User-> ${humanScore}, Computer-> ${computerScore}`;
}

