let scorePlayer = 0;
let scoreComputer = 0;


const output = document.querySelector('#output');
const player = document.createElement('div');
const computer = document.createElement('div');
const result = document.createElement('div');

const Score = document.querySelector('#score');
const playerScore = document.createElement('div');
const computerScore = document.createElement('div');
playerScore.classList.add('playerS');
computerScore.classList.add('computerS');

player.classList.add('player');
computer.classList.add('computer');
result.classList.add('result');



const buttons = document.querySelectorAll('button');



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
    player.textContent = "\nUser Choice: " + playerSelection;
    computer.textContent = "Computer Choice: " + compterSelection;
    output.appendChild(player);
    output.appendChild(computer);

    //Draw
    if (playerSelection === "Rock" && compterSelection === "Rock" ||
        playerSelection === "Paper" && compterSelection === "Paper" ||
        playerSelection === "Scissors" && compterSelection === "Scissors") {
        return result.textContent = "\nThe game is tied";
    }

    //Win
    else if (playerSelection === "Rock" && compterSelection === "Scissors" ||
        playerSelection === "Paper" && compterSelection === "Rock" ||
        playerSelection === "Scissors" && compterSelection === "Paper") {
        scorePlayer++;
        return result.textContent = "\nYou win, " + playerSelection + " Beats " + compterSelection;
    }
    //Lose
    else if (playerSelection === "Rock" && compterSelection === "Paper" ||
        playerSelection === "Paper" && compterSelection === "Scissors" ||
        playerSelection === "Scissors" && compterSelection === "Rock") {
        scoreComputer++;
        return result.textContent = "\nYou Lose, " + compterSelection + " Beats " + playerSelection;
    }

}

function rock() {
    let playerSelection = "Rock";
    let compterSelection = getComputerChoice();
    playRound(playerSelection, compterSelection);
    output.appendChild(result);
    Score.textContent = "\nScores";
    playerScore.textContent = "User: " + scorePlayer;
    computerScore.textContent = "Computer: " + scoreComputer;
    Score.appendChild(playerScore);
    Score.appendChild(computerScore);
}

function paper() {

    let playerSelection = "Paper";
    let compterSelection = getComputerChoice();

    playRound(playerSelection, compterSelection);
    output.appendChild(result);
    Score.textContent = "\nScores";
    playerScore.textContent = "User: " + scorePlayer;
    computerScore.textContent = "Computer: " + scoreComputer;
    Score.appendChild(playerScore);
    Score.appendChild(computerScore);

}

function scissors() {
    let playerSelection = "Scissors";
    let compterSelection = getComputerChoice();
    playRound(playerSelection, compterSelection);
    output.appendChild(result);

    Score.textContent = "\nScores";
    playerScore.textContent = "User: " + scorePlayer;
    computerScore.textContent = "Computer: " + scoreComputer;
    Score.appendChild(playerScore);
    Score.appendChild(computerScore);

}

function gameOver(){
    console.log("Game Over")
    output.innerHTML = '<button class="start">New Game?</button>'
    buttons.forEach((button) => {
        button.addEventListener('click', () => {

            if (button.id === "start") {
              game();
            }
           
        });
    });
}


function game() {
  


        buttons.forEach((button) => {
            button.addEventListener('click', () => {


                if (button.id === "Rock") {
                    rock();
                }
                else if (button.id === "Paper") {
                    paper();
                }
                else if (button.id === "Scissors") {
                    scissors();
                }
            });
        });

       

    
    if (scorePlayer === 5) {
        console.log("\nYou have beat the computer, congrats!");
        gameOver();
    }
    else if (scoreComputer === 5){
     console.log("\nYou have been beaten by the computer, maybe you shold try your luck again");
     gameOver();
    }
   
}


game();


