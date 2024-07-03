
let roundCounter = 1;
let playerScore = 0;
let computerScore = 0;

document.getElementById('rock').disabled = true;
document.getElementById('paper').disabled = true;
document.getElementById('scissors').disabled = true;

let start = document.querySelector('.start-button');
document.querySelector('.play-again-button').style.display = 'none';

start.addEventListener('click', function () {
    document.getElementById('game-choices').style.display = 'flex';
    document.getElementById('rock').disabled = false;
    document.getElementById('paper').disabled = false;
    document.getElementById('scissors').disabled = false;
    document.querySelector('.start-button').style.display = 'none';
    document.querySelector('.number-of-rounds').style.display = 'none';
})
function chooseOption(option) {
    const roundsInput = document.getElementById("rounds");
    const rounds = parseInt(roundsInput.value);
    document.getElementById("gameResult").innerHTML = "";

    const playerChoice = option;
    const computerChoice = generateComputerChoice();

    let roundResult;
    if (playerChoice === computerChoice) {
        roundResult = "Draw!";
    } else if (
        (playerChoice === 'Rock' && computerChoice === 'Scissors') ||
        (playerChoice === 'Scissors' && computerChoice === 'Paper') ||
        (playerChoice === 'Paper' && computerChoice === 'Rock')
    ) {
        roundResult = "You +1";
        playerScore++;
    } else {
        roundResult = "Computer +1";
        computerScore++;
    }

    let resultOfRound = document.getElementById("gameResult");
    resultOfRound.style.fontSize = '24px';

    resultOfRound.innerHTML +=
        `<p>Round ${roundCounter}: (${playerChoice} 🆚 ${computerChoice}) ${roundResult}<br>
         (Player: ${playerScore} - Computer: ${computerScore})</p>`;

    roundCounter++;
    console.log(rounds + ', '  + roundCounter);

    if (roundCounter > rounds) {
        let gameResult;
        if (playerScore > computerScore) {
            gameResult = "You win the game!";
        } else if (playerScore < computerScore) {
            gameResult = "Computer wins the game!";
        } else {
            gameResult = "It's a tie!";
        }
        document.getElementById("gameResult").innerHTML +=
            `<h2>${gameResult}</h2>`;
        document.getElementById('game-choices').style.display = 'none';
        document.querySelector('.play-again-button').style.display = 'flex';
    }
}

function generateComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

const playAgain = document.querySelector('.play-again-button');
playAgain.addEventListener('click', function(){
    window.location.reload();
    return false;
});
