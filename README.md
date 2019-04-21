# Space Invaders 👾
![](https://img.shields.io/badge/language-javascript-brightgreen.svg)
![](https://img.shields.io/badge/release-v1.0-orange.svg)

## Description
A simple replication of Space Invaders, one of the most famous arcade game published by Taito in 1978.


## MVP
*Canvas*, the MVP is a game where the player can shoot and kill the enemies coming from the space.


## Backlog
- [ ] Powerups
- [ ] Settings
- [ ] More sprites for aliens
- [ ] Barriers

## Data structure
#### Game
```
function Game () {
  this.canvas
  this.ctx
  this.spaceship
  this.enemies
  this.enemiesBullets
  this.bulletSpawn
  this.gameOver
  this.shootSound
  this.explosionSound
}

Game.prototype.startLoop =  function () {
}


Game.prototype.clearCanvas = function () {
}

Game.prototype.updateCanvas = function () {
}

Game.prototype.drawCanvas = function () {

}

Game.prototype.checkCollision = function () {
}

Game.prototype.setGameOver = function () {
}

Game.prototype.createEnemies = function () {
}

Game.prototype.checkEnemies = function () {
}
```
#### Spaceship
```
function Spaceship () {
  this.canvas
  this.ctx
  this.width
  this.height
  this.x
  this.y
  this.speed
  this.direction
  this.lives
  this.score
  this.currentLevel
  this.bullets
  this.image
  this.image.src
}

Spaceship.prototype.draw = function () {
}

Spaceship.prototype.update = function () {
}

Spaceship.prototype.setDirection = function () {
}

Spaceship.prototype.removeLife = function () {
}

Spaceship.prototype.updateScore = function () {
}

Spaceship.prototype.levelUp = function () {
}
```
#### Enemy
```
function Enemy () {
  this.canvas
  this.ctx
  this.size
  this.x
  this.y
  this.speed
  this.xDirection
  this.yDirection
  this.axis
  this.startingXPos
  this.startingYPos
  this.bullets
  this.image
  this.image.src
}

Enemy.prototype.draw = function () {
}

Enemy.prototype.update = function () {
}

Enemy.prototype.movement = function (movingAxis) {
}
```
#### Bullet
```
function Bullet () {
  this.canvas
  this.ctx
  this.width
  this.height
  this.x
  this.y
  this.speed
  this.direction
  this.bulletColor
}

Bullet.prototype.draw = function () {
}

Bullet.prototype.update = function () {
}
```


## States y States Transitions
Definition of the different states and their transition (transition functions)

- Home page
  - Play game
  - Leaderboard
  - Instructions
- Play screen
    - Game over
- Game over page
  - Restart game
  - Leaderboard
  - Settings
- Leaderboard
  - Home page
- Instructions
  - Play
  - Home page


## Task
Task definition in order of priority


## Links


### Trello
- [Link url](https://trello.com/b/ftaqBzIG/my-js-game)


### Git
URls for the project repo and deploy
- [Link Repo](https://github.com/wervux/space-invaders-arcade-game)
- [Link Deploy](https://wervux.github.io/space-invaders-arcade-game/)


### Slides
URls for the project presentation (slides)
- [Link Google Slides](https://docs.google.com/presentation/d/1TM-0qc88LtxYsQtd7t1R7HkYwRR-ZYOkldquaUGocK4/edit?usp=sharing)
