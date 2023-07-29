function getComputerChoice() { // randomly return R, P or S for comps play
    const array = ["rock", "paper", "scissors"]
    return array[(Math.floor(Math.random() * (array.length)))];
}
userScore = 0
computerScore = 0

function playRound(playerSelection, computerSelection) {

    if (playerSelection === "paper") {
        if (computerSelection === "scissors") {
            computerScore++
            console.log("Computer: " + computerScore + " You: " + userScore + " You lose! Scissors beats paper")
           
        }
        if (computerSelection === "rock") {
            userScore++
            console.log("Computer: " + computerScore + " You: " + userScore + " You win! Paper beats " + computerSelection) 
            
        } else {
          return "It\'s a tie!"
        }
             
    }

    if (playerSelection === "rock") {
        if (computerSelection === "paper") {
            computerScore++
            console.log("Computer: " + computerScore + " You: " + userScore + " You lose! Paper beats rock") 
        }
        if (computerSelection === "scissors") {
            userScore++
            console.log("Computer: " + computerScore + " You: " + userScore +  " You win! Rock beats " + computerSelection)
        } else {
          return "It\'s a tie!"
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


function game(){ // plays round 5 times when invoked
    newRound = prompt("Choose rock, paper, or scissors").toLowerCase() // assigns the variable newRound to the return value of playRound by prompting player to begin round
    playRound(newRound, computerSelection) // calling playRound with the value the user types and the computerSelection variable
   // display the results of playRound with string

    newRound = prompt("Choose rock, paper, or scissors").toLowerCase()
    playRound(newRound, computerSelection)
   
   

    newRound = prompt("Choose rock, paper, or scissors").toLowerCase()
    playRound(newRound, computerSelection)
   
    

    newRound = prompt("Choose rock, paper, or scissors").toLowerCase()
    playRound(newRound, computerSelection)
 
    

    newRound = prompt("Choose rock, paper, or scissors").toLowerCase()
    playRound(newRound, computerSelection)
   
   
}
game()
