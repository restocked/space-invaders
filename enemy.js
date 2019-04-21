'use strict';

function Enemy(canvas, x, y, img, increasedSpeed) {
  this.canvas = canvas
  this.ctx = this.canvas.getContext('2d');
  this.size = 40;
  this.x = x;
  this.y = y;
  this.speed = increasedSpeed;
  this.xDirection = 1
  this.yDirection = 1;
  this.axis = 'x';
  this.startingXPos = this.x;
  this.startingYPos = this.y;
  this.bullets = [];
  this.image = new Image();
  this.image.src = img;
}

Enemy.prototype.draw = function () {
  this.ctx.drawImage(this.image, this.x, this.y, this.size, this.size)
}

Enemy.prototype.update = function () {
  this.movement(this.axis)
}

Enemy.prototype.movement = function (movingAxis) {
  if (movingAxis === 'x') {
    this.x += this.xDirection * this.speed
    if (Math.abs(this.startingXPos - this.x) > 100) {
      this.xDirection *= -1
      this.axis = 'y'
      this.startingYPos = this.y
    }
  } else {
    this.y += this.yDirection * this.speed
    if (Math.abs(this.startingYPos - this.y) > 15) {
      this.axis = 'x'
      this.startingXPos = this.x
    }
  }
}
