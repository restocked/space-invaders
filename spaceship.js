'use strict';

function Spaceship(canvas) {
  this.canvas = canvas;
  this.ctx = this.canvas.getContext('2d');
  this.width = 40;
  this.height = 50;
  this.x = this.canvas.width / 2;
  this.y = this.canvas.height - this.height;
  this.speed = 7;
  this.direction = 0;
  this.lives = 3;
  this.score = 0;
  this.currentLevel = 0;
  this.bullets = [];
  this.image = new Image()
  this.image.src = './img/spaceship.png'
}

Spaceship.prototype.draw = function () {
  this.ctx.drawImage(this.image, this.x, this.y, this.width, this.height)
}

Spaceship.prototype.update = function () {
  if (this.x < 0) {
    this.x = 0
  } else if (this.x + this.width > this.canvas.width) {
    this.x = this.canvas.width - this.width
  }
  this.x += this.direction * this.speed
}

Spaceship.prototype.setDirection = function (newDir) {
  this.direction = newDir
}

Spaceship.prototype.removeLife = function () {
  this.lives--
  document.querySelector('.live-img').remove()
  return (this.lives === 0 ? true : false)
}

Spaceship.prototype.updateScore = function () {
  this.score += 100
}

Spaceship.prototype.levelUp = function () {
  this.currentLevel++
}