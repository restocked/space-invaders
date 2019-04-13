'use strict';

function Bullet (canvas, x, y) {
    this.x = x;
    this.y = y;
    this.size = 4;
    this.height = 20;
    this.speed = 5;
    this.canvas = canvas
    this.ctx = this.canvas.getContext('2d');
}

Bullet.prototype.draw = function () {
   this.ctx.fillStyle = 'white'
   this.ctx.fillRect(this.x, this.y, this.size, this.height)
}

Bullet.prototype.update = function () {
    this.y = this.y - this.speed
}

Bullet.prototype.checkCollision = function () {

}
