function getComputerChoice() {
  const value = Math.floor(Math.random() * 3);

  switch (value) {
    case 0:
      return "Rock";
    case 1:
      return "Paper";
    case 2:
      return "Scissors";
    default:
      return "???";
  }
}

function getHumanChoice() {
  return prompt("Choose: Rock, Paper, Scissors");
}

let humanScore = 0;
let computerScore = 0;

function playRound(hChoice, cChoice) {
  if (hChoice === cChoice) {
    console.log(`It's a tie!`);
  } else if (
    (hChoice === "Rock" && cChoice === "Scissors") ||
    (hChoice === "Scissors" && cChoice === "Paper") ||
    (hChoice === "Paper" && cChoice === "Rock")
  ) {
    console.log("Human wins!");
    humanScore++;
  } else {
    console.log("Computer wins!");
    computerScore++;
  }
}

function playGame() {
  for (let i = 0; i < 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);

    console.log(`\n The current score is: Human :${humanScore} | Computer :${computerScore}
                    the computer chose ${computerSelection} and the human chose ${humanSelection}`);
  }

  if (humanScore > computerScore) {
    console.log("Human Wins!!!");
  } else {
    console.log("Computer Wins!!!");
  }
}

playGame();
