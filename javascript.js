function getComputerChoice (){
    const words = ['Rock', 'Paper', 'Scissors'];
    let r = Math.floor(Math.random() * 3); // random number between from 0 to 2
    return words[r];
}
