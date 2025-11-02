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
