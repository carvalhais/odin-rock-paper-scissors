const MAX_ROUNDS_PER_GAME = 5;

let humanScore = 0;
let computerScore = 0;
let roundsPlayed = 0;

function getComputerChoice() {
    const options = ["rock", "paper", "scissors"];
    return options[Math.floor(Math.random() * options.length)];
}

function displayRound(message) {
    const roundsList = document.querySelector("#rounds-list");
    newItem = document.createElement("li");
    newItem.textContent = message;
    roundsList.appendChild(newItem);
}

function updateScore() {
    const humanPoints = document.querySelector("#player-points");
    const computerPoints = document.querySelector("#computer-points");
    humanPoints.textContent = humanScore;
    computerPoints.textContent = computerScore;
}

function playRound(humanChoice, computerChoice) {
    let message = `Human choice "${humanChoice}"; `;
    message += `Computer choice "${computerChoice}"; `;

    switch (computerChoice) {
        case "rock":
            if (humanChoice === "rock") {
                message += "Result: Tie!";
            }
            else if (humanChoice === "paper") {
                message += "Result: You win!";
                humanScore++;
            }
            else {
                message += "Result: Computer wins!";
                computerScore++;
            }
            break;
        case "paper":
            if (humanChoice === "rock") {
                message += "Result: Computer wins!";
                computerScore++;
            }
            else if (humanChoice === "paper") {
                message += "Result: Tie!";
            }
            else {
                message += "Result: You win!";
                humanScore++;
            }
            break;
        case "scissors":
            if (humanChoice === "rock") {
                message += "Result: You win!";
                humanScore++;
            }
            else if (humanChoice === "paper") {
                message += "Result: Computer wins!";
                computerScore++;
            }
            else {
                message += "Result: Tie!";
            }
            break;
    }
    return message;
}

function humanChoiceHandler(choice) {
    if (roundsPlayed < MAX_ROUNDS_PER_GAME) {
        roundsPlayed++;
        const message = playRound(choice, getComputerChoice());
        displayRound(message);
        updateScore();
    }
    if (roundsPlayed == MAX_ROUNDS_PER_GAME) {
        const restartButton = document.querySelector("#restart-button");
        restartButton.classList.remove("hide");
    }
};

function restartHandler() {
    roundsPlayed = 0;

    humanScore = 0;
    computerScore = 0;
    updateScore();

    const roundsList = document.querySelector("#rounds-list");
    // for (const item of roundsList.children) {
    //     item.remove();
    // }
    while (roundsList.firstChild) {
        roundsList.removeChild(roundsList.lastChild);
    }

    const restartButton = document.querySelector("#restart-button");
    restartButton.classList.add("hide");
}

const rockButton = document.querySelector("#rock-button");
rockButton.addEventListener("click", () => {
    humanChoiceHandler("rock");
});

const paperButton = document.querySelector("#paper-button");
paperButton.addEventListener("click", () => {
    humanChoiceHandler("paper");
});

const scissorsButton = document.querySelector("#scissors-button");
scissorsButton.addEventListener("click", () => {
    humanChoiceHandler("scissors");
});

const restartButton = document.querySelector("#restart-button");
restartButton.addEventListener("click", restartHandler);