const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
const options = ['ROCK', 'PAPER', 'SCISSORS'];

rl.question("ROCK, PAPER or SCISSORS?\n", function(rawUserMove) {
    const computerMove = options[Math.floor(Math.random() * options.length)]
    userMove = rawUserMove.toUpperCase()
    if (userMove === computerMove) {
        console.log('Its a tie!');
    } else if (userMove === 'ROCK' && computerMove === "PAPER") {
        console.log('Computer chose PAPER! You LOSE');
    } else if (userMove === 'PAPER' && computerMove === "SCISSORS") {
        console.log('Computer chose SCISSORS! You LOSE');
    } else if (userMove === 'SCISSORS' && computerMove === "ROCK") {
        console.log('Computer chose ROCK! You LOSE');
    } else {
        console.log("You Won!");
    }
    console.log(userMove, computerMove);

        rl.close();
});