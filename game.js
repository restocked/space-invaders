'use strict';

function Game(canvas) {
  this.canvas = canvas;
  this.ctx = this.canvas.getContext('2d');
  this.spaceship = new Spaceship(canvas);
  this.enemies = [];
  this.spaceshipBullets = [];
  this.enemiesBullets = [];
  this.bulletSpawn = 0.98;
  this.gameOver = false;
  this.shootSound = new Audio('./src/space-shoot-final.wav')
  this.explosionSound = new Audio('./src/explosion.wav')
}

Game.prototype.startLoop = function () {

  this.createEnemies()

  const loop = () => {
    this.checkEnemies();

    this.clearCanvas();
    this.updateCanvas();
    this.drawCanvas();
    this.checkCollision();

    if (this.gameOver === false) {
      window.requestAnimationFrame(loop)
    } else {
      this.onGameOver()
    }
  }
  window.requestAnimationFrame(loop)
}

Game.prototype.clearCanvas = function () {
  this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
}

Game.prototype.updateCanvas = function () {
  document.querySelector('#actual-score').innerHTML = this.spaceship.score
  document.querySelector('#levels').innerHTML = `Level: ${this.spaceship.currentLevel}`
  this.spaceship.update()
  this.enemies.forEach((element) => {
    element.update()
  })
  this.spaceshipBullets.forEach((element, index) => {
    if (element.y < 0) {
      this.spaceshipBullets.splice(index, 1)
    }
    element.update()
  })
  this.enemiesBullets.forEach((element) => {
    element.update()
  })
}

Game.prototype.drawCanvas = function () {
  this.spaceship.draw()
  this.enemies.forEach((element) => {
    element.draw()
  })

  this.spaceshipBullets.forEach((element) => {
    element.draw()
  })


  if (Math.random() > this.bulletSpawn) {
    let randomPos = Math.floor(Math.random() * this.enemies.length)
    this.enemiesBullets.push(new Bullet(this.canvas, this.enemies[randomPos].x + this.enemies[randomPos].size / 2, this.enemies[randomPos].y + this.enemies[randomPos].size / 2, -1, 'red'))
  }
  this.enemiesBullets.forEach((element) => {
    element.draw()
  })
}

Game.prototype.checkCollision = function () {
  this.spaceshipBullets.forEach((bullet, indexBullet) => {
    this.enemies.forEach((enemy, indexEnemy) => {
      if (bullet.y < enemy.y + enemy.size && bullet.y > enemy.y) {
        if (bullet.x > enemy.x && bullet.x + bullet.width < enemy.x + enemy.size) {
          enemy.image.src = './img/explosion.png'
          this.explosionSound.currentTime = 0
          this.explosionSound.volume = 0.2
          this.explosionSound.play()
          setTimeout(() => {
            let currentIndex = this.enemies.indexOf(enemy)
            this.enemies.splice(currentIndex, 1)
          }, 50)
          this.spaceshipBullets.splice(indexBullet, 1)
          this.spaceship.score += 100
        }
      }
    })
  })

  this.enemies.forEach((element) => {
    if (element.y + element.size / 2 > this.spaceship.y) {
      this.gameOver = true
    }
  })

  this.enemiesBullets.forEach((bullet, index) => {
    if (bullet.y + bullet.height > this.canvas.height) {
      this.enemiesBullets.splice(index, 1)
    } else if (bullet.y + bullet.height > this.spaceship.y) {
      if (bullet.x > this.spaceship.x && bullet.x + bullet.width < this.spaceship.x + this.spaceship.width) {
        this.enemiesBullets.splice(index, 1)
        this.gameOver = this.spaceship.removeLife()
      }
    }
  })
}

Game.prototype.setGameOver = function (callaback) {
  this.onGameOver = callaback;
}

Game.prototype.createEnemies = function () {
  let enemiesNumber = Math.floor((this.canvas.width - 200) / 60)
  if (enemiesNumber % 2 !== 0) {
    enemiesNumber++
  }
  let images = ['./img/enemy-1-purple.png', './img/enemy-2-blue.png', './img/enemy-2-blue.png', './img/enemy-3-green.png', './img/enemy-3-green.png']
  for (var i = 0; i < 5; i++) {
    for (var j = 0; j < enemiesNumber; j++) {
      this.enemies.push(new Enemy(this.canvas, (j * 60) + 70, i * 40, images[i]))
    }
  }
}

Game.prototype.checkEnemies = function () {
  if (this.enemies.length === 0) {
    this.createEnemies()
    this.bulletSpawn -= 0.01
    this.spaceship.currentLevel++
  }
}