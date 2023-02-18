const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        const playerSelection = button.id;
        const computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);
    });
});
