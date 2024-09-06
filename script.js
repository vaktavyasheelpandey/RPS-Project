let playerScore = 0;
let computerScore = 0;
const playerScoreElement = document.getElementById('player-score');
const computerScoreElement = document.getElementById('computer-score');
const resultElement = document.getElementById('result');
const choices = ['rock', 'paper', 'scissors'];

// Play a single round
function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return 'It\'s a tie!';
  }
  if (
    (playerSelection === 'rock' && computerSelection === 'scissors') ||
    (playerSelection === 'paper' && computerSelection === 'rock') ||
    (playerSelection === 'scissors' && computerSelection === 'paper')
  ) {
    playerScore++;
    return 'You win this round!';
  } else {
    computerScore++;
    return 'Computer wins this round!';
  }
}

// Get computer's random choice
function getComputerChoice() {
  return choices[Math.floor(Math.random() * 3)];
}

// Play 5 rounds and declare the winner
function playGame() {
  playerScore = 0;
  computerScore = 0;
  playerScoreElement.textContent = playerScore;
  computerScoreElement.textContent = computerScore;

  for (let i = 0; i < 5; i++) {
    const playerSelection = prompt('Choose rock, paper, or scissors:').toLowerCase();
    const computerSelection = getComputerChoice();
    const roundResult = playRound(playerSelection, computerSelection);
    alert(`Round ${i + 1}: ${roundResult}`);
    playerScoreElement.textContent = playerScore;
    computerScoreElement.textContent = computerScore;
  }

  if (playerScore > computerScore) {
    resultElement.textContent = 'Congratulations! You won the game!';
  } else if (computerScore > playerScore) {
    resultElement.textContent = 'Sorry! The computer won the game!';
  } else {
    resultElement.textContent = 'It\'s a tie overall!';
  }
}

// Button click events for the player choice
document.querySelectorAll('.choice').forEach(button => {
  button.addEventListener('click', function() {
    const playerSelection = this.id;
    const computerSelection = getComputerChoice();
    const roundResult = playRound(playerSelection, computerSelection);
    resultElement.textContent = roundResult;
    playerScoreElement.textContent = playerScore;
    computerScoreElement.textContent = computerScore;
  });
});

// Play 5 rounds when clicking the "Play 5 Rounds" button
document.getElementById('play-game').addEventListener('click', playGame);
