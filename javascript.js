function getComputerChoice(){
    const options = ['Rock', 'Paper', 'Scissors'];
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
}

function playRound(playerSelection, compterSelection){
//Draw
if (playerSelection === "Rock" && compterSelection === "Rock" ||
    playerSelection === "Paper" && compterSelection === "Paper" ||
    playerSelection === "Scissors" && compterSelection === "Scissors")
return "The game is tied";

//Win
if (playerSelection === "Rock" && compterSelection === "Scissors" ||
    playerSelection === "Paper" && compterSelection === "Rock" ||
    playerSelection === "Scissors" && compterSelection === "Paper")
return "You win, " + playerSelection + " Beats " + compterSelection;

//Lose
if (playerSelection === "Rock" && compterSelection === "Paper" ||
    playerSelection === "Paper" && compterSelection === "Scissors" ||
    playerSelection === "Scissors" && compterSelection === "Rock")
return "You Lose, " + compterSelection + " Beats " + playerSelection;

}


let playerSelection = "Rock";
//getPlayerChoice().charAt(0).toUpperCase() + getPlayerChoice().slice(1);
let compterSelection = getComputerChoice();


console.log(playRound(playerSelection, compterSelection));



