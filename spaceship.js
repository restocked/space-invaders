'use strict';

function Spaceship (canvas) {
    this.speed = 7; 
    this.direction = 0;
    this.size = 55;
    this.height = 70;
    this.canvas = canvas;
    this.ctx = this.canvas.getContext('2d');
    this.x = this.canvas.width/2;
    this.y = this.canvas.height-this.height;
}

Spaceship.prototype.draw = function () {
    /*
    const img = new Image()
    img.src = './img/spaceship.png'
    this.ctx.save()
    this.ctx.rect(this.x, this.y, this.size, this.height)
    this.ctx.clip()
    this.ctx.drawImage(this.image, this.x, this.y, this.size, this.height)
    this.ctx.restore()
    */
   this.ctx.fillStyle = 'orange'
   this.ctx.fillRect(this.x, this.y, this.size, this.height)
}

Spaceship.prototype.update = function () {
    if (this.x < 0) {
        this.x = 0
    } else if (this.x+this.size > this.canvas.width) {
        this.x = this.canvas.width - this.size
    }
    this.x = this.x + this.direction * this.speed
}

Spaceship.prototype.setDirection = function (newDir) {
    this.direction = newDir
}

Spaceship.prototype.setLives = function () {

}

Spaceship.prototype.checkCollision = function () {

}