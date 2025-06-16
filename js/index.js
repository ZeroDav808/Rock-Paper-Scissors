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

function getHumanChoice(e) {
  const target = e.target;

  switch (target.id) {
    case "rock":
      return "Rock";
    case "paper":
      return "Paper";
    case "scissors":
      return "Scissors";
  }
}

let humanScore = 0;
let computerScore = 0;
let round = 1;

function playRound(hChoice, cChoice) {
  if (
    (hChoice === "Rock" && cChoice === "Scissors") ||
    (hChoice === "Scissors" && cChoice === "Paper") ||
    (hChoice === "Paper" && cChoice === "Rock")
  ) {
    humanScore++;
  } else {
    computerScore++;
  }
}

function displayScore() {
  scoreBoard.textContent = `Human score: ${humanScore} \nComputer score: ${computerScore} \nCurrent round: ${round}`;
}

const container = document.querySelector("#container");
const scoreBoard = document.createElement("div");
scoreBoard.classList.add("scoreBoard");

document.body.appendChild(scoreBoard);

function resetScore() {
  humanScore = 0;
  computerScore = 0;
  round = 1;
}

function playGame(e) {

  if(round < 6){
    let hChoice = getHumanChoice(e);
    let cChoice = getComputerChoice();
    playRound(hChoice, cChoice);
    displayScore();
    round++;
  } else {
    if(humanScore > computerScore){
      scoreBoard.textContent = 'Human wins!!!!\nRestarting Game';

    } else{
      scoreBoard.textContent = 'Computer wins!!!!\nRestarting Game';
    }
    resetScore();
  }
}

container.addEventListener("click", (e) => {
  playGame(e);
});

// container.addEventListener("click", (e) => {
//   let hChoice = getHumanChoice(e);
//   let cChoice = getComputerChoice();
//   playRound(hChoice, cChoice);
//   displayScore();
//   round++;
// });

// function playGame() {
//   for (let i = 0; i < 5; i++) {
//     const humanSelection = getHumanChoice();
//     const computerSelection = getComputerChoice();

//     playRound(humanSelection, computerSelection);

//     console.log(`\n The current score is: Human :${humanScore} | Computer :${computerScore}
//                     the computer chose ${computerSelection} and the human chose ${humanSelection}`);
//   }

//   if (humanScore > computerScore) {
//     console.log("Human Wins!!!");
//   } else {
//     console.log("Computer Wins!!!");
//   }
// }

// playGame();
