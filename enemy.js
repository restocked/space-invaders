'use strict';

function Enemy (canvas, x) {
    this.x = x;
    this.y = 30;
    this.size = 30;
    this.speed
    this.direction
    this.canvas = canvas
    this.ctx = this.canvas.getContext('2d');
}

Enemy.prototype.draw = function () {
    this.ctx.fillStyle = 'orange'
    this.ctx.fillRect(this.x, this.y, this.size, this.size)

}

Enemy.prototype.update = function () {

}