console.log("Hello, World!");

const list = ['rock', 'paper', 'scissors'];

// Returns a random number in an interval
function getRandomFromInterval(min,max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// Returns a random string of either 'rock', 'paper', 'scissors'
function getComputerChoice(){
    return list[getRandomFromInterval(0,list.length-1)];
}

function getHumanChoice(){
    return prompt("Enter one of the following: rock, paper, scissors.");
}

