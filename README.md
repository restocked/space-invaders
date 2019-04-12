# Space Invaders 👾

## Description
A simple replication of Space Invaders, one of the most famous arcade game published by Taito in 1978.


## MVP
*Canvas*, the MVP is a game where the player can shoot and kill the enemies coming from the space.


## Backlog
- [ ] Music effects
- [ ] Powerups
- [ ] Moving background
- [ ] Levels
- [ ] Diffucult settings
- [ ] Score points
- [ ] Highscore display
- [ ] Lives display

## Data structure
#### Game
```
function Game (canvas) {
    this.spaceship;
    this.enemies;
    this.bullets;
    this.gameOver;
    this.canvas;
    this.ctx;
}

Game.prototype.startLoop =  function () {

}


Game.prototype.clearCanvas = function () {

}

Game.prototype.updateCanvas = function () {

}

Game.prototype.drawCanvas = function () {

}
```
#### Spaceship
```
function Spaceship (canvas) {
    this.speed; 
    this.direction;
    this.size;
    this.height;
    this.canvas;
    this.ctx;
    this.x;
    this.y;
    
}

Spaceship.prototype.draw = function () {

}

Spaceship.prototype.update = function () {

}

Spaceship.prototype.setDirection = function (newDir) {

}

Spaceship.prototype.setLives = function () {

}

Spaceship.prototype.checkCollision = function () {

}
```
#### Enemy
```
function Enemy (canvas, x) {
    this.x;
    this.y;
    this.size;
    this.speed;
    this.direction;
    this.canvas;
    this.ctx;
}

Enemy.prototype.draw = function () {

}

Enemy.prototype.update = function () {

}
```
#### Bullet
```
function Bullet (canvas, x, y) {
    this.x;
    this.y;
    this.size;
    this.speed;
    this.canvas;
    this.ctx;
}

Bullet.prototype.draw = function () {

}

Bullet.prototype.update = function () {

}

Bullet.prototype.checkCollision = function () {

}

```


## States y States Transitions
Definition of the different states and their transition (transition functions)

- Home page
  - Play game
  - Leaderboard
  - Settings
- Play screen
- Game over page
  - Restart game
  - Leaderboard
  - Settings
- Leaderboard
  - Home page
- Settings
  - Home page


## Task
Task definition in order of priority


## Links


### Trello
- [Link url](https://trello.com/b/ftaqBzIG/my-js-game)


### Git
URls for the project repo and deploy
- [Link Repo](https://github.com/wervux/space-invaders-arcade-game)
- [Link Deploy](http://github.com)


### Slides
URls for the project presentation (slides)
- [Link Slides.com](http://slides.com)
