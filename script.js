let playerScore = 0;
let computerScore = 0;

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
//Gets computer and human choices
function getComputerChoice() {
    const number = getRandomInt(3);

    switch (number) {
        case 0: {
            return "rock";
        }
        case 1: {
            return "paper";
        }
        case 2: {
            return "scissors";
        }
    }
}



function getHumanChoice() {
    const choice = prompt("What are you choosing? (rock, paper or scissors)")
    choice.toLowerCase();

    if (choice != "rock" && choice != "paper" && choice != "scissors") {
        return false;
    } else {
        return choice;
    }
}
//plays one game of rock paper scissors
function playGame() {

    const humanSel = getHumanChoice();
    const computerSel = getComputerChoice();
    //console.log(humanSelection);
    //console.log(computerSelection);
    function playRound(humanSelection, computerSelection) {
        if (humanSelection === computerSelection) {
            alert("Draw! You and the computer both chose: " + computerSelection);
        } else {
            if (humanSelection === "rock") {
                if (computerSelection === "paper") {
                    computerScore++;
                    
                    alert("You lost! paper beats rock! The computer chose " + computerSelection);
                }
                if (computerSelection === "scissors") {
                    playerScore++;
                    alert("You won! rock beats scissors! The computer chose " + computerSelection);
                }

            }

            if (humanSelection === "paper") {
                if (computerSelection === "scissors") {
                    computerScore++;
                    alert("You lost! scissors beats paper! The computer chose " + computerSelection);
                }
                if (computerSelection === "rock") {
                    playerScore++;
                    alert("You won! paper beats rock! The computer chose " + computerSelection);
                }

            }

            if (humanSelection === "scissors") {
                if (computerSelection === "rock") {
                    computerScore++;
                    alert("You lost! rock beats scissors! The computer chose " + computerSelection);
                }
                if (computerSelection === "paper") {
                    playerScore++;
                    alert("You won! scissors beats paper! The computer chose " + computerSelection);
                }

            }
            
        
            
        }
    }

    playRound(humanSel, computerSel);


}

for (let i = 0; i < 5; i++) {
    playGame();
}

if (playerScore > computerScore) {
    alert("You won the game with a score of " + playerScore);
} else {
    alert("You lost the game with a score of " + playerScore);
}



