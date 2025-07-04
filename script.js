const player = document.getElementById('player');
const enemy = document.getElementById('enemy');
const scoreDisplay = document.getElementById('score');

let score = 0;
let playerY = window.innerHeight / 2;
let speed = 3;
let enemyX = window.innerWidth;

document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowUp') playerY -= 30;
  if (e.key === 'ArrowDown') playerY += 30;
});

function update() {
  player.style.top = playerY + 'px';
  enemyX -= speed;
  enemy.style.left = enemyX + 'px';

  const playerRect = player.getBoundingClientRect();
  const enemyRect = enemy.getBoundingClientRect();

  if (
    playerRect.left < enemyRect.right &&
    playerRect.right > enemyRect.left &&
    playerRect.top < enemyRect.bottom &&
    playerRect.bottom > enemyRect.top
  ) {
    alert('Энергос поймал тебя! Счёт: ' + score);
    location.reload();
  }

  if (enemyX < -50) {
    score += 1;
    scoreDisplay.textContent = score;
    enemyX = window.innerWidth;
    speed += 0.5;
  }

  requestAnimationFrame(update);
}

update();
