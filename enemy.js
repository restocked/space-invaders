'use strict';

function Enemy (canvas, x, y) {
    this.x = x;
    this.y = y;
    this.size = 40;
    this.speed = 0.5;
    this.xDirection = 1
    this.direction = 1;
    this.canvas = canvas
    this.ctx = this.canvas.getContext('2d');
    this.image = new Image()
    this.image.src = './img/enemies.png'
    this.testCounter = 0
}

Enemy.prototype.draw = function () {
    this.ctx.drawImage(this.image, this.x, this.y, this.size, this.size)
    //this.ctx.fillStyle = 'orange'
    //this.ctx.fillRect(this.x, this.y, this.size, this.size)
}

Enemy.prototype.update = function () {    
    if (this.testCounter % 100 === 0) {
        if (this.switch === true) {
            this.switch = !this.switch
            this.xDirection *= -1
        } else {
            this.switch = true
        }
    }
    if (this.switch === true) { 
        this.x = this.x + this.xDirection * this.speed
    } else {
        this.y = this.y + this.direction * this.speed
    }
    this.testCounter++
}