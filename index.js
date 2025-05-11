const choices = ['rock', 'paper', 'scissors'];
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const val = Math.floor(Math.random() * (3 - 1 + 1) + 1);
    return choices[val - 1];
}

function getHumanChoice() {
    let val = null;

    while(true){
        val = prompt(`Choose: rock, paper, scissors`);
        if(choices.includes(val)){
            return val;
        }
        console.log('Invalid String. Please try again!');
    } 
    
}

function playRound(hChoice, cChoice){
    
}


