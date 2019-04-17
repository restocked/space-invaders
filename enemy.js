'use strict';

function Enemy(canvas, x, y, img) {
  this.canvas = canvas
  this.ctx = this.canvas.getContext('2d');
  this.size = 40;
  this.x = x;
  this.y = y;
  this.speed = 0.5;
  this.xDirection = 1
  this.yDirection = 1;
  this.image = new Image()
  this.image.src = img
  this.axis = 'y'
  this.startingXPos = this.x
  this.startingYPos = this.y
  this.switch = true
}

Enemy.prototype.draw = function () {
  this.ctx.drawImage(this.image, this.x, this.y, this.size, this.size)
}

Enemy.prototype.update = function () {
  //if (this.testCounter % 200 === 0) {
  //  this.switch === true ? ((this.switch = !this.switch), (this.xDirection *= -1)) : this.switch = true
    /*
    if (this.switch === true) {
        this.switch = !this.switch
        this.xDirection *= -1
    } else {
        this.switch = true
    }
  }
   */
  /*
  if (this.switch === true) { 
      this.x = this.x + this.xDirection * this.speed
  } else {
      this.y = this.y + this.yDirection * this.speed
  }
  */
  //this.switch === true ? this.x += this.xDirection * this.speed : this.y += this.yDirection * this.ySpeed
  //this.testCounter++
  this.movement(this.axis)
}



Enemy.prototype.movement = function (movingAxis) {
  if (movingAxis === 'x') {
    this.x += this.xDirection * this.speed 
    
    if (Math.abs(this.startingXPos - this.x) > 90) {
      this.switch = !this.switch
      this.xDirection *= -1
      this.axis = 'y'
      this.startingYPos = this.y
    }
  
  } else {
    
    this.y += this.yDirection * this.speed
    if (Math.abs(this.startingYPos - this.y) > 10) {
      //change direction
      this.axis = 'x'
      this.startingXPos = this.x
    }
  }
}
