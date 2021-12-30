<script>

function computerPlay() {
    // pick a random number between 1 and 3
    let num = Math.floor(Math.random() * 3 + 1);
    let computerChoice;
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

function playerSelection() {
    let playerChoice = prompt("Enter your choice of paper, rock, or scissors");
    playerChoice = playerChoice.toLowerCase();
    return playerChoice;
};

function playRound(a, b) {
    a = playerSelection();
    b = computerPlay();
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
  
    // switch (result) {
    //     case "draw" : message = "It's a tie, both you and the computer picked " +
    //      a
    //     break;
    //     case "player" : message = "You win! Your " + a + 
    //     " beats " + b + "."
    //     break;
    //     case "computer" : message = "You lose! The computer's " + b + 
    //     " beats your " + a + "."
    //     break;
    // }

    return result;
}

function game() {
    let pTally = 0;
    let cTally = 0;
    let drawTally = 0;
    let message;
    for (i = 0; i < 5; i++) {
        playRound();
        (result === "draw") ? ++drawTally : (result === "player") ?
            ++pTally : ++cTally ;
        console.log(result);
    }
    (drawTally >= pTally && drawTally >= cTally) ?
        message = "It's a draw!" :
        (pTally > cTally) ? message = "You win!" :
        message = "You lose!";
    console.log(message);
}

</script>