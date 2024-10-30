let playerScore = 0;
let computerScore = 0;
let roundNum = 0;
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const results = document.querySelector("#results");
const score = document.querySelector("#score");
const round = document.querySelector("#round")

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

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


//plays one game of rock paper scissors
function playGame(humanSel) {
    const computerSelection = getComputerChoice();
    
    if (humanSel === computerSelection) {
        results.innerHTML = "Draw!";
        
    } else {
        if (humanSel === "rock") {
            if (computerSelection === "paper") {
                computerScore++;
                
                results.innerHTML = "You lost! paper beats rock!";
            }
            if (computerSelection === "scissors") {
                playerScore++;
                results.innerHTML = "You won! rock beats scissors!";
            }

        }

        if (humanSel === "paper") {
            if (computerSelection === "scissors") {
                computerScore++;
                results.innerHTML = "You lost! scissors beats paper!";
            }
            if (computerSelection === "rock") {
                playerScore++;
                results.innerHTML = "You won! paper beats rock!";
            }

        }

        if (humanSel === "scissors") {
            if (computerSelection === "rock") {
                computerScore++;
                results.innerHTML = "You lost! rock beats scissors!";
            }
            if (computerSelection === "paper") {
                playerScore++;
                results.innerHTML = "You won! scissors beats paper!";
            }

        }
    }
    roundNum++;
}

function calculateScore() {
    if (playerScore > computerScore) {
        return "Won";
    } else {
        return "Lost";
    }
}

function showPopup() {
    const popup = document.querySelector("#popup");
    const popupMessage = document.querySelector("#popupMessage");
    const result = calculateScore();

    popupMessage.innerHTML = "Game over! You " + result + "!";

    popup.style.display = "flex";
}

function updateScores() {
    score.innerHTML = "Score: " + playerScore;
    round.innerHTML = "Round: " + roundNum;

    if (roundNum === 5) {
        showPopup();
        playerScore -= playerScore;
        roundNum -= roundNum;

        score.innerHTML = "Score: " + playerScore;
        round.innerHTML = "Round: " + roundNum;
        results.innerHTML = "Press a button to start!"
    }

}



rock.addEventListener("click", () => {
    playGame("rock");
    updateScores();    
});

paper.addEventListener("click", () => {
    playGame("paper");
    updateScores();
});

scissors.addEventListener("click", () => {
    playGame("scissors");
    updateScores();
});










