'use strict';

function Bullet (canvas, x, y) {
    this.x = x;
    this.y = y;
    this.size = 5;
    this.height = 20;
    this.speed = 5;
    this.canvas = canvas
    this.ctx = this.canvas.getContext('2d');
}

Bullet.prototype.draw = function () {
    /*
    const image = new Image()
    image.src = './img/bullet.png'
    this.ctx.save()
    this.ctx.rect(this.x, this.y, this.size, this.height)
    this.ctx.clip()
    this.ctx.drawImage(image, this.x, this.y, this.size, this.height)
    this.ctx.restore()

    this.ctx.beginPath();
    this.ctx.fillStyle = 'blue';
    this.ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
    this.ctx.fill();

    */
   this.ctx.fillStyle = 'white'
   this.ctx.fillRect(this.x, this.y, this.size, this.height)
}

Bullet.prototype.update = function () {
    this.y = this.y - this.speed
}

Bullet.prototype.checkCollision = function () {

}
