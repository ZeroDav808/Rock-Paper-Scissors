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

function getHumanChoice() {
  let val = null;

  while (true) {
    val = prompt(`Choose: rock, paper, scissors`);
    if (choices.includes(val)) {
      return val;
    }
    console.log("Invalid String. Please try again!");
  }
}

function printScore() {
  return `The score is: User-> ${humanScore}, Computer-> ${computerScore}`;
}

function playGame() {
  const winningScore = 5;

  while (humanScore !== winningScore && computerScore !== winningScore) {
    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);
  }

  console.log('Thanks for playing');

}


playGame();