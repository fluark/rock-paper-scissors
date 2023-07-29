function getComputerChoice() { // randomly return R, P or S for comps play
    const array = ["rock", "paper", "scissors"]
    return array[(Math.floor(Math.random() * (array.length)))];
}

function playRound(playerSelection, computerSelection) {

    if (playerSelection === "paper") {
        if (computerSelection === "scissors") {
            return "You lose! Scissors beats paper";
        }
        if (computerSelection === "rock") {
            return "You win! Paper beats " + computerSelection;
        } else {
          return "It\'s a tie!";
        }
            
    }

    if (playerSelection === "rock") {
        if (computerSelection === "paper") {
            return "You lose! Paper beats rock"; 
        }
        if (computerSelection === "scissors") {
            return "You win! Rock beats " + computerSelection;
        } else {
          return "It\'s a tie!";
        }
    }

    if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
            return "You lose! Rock beats scissors";  
        }
        if (computerSelection === "paper") {
            return "You win! Scissors beats " + computerSelection;
        } else {
          return "It\'s a tie!";
        }
    }

}

let computerSelection = getComputerChoice();

function game(){
    newRound = prompt("Choose rock, paper, or scissors").toLowerCase()
    playRound(newRound, computerSelection)
    console.log(playRound(newRound, computerSelection));

    newRound = prompt("Choose rock, paper, or scissors").toLowerCase()
    playRound(newRound, computerSelection)
    console.log(playRound(newRound, computerSelection));

    newRound = prompt("Choose rock, paper, or scissors").toLowerCase()
    playRound(newRound, computerSelection)
    console.log(playRound(newRound, computerSelection));

    newRound = prompt("Choose rock, paper, or scissors").toLowerCase()
    playRound(newRound, computerSelection)
    console.log(playRound(newRound, computerSelection));

    newRound = prompt("Choose rock, paper, or scissors").toLowerCase()
    playRound(newRound, computerSelection)
    console.log(playRound(newRound, computerSelection));
}
game() 




