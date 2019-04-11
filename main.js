'use strict';

function main () {

    function buildDom(html) {
        return document.querySelector('main').innerHTML = html;
    }

// --- Home Page ---
    function homePage () {
        buildDom(`
            <section>
                <div>
                    <h1>Galaga - Arcade Game</h1>
                </div>
                <button id="start-game-button">Play</button>
                <button id="leaderboard-button">Leaderboard</button>
                <button id="settings-button">Settings</button>
            </section>
        `)
        document.querySelector('#start-game-button').addEventListener('click', playingPage)
        document.querySelector('#leaderboard-button').addEventListener('click', leaderboardPage)
        document.querySelector('#settings-button').addEventListener('click', settingsPage)
    }

// --- Leaderboard Page ---
    function leaderboardPage () {
        buildDom(`
            <section>
                <h1>Leaderboard</h1>
                <ol>
                    <li>Test Player</li>
                    <li>Test Player</li>
                    <li>Test Player</li>
                    <li>Test Player</li>
                    <li>Test Player</li>
                </ol>
                <button class="home-page-button">Home</button>
            </section>
        `)
        document.querySelector('.home-page-button').addEventListener('click', homePage)
    }

// --- Settings page ---
    function settingsPage () {
        //to do
    }

// --- Game page ---
    function playingPage () {
        buildDom(`
            <section class="game-container">
                <canvas></canvas>
            </section>
        `)

        const screenWidth = document.querySelector('.game-container').offsetWidth
        const screenHeight = document.querySelector('.game-container').offsetHeight
        
        const myCanvas = document.querySelector('canvas')
        myCanvas.setAttribute('width', screenWidth)
        myCanvas.setAttribute('height', screenHeight)

        const game = new Game(myCanvas);
        game.startLoop();

        document.addEventListener('keydown', function (event) {
            //console.log(event)
            if (event.keyCode === 32) {
                game.bullets.push(new Bullet(myCanvas, game.spaceship.x + game.spaceship.size/2, game.spaceship.y + game.spaceship.size/2))
                console.log(game.bullets);
            } else if (event.keyCode === 37) {
                //console.log('left');
                game.spaceship.setDirection(-1);
            } else if (event.keyCode === 39) {
                //console.log('right');
                game.spaceship.setDirection(1);
            }
        })

        document.addEventListener('keyup', function (event) {
            if (event.keyCode === 37 || event.keyCode === 39) {
                game.spaceship.setDirection(0)
            }
        })

    }

// --- Game over page ---
    function gameOverPage () {
        buildDom(`
            <section>
                <h1>GAME OVER</h1>
                <p>Choose one of the option below.</p>
                <button class="restart-button">Restart</button>
                <button class="leaderboard-button">Leaderboard</button>
                <button class="home-page-button">Home</button>
            </section>
        `)
        document.querySelector('.restart-button').addEventListener('click', playingPage)
        document.querySelector('.leaderboard-button').addEventListener('click', leaderboardPage)
        document.querySelector('.home-page-button').addEventListener('click', homePage)
    }

    homePage()
}

window.addEventListener('load', main)