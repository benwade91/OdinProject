
const options = ['ROCK', 'PAPER', 'SCISSORS'];

let userScore = 0
let gameTurn = 1

function turn() {
    let rawUserMove = prompt('Rock, paper or scissors?')
    const computerMove = options[Math.floor(Math.random() * options.length)]
    userMove = rawUserMove.toUpperCase()
    if(!options.includes(userMove)){return "Rock paper or scissors only!"}
    if (userMove === computerMove) {
        return('Its a tie!');
    } else if (userMove === 'ROCK' && computerMove === "PAPER") {
        return('Computer chose PAPER! You LOSE');
    } else if (userMove === 'PAPER' && computerMove === "SCISSORS") {
        return('Computer chose SCISSORS! You LOSE');
    } else if (userMove === 'SCISSORS' && computerMove === "ROCK") {
        return('Computer chose ROCK! You LOSE');
    } else {
        userScore += 1
        return("You Won!");
    }
}


for(let i = 0; i < 5; i++){
    let result = turn()
    alert(result);
}

alert(`Your final score is ${userScore}`)