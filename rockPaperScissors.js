function getComputerChoice() { // randomly return R, P or S for comps play
    const array = ["rock", "paper", "scissors"]
    return array[(Math.floor(Math.random() * (array.length)))];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = prompt("Enter move").toLowerCase();
    console.log(computerSelection);

    if (playerSelection === "paper") {
        if (computerSelection === "scissors") {
            return ("You lose! Scissors beats paper")
        }
        if (computerSelection === "rock")
            return ("You win! Paper beats " + computerSelection)

        else (playerSelection === computerSelection);
        return ("It\'s a tie!")
    }

    if (playerSelection === "rock") {
        if (computerSelection === "paper") {
            return ("You lose! Paper beats rock")
        }
        if (computerSelection === "scissors")
            return ("You win! Rock beats " + computerSelection)

        else (playerSelection === computerSelection);
        return ("It\'s a tie!")
    }

    if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
            return ("You lose! Rock beats scissors")
        }
        if (computerSelection === "paper")
            return ("You win! Scissors beats " + computerSelection)

        else (playerSelection === computerSelection);
        return ("It\'s a tie!")
    }

}
let playerSelection = "paper"; //string has no effect on move
let computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
