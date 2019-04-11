'use strict';

function Bullet (canvas, x, y) {
    this.x = x;
    this.y = y;
    this.size = 10;
    this.speed = 5;
    this.canvas = canvas
    this.ctx = this.canvas.getContext('2d');
}

Bullet.prototype.draw = function () {
    this.ctx.beginPath();
    this.ctx.fillStyle = 'blue';
    this.ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
    this.ctx.fill();
}

Bullet.prototype.update = function () {
    this.y = this.y - this.speed
}

Bullet.prototype.checkCollision = function () {

}
