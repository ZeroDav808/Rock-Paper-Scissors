const list = ["rock", "paper", "scissors"];
let humanScore = 0;
let computerScore = 0;

const items = document.querySelectorAll("button");
const human = document.querySelector(".human-score");
const computer = document.querySelector(".computer-score");
const resultPara = document.querySelector(".para");

// Returns a random number in an interval
function getRandomFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// Returns a random string of either 'rock', 'paper', 'scissors'
function getComputerChoice() {
  return list[getRandomFromInterval(0, list.length - 1)];
}

// Stores the game logic and determines a winner and updates score
function playRound(humanChoice, computerChoice) {
  let resultMessage = "";

  switch (humanChoice) {
    case "rock":
      if (computerChoice === "rock") {
        resultMessage = "You both chose rock! You tied.";
      } else if (computerChoice === "paper") {
        computerScore += 1;
        resultMessage = "Computer chose paper. Computer wins this round!";
      } else if (computerChoice === "scissors") {
        humanScore += 1;
        resultMessage = "You win. Rock beats scissors!";
      }
      break;
    case "paper":
      if (computerChoice === "paper") {
        resultMessage = "You both chose paper! You tied.";
      } else if (computerChoice === "rock") {
        humanScore += 1;
        resultMessage = "You win! Paper beats rock.";
      } else {
        computerScore += 1;
        resultMessage = "Computer chose scissors! Scissors beats paper.";
      }
      break;
    case "scissors":
      if (computerChoice === "scissors") {
        resultMessage = "You both chose scissors! You tied.";
      } else if (computerChoice === "rock") {
        computerScore += 1;
        resultMessage = "Computer chose rock. Rock beats scissors.";
      } else {
        humanScore += 1;
        resultMessage = "You win. Scissors beats paper.";
      }
      break;
  }

  // Update scores on the screen
  human.textContent = `Human score: ${humanScore}`;
  computer.textContent = `Computer score: ${computerScore}`;
  
  // Display round result
  resultPara.textContent = resultMessage;

  // Check for game winner
  if (humanScore === 5) {
    resultPara.textContent = "Congratulations! You won the game!";
    disableButtons();
  } else if (computerScore === 5) {
    resultPara.textContent = "Computer won the game! Better luck next time.";
    disableButtons();
  }
}

// Disable buttons when game is over
function disableButtons() {
  items.forEach(button => {
    button.disabled = true;
  });
}

function playerSelection() {
  items.forEach((button) => {
    button.addEventListener("click", () => {
      const val = button.textContent;
      const computerChoice = getComputerChoice();
      playRound(val, computerChoice);
    });
  });
}

playerSelection();




