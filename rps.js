function getComputerChoice() {
    let randomNumber = Math.random();
    let randomChoice = null;

    if (randomNumber < 1/3) {
        randomChoice = "rock";
    } else if (randomNumber < 2/3) {
        randomChoice = "paper";
    } else {
        randomChoice = "scissors"
    }

    return randomChoice;
}

function getHumanChoice() {
    choice = prompt("Please, input your choice of: rock, paper or scissors.");
    return choice.trim().toLowerCase();
}

function playGame() {
    let computerScore = 0;
    let humanScore = 0;

    function playRound(computerChoice, humanChoice) {
        console.log(`Computer chose "${computerChoice}".`);
        console.log(`Human chose "${humanChoice}".`);

        switch (computerChoice) {
            case "rock":
                if (humanChoice === "rock") {
                    console.log("Tie! Both players chose rock.");
                }
                else if (humanChoice === "paper") {
                    console.log("You win! Paper beats rock!");
                    humanScore++;
                }
                else {
                    console.log("You lose! Rock beats scissors!");
                    computerScore++;
                }
                break;
            case "paper":
                if (humanChoice === "rock") {
                    console.log("You lose! Paper beats rock!");
                    computerScore++;
                }
                else if (humanChoice === "paper") {
                    console.log("Tie! Both players chose rock.");
                }
                else {
                    console.log("You win! Scissors beats paper!");
                    humanScore++;
                }
                break;
            case "scissors":
                if (humanChoice === "rock") {
                    console.log("You win! Rock beats scissors!");
                    humanScore++;
                }
                else if (humanChoice === "paper") {
                    console.log("You lose! Scissors beats paper!");
                    computerScore++;
                }
                else {
                    console.log("Tie! Both players chose scissors.");
                }
                break;
        }
    }

    let i = 1;
    while (i <= 5) {
        console.log(`Playing round #${i}.`)
        playRound(getComputerChoice(), getHumanChoice());
        i++;
    }

    console.log(`Final computer score: ${computerScore}`);
    console.log(`Final human score: ${humanScore}`);
}