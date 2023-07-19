/* following code defines a function */

/*
function getComputerChoice() {
    const moves = ["rock", "paper", "scissors"]
    return moves[Math.floor(Math.random() * moves.length)]
}

function singleRound (playerSelection, computerSelection) {
     playerSelection = prompt("Enter move")
     computerSelection = getComputerChoice()

    if (playerSelection === "rock" && computerSelection === "paper") {
        alert("You lose! Paper beats rock")
    }    

    
}

console.log(getComputerChoice)
console.log(singleRound) 
*/

/* function getComputerChoice() { // randomly return R, P or S for comps play
    const array = [ "rock", "paper", "scissors"]
    const randomMove = array[(Math.floor(Math.random() * (array.length)))];
    console.log(randomMove);// checking expected output
}

function playRound(playerSelection, computerSelection) { 
    playerSelection = prompt("Enter move")

    if (playerSelection === "rock" && computerSelection === "paper") {
        alert("You lose! Paper beats rock")
    }     

    
    computerSelection = getComputerChoice(); 
    console.log(playRound(prompt, computerSelection));
}
first function works fine, second keeps looping the prompt box, stuck on line 27*/


function getComputerChoice() { // randomly return R, P or S for comps play
    const array = [ "rock", "paper", "scissors"]
    return array[(Math.floor(Math.random() * (array.length)))];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = prompt("Enter move").toLowerCase();
    console.log(computerSelection); 

    if (playerSelection === "rock" && computerSelection === "paper") {
     return("You lose! Paper beats rock")
    }
        else if (computerSelection === "scissors") {
            return("You win! Rock beats scissors")
        }
            else if (computerSelection === "rock") {
                return("It is a tie!")
            }

    
    }    

const playerSelection = "rock";
let computerSelection = getComputerChoice(); 
console.log(playRound(playerSelection, computerSelection));















/*  
array in getComputerChoice is a parameter(placeholder), it contains nothing.
// parameter defines the function
// the argument is the info that is fed to the funciton


You aren't using the argument (value) 
of computerSelection you're passing to singleRound.
The function is also not using the parameter computerSelection. */

// I am expecting




/*
Need to call function getComputerChoice from computerSelection somehow..? 
Or find a way to relate them? 

Currently sends same alert regardless of player or computer selection 
and 'enter' exits the window */
