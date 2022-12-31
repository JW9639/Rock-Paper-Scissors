let scorePlayer = 0;
let scoreComputer = 0;




function getPlayerChoice() {
    let choice = prompt();
    return choice.charAt(0).toUpperCase() + choice.slice(1);


}


function getComputerChoice() {
    const options = ['Rock', 'Paper', 'Scissors'];
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
}

function playRound(playerSelection, compterSelection) {
    console.log("\nUser Choice: " + playerSelection);
    console.log("Computer Choice: " + compterSelection);


    //Draw
    if (playerSelection === "Rock" && compterSelection === "Rock" ||
        playerSelection === "Paper" && compterSelection === "Paper" ||
        playerSelection === "Scissors" && compterSelection === "Scissors") {
        return "\nThe game is tied";
    }

    //Win
    else if (playerSelection === "Rock" && compterSelection === "Scissors" ||
        playerSelection === "Paper" && compterSelection === "Rock" ||
        playerSelection === "Scissors" && compterSelection === "Paper") {
        scorePlayer++;
        return "\nYou win, " + playerSelection + " Beats " + compterSelection;
    }
    //Lose
    else if (playerSelection === "Rock" && compterSelection === "Paper" ||
        playerSelection === "Paper" && compterSelection === "Scissors" ||
        playerSelection === "Scissors" && compterSelection === "Rock") {
        scoreComputer++;
        return "\nYou Lose, " + compterSelection + " Beats " + playerSelection;
    }
}

function rock(){
    let playerSelection = "Rock";
    let compterSelection = getComputerChoice();
    playRound(playerSelection,compterSelection);
}

function paper(){
    let playerSelection = "Paper";
    let compterSelection = getComputerChoice();
    playRound(playerSelection,compterSelection);
}

function scissors(){
    let playerSelection = "Scissors";
    let compterSelection = getComputerChoice();
    playRound(playerSelection,compterSelection);
}

/*
function game() {
    for (i = 0; i < 5; i++) {
        console.log("\nRound " + (i + 1))
        let playerSelection = getPlayerChoice();
        let compterSelection = getComputerChoice();
        console.log(playRound(playerSelection, compterSelection));
        console.log("\nScores");
        console.log("User: " + scorePlayer);
        console.log("Computer: " + scoreComputer);
    }
    if (scorePlayer > scoreComputer) {
        console.log("\nYou have beat the computer, congrats!");
    }
    else console.log("\nYou have been beaten by the computer, maybe you shold try your luck again");

}

game();

*/


