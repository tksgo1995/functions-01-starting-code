const startGameBtn = document.getElementById('start-game-btn');

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const DEFAULT_USER_CHOICE = ROCK;
const RESULT_DRAW = 'DRAW';
const RESULT_PLAYER_WINS = 'PLAYER WINS!';
const RESULT_COMPUTER_WINS = 'COMPUTER WINS!';

let gameIsRunning = false;

const getPlayerChoice = () => {
    const selection = prompt(`${ROCK}, ${PAPER}, ${SCISSORS}?`, '').toUpperCase();
    if(
        selection !== ROCK && 
        selection !== PAPER && 
        selection !== SCISSORS
    ) {
        alert('Invalid choice! Please select Rock, Paper, or Scissors.');
        return;
    }

    return selection;
}

const start = () => {
    if(gameIsRunning) {
        return;
    }
    gameIsRunning = true;
    
    console.log('Game is starting...');
    const playerSelection = getPlayerChoice();

    if(playerSelection === undefined) {
        gameIsRunning = false;
        return;
    }

    const computerSelection = getComputerChoice();
    const winner = getWinner(computerSelection, playerSelection);
    
    if(winner === RESULT_DRAW) {
        alert(`It's a draw! You both chose ${playerSelection}.`);
    } else if(winner === RESULT_PLAYER_WINS) {
        alert(`You win! ${playerSelection} beats ${computerSelection}.`);
    } else {
        alert(`You lose! ${computerSelection} beats ${playerSelection}.`);
    }

    gameIsRunning = false;
    alert(`The game has ended. ${winner}`);
}

const getComputerChoice = () => {
    const randomValue = Math.random();
    if(randomValue < 0.34) {
        return ROCK;
    } else if(randomValue < 0.67) {
        return PAPER;
    } else {
        return SCISSORS;
    }
}

const getWinner = (cChoice, pChoice = DEFAULT_USER_CHOICE) => {
    if(cChoice === pChoice){
        return RESULT_DRAW;
    } else if(
        cChoice === ROCK && pChoice === SCISSORS ||
        cChoice === SCISSORS && pChoice === PAPER ||
        cChoice === PAPER && pChoice === ROCK
    ){
        return RESULT_COMPUTER_WINS;
    } else {
        return RESULT_PLAYER_WINS;
    }
}

startGameBtn.addEventListener('click', start);