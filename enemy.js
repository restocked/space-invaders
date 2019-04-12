'use strict';

function Enemy (canvas, x) {
    this.x = x;
    this.y = 30;
    this.size = 50;
    this.speed
    this.direction
    this.canvas = canvas
    this.ctx = this.canvas.getContext('2d');
}

Enemy.prototype.draw = function () {
    /*
    const img = new Image()
    img.src = './img/enemies.png'
    this.ctx.save()
    this.ctx.rect(this.x, this.y, this.size, this.size)
    this.ctx.clip()
    this.ctx.drawImage(this.img, this.x, this.y, this.size, this.size)
    this.ctx.restore()
    */

    this.ctx.fillStyle = 'orange'
    this.ctx.fillRect(this.x, this.y, this.size, this.size)
}

Enemy.prototype.update = function () {

}