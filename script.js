let playerChoice;
let computerChoice = "";
let pTally = 0;
let cTally = 0;
const buttons = document.querySelectorAll('button');
const scoreboard = document.querySelector('#scoreboard');
const pResult = document.createElement('p', 'id="result');
const pWinner = document.createElement('p', 'id="winner');

function computerPlay() {
    // pick a random number between 1 and 3
    let num = Math.floor(Math.random() * 3 + 1);
    // now transpose the number to a weapon
    switch (num) {
        case 1: computerChoice = "rock" 
        break;
        case 2: computerChoice = "paper" 
        break;
        case 3: computerChoice = "scissors" 
        break;
    }
    return computerChoice;
};

// function playerSelection() {
//     let playerChoice = prompt("Enter your choice of paper, rock, or scissors");
//     playerChoice = playerChoice.toLowerCase();
//     return playerChoice;
// };

function playRound(a, b) {
    if (a === b) {
    result = "draw"
    //decide on who wins
    } else if (a === "rock") {
        (b === "scissors") ? result = "player" : result = "computer";
    } else if (a === "paper") {
        (b === "rock") ? result = "player" : result = "computer";
    } else {
        (b === "paper") ? result = "player" : result = "computer";
    }
    return result;
}

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playerChoice = button.id;
        computerPlay();
        playRound(playerChoice, computerChoice);
        // try to get all of the below in one or more separate functions
        (result === "player") ? ++pTally : ++cTally;
        pResult.textContent = "The current score: \n Player: " + pTally + 
            "\n Computer: " + cTally;
        scoreboard.appendChild(pResult);
        if (pTally === 5) {
            pWinner.textCont = "You have won the game!";
            scoreboard.appendChild(pWinner);
        } else if (cTally === 5) {
            pWinner.textCont = "The computer has won the game!";
            scoreboard.appendChild(pWinner);
        }
    })
})


