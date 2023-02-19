const buttons = document.querySelectorAll('button');
const results = document.querySelector('#results');
const score = document.querySelector('#score');


function getComputerChoice () {
  const words = ['rock', 'paper', 'scissors'];
  let r = Math.floor(Math.random() * 3); // random number between from 0 to 2
  return words[r];
}

let userScore = 0;
let computerScore = 0;

score.textContent = 'You: ' + userScore + ' || Computer: ' + computerScore;

function playRound(playerSelection, computerSelection) {

    if (playerSelection === 'rock' && computerSelection === 'rock') {
        results.textContent = 'Tie! ';
        score.textContent = 'You: ' + userScore + ' || Computer: ' + computerScore;
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        computerScore++;
        results.textContent = 'You lose. Paper beats Rock! ';
        score.textContent = 'You: ' + userScore + ' || Computer: ' + computerScore;
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        userScore++;
        results.textContent = 'You win. Rock beats Scissors! ';
        score.textContent = 'You: ' + userScore + ' || Computer: ' + computerScore;
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        userScore++;
        results.textContent = 'You win. Paper beats Rock! ';
        score.textContent = 'You: ' + userScore + ' || Computer: ' + computerScore;
    } else if (playerSelection === 'paper' && computerSelection === 'paper') {
        results.textContent = 'Tie! ';
        score.textContent = 'You: ' + userScore + ' || Computer: ' + computerScore;
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        computerScore++;
        results.textContent = 'You lose. Scissors beats Paper! ';
        score.textContent = 'You: ' + userScore + ' || Computer: ' + computerScore;
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        computerScore++;
        results.textContent = 'You lose. Rock beats Scissors! ';
        score.textContent = 'You: ' + userScore + ' || Computer: ' + computerScore;
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        userScore++;
        results.textContent = 'You win. scissors beats paper! ';
        score.textContent = 'You: ' + userScore + ' || Computer: ' + computerScore;
    } else if (playerSelection === 'scissors' && computerSelection === 'scissors') {
        results.textContent = 'Tie! ';
        score.textContent = 'You: ' + userScore + ' || Computer: ' + computerScore;
    }

    if (userScore == 5 || computerScore == 5) {
        results.textContent = 'GAME OVER';
        buttons.forEach(button => {
            button.remove();
        })
    }

}


buttons.forEach(button => {
  button.addEventListener('click', function(){
    const playerSelection = button.id;
    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
  })
}) 
