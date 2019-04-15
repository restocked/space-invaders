'use strict';

function main () {
    function buildDom(html) {
        return document.querySelector('main').innerHTML = html;
    }

// --- Home Page ---
    function homePage () {
        buildDom(`
            <section>
                <audio src="./src/01 Stage Intro.mp3" autoplay></audio>
                <div>
                    <h1>- Space Invaders -</h1>
                    <img id="home-page-img" src="./img/press-start-logo.png">
                </div>
                <button id="start-game-button">Start</button>
                <button id="leaderboard-button">Leaderboard</button>
                <button id="settings-button">Settings</button>
            </section>
        `)
        document.getElementsByClassName('container')[0].style.animation = " slide 40s linear infinite"
        document.querySelector('audio').volume = 0.3;
        document.querySelector('#start-game-button').addEventListener('click', playingPage)
        document.querySelector('#leaderboard-button').addEventListener('click', leaderboardPage)
        document.querySelector('#settings-button').addEventListener('click', settingsPage)
    }

// --- Leaderboard Page ---
    function leaderboardPage () {
        buildDom(`
            <section>
                <h1>High Scores</h1>
                <ol>
                    <li>Test Player - 1234444</li>
                    <li>Test Player - 1234444</li>
                    <li>Test Player - 1234444</li>
                    <li>Test Player - 1234444</li>
                    <li>Test Player - 1234444</li>
                    <li>Test Player - 1234444</li>
                    <li>Test Player - 1234444</li>
                    <li>Test Player - 1234444</li>
                    <li>Test Player - 1234444</li>
                    <li>Test Player - 1234444</li>
                </ol>
                <button class="home-page-button">Home</button>
            </section>
        `)
        document.getElementsByClassName('container')[0].style.animation = " slide 40s linear infinite"
        document.querySelector('.home-page-button').addEventListener('click', homePage)
    }

// --- Settings page ---
    function settingsPage () {
        buildDom(`
            <section>
                <h1>Settings</h1>
                <ul id="setting-list">
                    <li>Change Difficult</li>
                    <li>Some shit ...</li>
                    <li>Some other shit ...</li>
                </ul>
                <button class="home-page-button">Home</button>
            </section>
        `)
        document.getElementsByClassName('container')[0].style.animation = "slide 40s linear infinite"
        document.querySelector('.home-page-button').addEventListener('click', homePage)
    }

// --- Game page ---
    function playingPage () {
        buildDom(`
            <section class="game-container">
                <audio src="./src/12 Unknown.mp3" autoplay></audio>
                <div id="game-header">
                    <div class="stats">
                        <p>Lives:</p>
                        <img src="./img/spaceship.png" width="40" height="40">
                        <img src="./img/spaceship.png" width="40" height="40">
                        <img src="./img/spaceship.png" width="40" height="40">
                    </div>
                    <div>
                        <p id="hi-score-text">High score</p>
                        <p id="hi-score-points">00000</p>
                    </div>
                    <div class="stats">
                        <p>Score:</p>
                        <p id="actual-score"></p>
                    </div>
                </div>
                <canvas></canvas>
            </section>
        `)
        //<audio src="./src/12 Unknown.mp3" autoplay loop></audio>
        document.querySelector('audio').volume = 0.3;
        document.getElementsByClassName('container')[0].style.animation = " slide 12s linear infinite"

        const gameContainer = document.querySelector('.game-container')
        const myCanvas = document.querySelector('canvas')
        
        myCanvas.setAttribute('width', gameContainer.offsetWidth)
        myCanvas.setAttribute('height', gameContainer.offsetHeight - document.querySelector('#game-header').offsetHeight)

        const game = new Game(myCanvas);
        game.startLoop();
        game.setGameOver(gameOverPage)

        document.addEventListener('keydown', function (event) {
            if (event.keyCode === 32) {
                game.bullets.push(new Bullet(myCanvas, game.spaceship.x + game.spaceship.width/2, game.spaceship.y))
            } else if (event.keyCode === 37) {
                game.spaceship.setDirection(-1);
            } else if (event.keyCode === 39) {
                game.spaceship.setDirection(1);
            }
        })

        document.addEventListener('keyup', function (event) {
            if (event.keyCode === 37 || event.keyCode === 39) {
                game.spaceship.setDirection(0)
            }
        })
    }

// --- Add name page ---
    function savePlayerName() {
        buildDom(`
            <section>
                <h1>Your score</h1>
                <h2>9999999</h2>
                <form action="#" id="save-player-form">
                    <input type="text" name="player-name">
                </form>
                <button class="save-player-name" type="submit" form="save-player-form" value="submit">Save</button>
            </section>
        `)

    }

// --- Game over page ---
    function gameOverPage () {
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
        document.getElementsByClassName('container')[0].style.animation = " slide 40s linear infinite"
        document.querySelector('.restart-button').addEventListener('click', playingPage)
        document.querySelector('.leaderboard-button').addEventListener('click', leaderboardPage)
        document.querySelector('.home-page-button').addEventListener('click', homePage)
    }
    homePage()
}

window.addEventListener('load', main)