'use strict';

function main() {
  function buildDom(html) {
    return document.querySelector('main').innerHTML = html;
  }

  // --- Home Page ---
  function homePage() {
    buildDom(`
            <section>
                <audio src="./src/01 Stage Intro.mp3" autoplay></audio>
                <div>
                    <h1>- Space Invaders -</h1>
                    <img id="home-page-img" src="./img/press-start-logo.png">
                </div>
                <button id="start-game-button">Start</button>
                <button id="leaderboard-button">Leaderboard</button>
                <button id="instructions-button">Instructions</button>
            </section>
        `)
    document.getElementsByClassName('container')[0].style.animation = "slide 40s linear infinite"
    document.querySelector('audio').volume = 0.1;
    document.querySelector('#start-game-button').addEventListener('click', playingPage)
    document.querySelector('#leaderboard-button').addEventListener('click', leaderboardPage)
    document.querySelector('#instructions-button').addEventListener('click', instructionsPage)
  }

  // --- Leaderboard Page ---
  function leaderboardPage() {
    buildDom(`
            <section>
                <h1>High Scores</h1>
                <div id="leaderboard-names">
                  <p>Name</p>
                  <p>Score</p>
                  <p>Level</p>
              </div>
                <ol id="score">
                </ol>
                <button class="home-page-button">Home</button>
            </section>
        `);
    let myArray = getLeaderboardData()
    myArray.splice(0,10).forEach((element)=> {
      var node = document.createElement("LI")
      node.innerHTML = `${element.name} | ${element.score} | ${element.level}`;
      document.querySelector('#score').appendChild(node);
    })
    document.getElementsByClassName('container')[0].style.animation = "slide 40s linear infinite"
    document.querySelector('.home-page-button').addEventListener('click', homePage)
  }

  // --- Settings page ---
  function settingsPage() {
    buildDom(`
            <section>
                <h1>Settings</h1>
                <ul id="setting-list">
                    <li>Change Difficult</li>
                </ul>
                <button class="instructions-button">Instructions</button>
                <button class="home-page-button">Home</button>
            </section>
        `)
    document.getElementsByClassName('container')[0].style.animation = "slide 40s linear infinite"
    document.querySelector('.instructions-button').addEventListener('click', instructionsPage)
    document.querySelector('.home-page-button').addEventListener('click', homePage)
  }

  // --- Game page ---
  function playingPage() {
    buildDom(`
            <section class="game-container">
                <audio src="./src/12 Unknown.mp3" autoplay loop></audio>
                <div id="game-header">
                    <div class="stats">
                        <p>Lives:</p>
                        <img class="live-img" src="./test-img/spaceship-3.png" width="30" height="30">
                        <img class="live-img" src="./test-img/spaceship-3.png" width="30" height="30">
                        <img class="live-img" src="./test-img/spaceship-3.png" width="30" height="30">
                    </div>
                    <div>
                        <p id="hi-score-text">High score</p>
                        <p id="hi-score-points"></p>
                    </div>
                    <div class="stats">
                        <p>Score:</p>
                        <p id="actual-score"></p>
                    </div>
                </div>
                <canvas></canvas>
                <div id="footer">
                  <p id="levels"></p>
                </div>
            </section>
        `)

    let myArray = getLeaderboardData()
    document.querySelector('#hi-score-points').innerHTML =  myArray[0].score
    document.querySelector('audio').volume = 0.3;
    document.getElementsByClassName('container')[0].style.animation = "slide 12s linear infinite"

    const gameContainer = document.querySelector('.game-container')
    const myCanvas = document.querySelector('canvas')

    myCanvas.setAttribute('width', gameContainer.offsetWidth)
    myCanvas.setAttribute('height', gameContainer.offsetHeight - document.querySelector('#game-header').offsetHeight - document.querySelector('#footer').offsetHeight)

    const game = new Game(myCanvas);
    game.startLoop();
    game.setGameOver(savePlayerName)

    // movements
    document.addEventListener('keydown', function (event) {
      if (event.keyCode === 32) {
        if (game.spaceshipBullets.length < 12) {
          game.spaceshipBullets.push(new Bullet(myCanvas, game.spaceship.x + game.spaceship.width / 2, game.spaceship.y, 1, '#EBFF20'))
          game.shootSound.currentTime =0
          game.shootSound.volume = 0.1
          game.shootSound.play()
        }
      } 
      if (event.keyCode === 37) {
        game.spaceship.setDirection(-1);
      } 
      if (event.keyCode === 39) {
        game.spaceship.setDirection(1);
      }
    })

    document.addEventListener('keyup', function (event) {
      if (event.keyCode === 37 || event.keyCode === 39) {
        game.spaceship.setDirection(0)
      }
      else if (event.keyCode === 37 || event.keyCode === 39 && leftIsPressed) {
        //game
      }
    })
  }

  // --- Add name page ---
  function savePlayerName() {
    buildDom(`
            <section>
                <h1>Your score</h1>
                <h2 id="player-score"></h2>
                <form action="javascript:void(0);" id="save-player-form">
                <div class="cursor">
                  <input type="text" name="player-name" id="player-name">
                  <i></i>
                </div>
                </form>
                <button id="save-player-name" type="submit" form="save-player-form" value="submit">Save</button>
            </section>
        `)
      document.querySelector('#player-score').innerHTML = this.spaceship.score
      document.querySelector('#save-player-name').addEventListener('click', ()=> {
        let player = {
          name: document.querySelector('#player-name').value,
          score: this.spaceship.score,
          level: this.spaceship.currentLevel
        }
        window.localStorage.setItem(player.name, JSON.stringify(player))
        
        gameOverPage()
      });
  }

  // --- Game over page ---
  function gameOverPage() {
    buildDom(`
            <section id="game-over-page">
                <img id="game-over-img" src="./img/game-over.gif">
                <h1>GAME OVER</h1>
                <p>YOU LOSE!</p>
                <button class="restart-button">Restart</button>
                <button class="leaderboard-button">Leaderboard</button>
                <button class="home-page-button">Home</button>
            </section>
        `)
    document.getElementsByClassName('container')[0].style.animation = "slide 40s linear infinite"
    document.querySelector('.restart-button').addEventListener('click', playingPage)
    document.querySelector('.leaderboard-button').addEventListener('click', leaderboardPage)
    document.querySelector('.home-page-button').addEventListener('click', homePage)
  }

  function getLeaderboardData() {
    let keys = Object.keys(window.localStorage);
    
    let testArray = [];

    if (keys.length <10) {
      for (let z=0; z<10-keys.length; z++) {
        testArray.push({name: '--', score: 0, level: '0'})
      }
    }
    for (let i=0; i<keys.length; i++) {
      let obj = JSON.parse(window.localStorage[keys[i]])
      testArray.push(obj)
    }
    testArray.sort((a,b) => b.score-a.score);

    return testArray

  }

  function instructionsPage() {
    buildDom(`
      <section>
        <h1>Instructions</h1>
        <div id="instructions">
          <p>- Use the <span id="color-text-ins">left</span> and <span id="color-text-ins">right</span> arrow keys to move the spaceship.</p>
          <p>- Use the <span id="color-text-ins">spacebar</span> to shoot the  aliens.</p>
          <p>- Kill the aliens to earn points.</p>
        </div>
        <button id="start-game-button">Play</button>
        <button class="home-page-button">Home</button>
      </section>
    
    `)
    document.querySelector('#start-game-button').addEventListener('click', playingPage)
    document.querySelector('.home-page-button').addEventListener('click', homePage)
  }
  homePage()
}
window.addEventListener('load', main)