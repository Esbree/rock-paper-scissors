let userScore = 0;
let computerScore = 0;

function getComputerChoice () {
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
        computerScore++;
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        result = 'You win. Rock beats Scissors!';
        userScore++;
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        result = 'You win. Paper beats Rock!';
        userScore++;
    } else if (playerSelection === 'paper' && computerSelection === 'paper') {
        result = 'Tie!';
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        result = 'You lose. Scissors beats Paper.';
        computerScore++;
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        result = 'You lose. Rock beats Scissors';
        computerScore++;
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        result = 'You win. Scissors beats Paper.';
        userScore++;
    } else if (playerSelection === 'scissors' && computerSelection === 'scissors') {
        result = 'Tie!';
    }

    return result;
}


function game() {
    // play 5 rounds
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt('Choose your weapon!: ').toLowerCase();
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
        console.log('Your Score: ' + userScore + '  // Computer Score: ' + computerScore);
     }

    // determine the winner
     if (userScore > computerScore) {
        console.log('YOU WIN!!!');
     } else if (userScore === computerScore) {
        console.log('TIE');
     }else {
        console.log('YOU LOSE');
     }
}

game();
