const winScoreSelect = document.querySelector('#playTo');
const resetButton = document.querySelector('#resetButton');
let winScore = 3;
let isGameOver = false;

const playerOne = {
    score: 0,
    Button: document.querySelector('#p1Button'),
    Display: document.querySelector('#p1Display')
}

const playerTwo = {
    score: 0,
    Button: document.querySelector('#p2Button'),
    Display: document.querySelector('#p2Display')
}

winScoreSelect.addEventListener('change', function () {
    winScore = parseInt(this.value);
    reset();
})

function updateScore(player, opponent) {
    if (!isGameOver) {
        player.score += 1;
        if (player.score === winScore) {
            isGameOver = true;
            player.Display.classList.add('has-text-primary');
            opponent.Display.classList.add('has-text-danger');
            player.Button.disabled = true;
            opponent.Button.disabled = true;
        }
        player.Display.textContent = player.score;
    }
}

playerOne.Button.addEventListener('click', function () {
    updateScore(playerOne, playerTwo);
})

playerTwo.Button.addEventListener('click', function () {
    updateScore(playerTwo, playerOne);
})

resetButton.addEventListener('click', reset)

function reset() {
    isGameOver = false;
    playerOne.score = 0;
    playerTwo.score = 0;
    playerOne.Display.textContent = 0;
    playerTwo.Display.textContent = 0;
    playerOne.Display.classList.remove('has-text-primary', 'has-text-danger');
    playerTwo.Display.classList.remove('has-text-primary', 'has-text-danger');
    playerOne.Button.disabled = false;
    playerTwo.Button.disabled = false;
}