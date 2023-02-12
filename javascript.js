function getComputerChoice (){
    const words = ['rock', 'paper', 'scissors'];
    let r = Math.floor(Math.random() * 3); // random number between from 0 to 2
    return words[r];
}


function playRound(playerSelection, computerSelection) {
    let result = '';

    if (playerSelection === 'rock' && computerSelection === 'rock') {
        result = 'Tie!';
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        result = 'You lose. Paper beats Rock!';
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        result = 'You win. Rock beats Scissors!';
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        result = 'You win. Paper beats Rock!';
    } else if (playerSelection === 'paper' && computerSelection === 'paper') {
        result = 'Tie!';
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        result = 'You lose. Scissors beats Paper.';
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        result = 'You lose. Rock beats Scissors';
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        result = 'You win. Scissors beats Paper.';
    } else if (playerSelection === 'scissors' && computerSelection === 'scissors') {
        result = 'Tie!';
    }

    return result;
}
   