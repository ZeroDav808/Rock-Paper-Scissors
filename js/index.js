function getComputerChoice() {
    const value = Math.floor(Math.random() * 3);
    
    switch(value) {
        case 0:
            return 'Rock';
        case 1:
            return 'Paper';
        case 2:
            return 'Scissors';
        default:
            return '???';
    }
}

function getHumanChoice(){
    return prompt('Choose: Rock, Paper, Scissors');
}