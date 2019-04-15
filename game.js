'use strict';

function Game (canvas) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext('2d');
    this.spaceship = new Spaceship(canvas);
    this.enemies = [];
    this.bullets = [];
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
        this.checkCollision()
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
    this.bullets.forEach((element, index) => {
        if (element.y < 0) {
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

Game.prototype.checkCollision = function () {
    /*
    this.bullets.forEach((bullet, indexBullet) => {
        //console.log(bullet.y, 'bullet position y')
        //console.log(bullet.x, 'bullet x');
        this.enemies.forEach((enemy, indexEnemy) => {
            //console.log(enemy.y+enemy.size, 'enemy position');
            //console.log(bullet.y, 'bullet y');
            //console.log(bullet.y - bullet.height/2, 'bullet y con alterzz');
            if (bullet.y - bullet.height/2 < enemy.y+enemy.size/2) {
                if (bullet.x > enemy.x-enemy.size/2 && bullet.x < enemy.x+enemy.size/2) {
                    this.enemies.splice(indexEnemy, 1)
                    this.bullets.splice(indexBullet, 1)

                    this.spaceship.score += 10
                    
                    console.log('collision');
                    console.log(enemy.x, 'enemy x');
                    console.log(enemy.x + enemy.size / 2, 'enemy x +');
                    console.log(enemy.x - enemy.size / 2, 'enemy x -');
                    
                }
            }
        })
    })
    */

    for (let i=this.bullets.length-1; i>0; i--) {
        for (let z=this.enemies.length-1; z>0; z--) {
            if (this.bullets[i].y-this.bullets[i].height < this.enemies[z].y+this.enemies[z].size/2) {
                if (this.bullets[i].x > this.enemies[z].x && this.bullets[i].x+this.bullets[i].width < this.enemies[z].x+this.enemies[z].size) {
                    this.enemies.splice(z, 1)
                    this.bullets.splice(i, 1)

                    this.spaceship.score += 10
                }
            }
        }
    }

    this.enemies.forEach((element) => {
        if (element.y+element.size/2 > this.spaceship.y) {
            this.gameOver = true
        }
    })
}

Game.prototype.setGameOver = function (callaback) {
    this.onGameOver = callaback;
}