const  'player ' = document.querySelector('.player');

document.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowLeft') {
    movePlayer(-10);
  } else if (event.key === 'ArrowRight') {
    movePlayer(10);
  }
});

function movePlayer(amount) {
  const playerRect = player.getBoundingClientRect();
  const gameContainerRect = document.querySelector('.game-container').getBoundingClientRect();
  
  if (playerRect.left + amount >= gameContainerRect.left && playerRect.right + amount <= gameContainerRect.right) {
    player.style.left = `${playerRect.left + amount}px`;
  }
}


const player = document.querySelector('.player');
const obstacle = document.querySelector('.obstacle');
let score = 0;

function startGame() {
  setInterval(() => {
    moveObstacle();
    detectCollision();
    updateScore();
  }, 1000);
}

function moveObstacle() {
  const obstacleRect = obstacle.getBoundingClientRect();
  obstacle.style.top = `${obstacleRect.top + 50}px`;

  if (obstacleRect.top >= window.innerHeight) {
    obstacle.style.top = '-50px'; // Reset position
  }
}

function detectCollision() {
  const playerRect = player.getBoundingClientRect();
  const obstacleRect = obstacle.getBoundingClientRect();

  if (
    playerRect.bottom >= obstacleRect.top &&
    playerRect.top <= obstacleRect.bottom &&
    playerRect.right >= obstacleRect.left &&
    playerRect.left <= obstacleRect.right
  ) {
    gameOver();
  }
}

function updateScore() {
  score++;
  document.getElementById('score').innerText = `Score: ${score}`;
}

function gameOver() {
  alert(`Game Over! Your score is ${score}`);
  // Additional game-over logic can be added here
}

startGame();


