'use strict';

function Game (canvas) {
    this.spaceship = new Spaceship(canvas);
    this.enemies = [];
    this.bullets = [];
    this.gameOver = false;
    this.canvas = canvas;
    this.ctx = this.canvas.getContext('2d');
}

Game.prototype.startLoop =  function () {
    //this.bullets = new Bullet(this.canvas, this.spaceship)
    for (var i = 0; i<14; i++) {
        this.enemies.push(new Enemy(this.canvas, (i*50)+50))
    }

    const loop = () => {        
        this.clearCanvas();
        this.updateCanvas();
        this.drawCanvas();
        if (this.gameOver === false) {
            window.requestAnimationFrame(loop)
        }
    }

    window.requestAnimationFrame(loop)
}

Game.prototype.clearCanvas = function () {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
}

Game.prototype.updateCanvas = function () {
    this.spaceship.update()
    //this.enemies.update()
    this.bullets.forEach((element, index) => {
        if (element.y < 50) {
            this.bullets.splice(index, 1)
        }
        element.update()
    })
}

Game.prototype.drawCanvas = function () {
    this.spaceship.draw()
    this.enemies.forEach((element) => {
        element.draw()
    })
    this.bullets.forEach((element) => {
        element.draw()
    })
}
