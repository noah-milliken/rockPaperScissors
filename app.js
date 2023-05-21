
function randomNumber() {
    return Math.floor(Math.random() * 3)
}

function computerPlay(computerChoice) {
    let choiceNum = randomNumber()
    if (choiceNum == 0) {
        computerChoice.Value = 'rock'
    }
    else if (choiceNum == 1) {
        computerChoice.Value = 'paper'
    }
    else if (choiceNum == 2) {
        computerChoice.Value = 'scissors'
    }
    return choiceNum
}

function playRound(playerInt, computerInt, playerChoice, computerChoice) {
    const winArray = [
        [0, 1, 2],
        [2, 0, 1],
        [1, 2, 0]]

    if (winArray[playerInt][computerInt] === 0) {
        console.log(`You tied! ${playerChoice} and ${computerChoice.Value} are the same.`)
    } else if (winArray[playerInt][computerInt] === 1) {
        console.log(`You win! ${playerChoice} beats ${computerChoice.Value}`)
    } else if (winArray[playerInt][computerInt] === 2) {
        console.log(`You win! ${playerChoice} beats ${computerChoice.Value}`)
    }
}

function game() {
    let computerChoice = { Value: '' }
    let computerInt
    let playerChoice
    let playerInt
    for (let i = 0; i < 5; i++) {

        playerChoice = prompt("rock, paper, or scissors?").toLocaleLowerCase()

        if (playerChoice === 'rock') {
            playerInt = 0
        } else if (playerChoice === 'paper') {
            playerInt = 1
        } else if (playerChoice === 'scissors') {
            playerInt = 2
        }
        computerInt = computerPlay(computerChoice)
        playRound(playerInt, computerInt, playerChoice, computerChoice)
    }


}
game()
