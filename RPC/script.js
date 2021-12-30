const options = ['rock', 'paper', 'scissors'];

let userScore = 0
let gameTurn = 5

function turn(userMove) {
    const computerMove = options[Math.floor(Math.random() * options.length)]
    let message = ''
    if (userMove === computerMove) {
        message = 'Its a tie!';
    } else if (userMove === 'rock' && computerMove === "paper") {
        message = 'Computer chose PAPER! You LOSE';
    } else if (userMove === 'paper' && computerMove === "scissors") {
        message = 'Computer chose SCISSORS! You LOSE';
    } else if (userMove === 'scissors' && computerMove === "rock") {
        message = 'Computer chose ROCK! You LOSE';
    } else {
        userScore += 1
        message = "You Won!";
    }
    gameTurn--;
    updateScore(message, userScore)
}


const updateScore = (message, score) => {
    document.querySelector('.scoreBoard').innerHTML = `<h1>Score: ${score}</h1><h1>Turns: ${gameTurn}</h1>`
    document.querySelector('.gameMessage').innerHTML = `<h4>${message}</h4>`
    if (gameTurn === 0) {
        gameSelections.forEach((button) => {
            button.classList.add('none')
        });
        document.querySelector('.scoreBoard').innerHTML = `<h1>Final Score: ${score}</h1>`
    }
}

const startGame = () => {
    startBtn.classList.add('none')
    gameSelections.forEach((button) => {
        button.classList.remove('none')
    })
    document.querySelector('.scoreBoard').classList.remove('none')
}

const startBtn = document.querySelector('#start');
const gameSelections = document.querySelectorAll('.gameImg');

gameSelections.forEach((button) => {
    button.addEventListener('click', () => {
        turn(button.id);
    });
});

startBtn.addEventListener('click', () => {
    startGame()
})