'use strict';

function Game (canvas) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext('2d');
    this.spaceship = new Spaceship(canvas);
    this.enemies = [];
    this.spaceshipBullets = [];
    this.enemiesBullets = []
    this.gameOver = false;
}

Game.prototype.startLoop =  function () {
    // to do better
    let enemiesNumber = Math.floor((this.canvas.width-200)/60)
    if (enemiesNumber % 2 !== 0) {
        enemiesNumber++
    }
    for (var z = 0; z < 4; z++) {
        for (var i = 0; i < enemiesNumber; i++) {
            this.enemies.push(new Enemy(this.canvas, (i*60)+75, z*50))
        }
    }

    const loop = () => {        
        this.clearCanvas();
        this.updateCanvas();
        this.drawCanvas();
        this.checkCollision();

        if (this.gameOver === false) {
            window.requestAnimationFrame(loop)
        } else {
            this.onGameOver()
        }
    }
    window.requestAnimationFrame(loop)
}

Game.prototype.clearCanvas = function () {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
}

Game.prototype.updateCanvas = function () {
    document.querySelector('#actual-score').innerHTML = this.spaceship.score
    this.spaceship.update()
    this.enemies.forEach((element) => {
        element.update()
    })
    this.spaceshipBullets.forEach((element, index) => {
        if (element.y < 0) {
            this.spaceshipBullets.splice(index, 1)
        }
        element.update()
    })
    this.enemiesBullets.forEach((element) => {
        element.update()
    })
}

Game.prototype.drawCanvas = function () {
    this.spaceship.draw()
    this.enemies.forEach((element) => {
        element.draw()
    })

    this.spaceshipBullets.forEach((element) => {
        element.draw()
    })
    

    if (Math.random() > 0.983) {
        let randomPos = Math.floor(Math.random() * this.enemies.length)
        this.enemiesBullets.push(new Bullet(this.canvas, this.enemies[randomPos].x+this.enemies[randomPos].size/2, this.enemies[randomPos].y+this.enemies[randomPos].size/2, -1))
    }
    this.enemiesBullets.forEach((element) => {
        element.draw()
    })
}

Game.prototype.checkCollision = function () {

    this.spaceshipBullets.forEach((bullet, indexBullet) => {
        this.enemies.forEach((enemy, indexEnemy) => {
            if (bullet.y < enemy.y + enemy.size && bullet.y > enemy.y) {
                if (bullet.x > enemy.x && bullet.x + bullet.width < enemy.x + enemy.size) {
                    this.enemies.splice(indexEnemy, 1)
                    this.spaceshipBullets.splice(indexBullet, 1)
                    this.spaceship.score += 10
                }
            }
        })
    })

    this.enemies.forEach((element) => {
        if (element.y + element.size / 2 > this.spaceship.y) {
            this.gameOver = true
        }
    })

    this.enemiesBullets.forEach((bullet, index) => {
        if (bullet.y+bullet.height > this.spaceship.y) {
            if (bullet.x > this.spaceship.x && bullet.x+bullet.width < this.spaceship.x+this.spaceship.width) {
                this.enemiesBullets.splice(index, 1)
                this.spaceship.lives--
                if (this.spaceship.lives === 0) {
                    this.gameOver = true
                } else {
                document.querySelector('.live-img').remove()
                }
            }
        }
    })
}

Game.prototype.setGameOver = function (callaback) {
    this.onGameOver = callaback;
}