'use strict';

function Bullet (canvas, x, y, dir) {
    this.canvas = canvas
    this.ctx = this.canvas.getContext('2d');
    this.width = 4;
    this.height = 20;
    this.x = x - this.width/2;
    this.y = y;
    this.speed = 5;
    this.direction = dir
}

Bullet.prototype.draw = function () {
   this.ctx.fillStyle = 'white'
   this.ctx.fillRect(this.x, this.y, this.width, this.height)
}

Bullet.prototype.update = function () {
    this.y = this.y - this.speed * this.direction
}

Bullet.prototype.checkCollision = function () {

}
