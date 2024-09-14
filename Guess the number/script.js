//Generate random number between 1 and 100.
let randNumber = Math.floor(Math.random() * 100) + 1;
let score = 10;
let highscore = 0;
const guessInput = document.getElementById('guessInput');
const guessBtn = document.getElementById('guessBtn');
const message = document.getElementById('message');
const scoreValue = document.getElementById('scoreValue');
const highscoreValue = document.getElementById('highscoreValue');
const resetBtn = document.getElementById('resetBtn');

//Function to check the user's guess
guessBtn.addEventListener('click', () => {
    const userGuess = Number(guessInput.value);
    if (!userGuess || userGuess < 1 || userGuess > 100) {
        message.textContent = 'Please enter a valid number between 1 and 100'
        return;
    }

    if (userGuess === randNumber) {
        message.textContent = 'Congratulations! You guessed the correct number'
        document.body.style.backgroundColor = '#4ade80'; //Change background color to green
        if (score > highscore) {
            highscore = score;
            highscoreValue.textContent = highscore;
        }
        guessBtn.disabled = true // Disabled further guesses 
    }
    else if (userGuess > randNumber) {
        message.textContent = 'Your guess to high';
        score--;
        scoreValue.textContent = score;
    }
    else {
        message.textContent = 'Your guess to low';
        score--;
        scoreValue.textContent = score;
    }
    if (score === 0) {
        message.textContent = `Game Over! The number was ${randNumber}`;
        guessBtn.disabled = true; // Disabled further guesses
        document.body.style.backgroundColor = '#f87171' // Change background color to red
    }
    //To check whether highscore is updating or not
    console.log('Current Score:', score);
    console.log('Highscore:', highscore);
});

//Reset the game
resetBtn.addEventListener('click', () => {
    score = 10;
    scoreValue.textContent = score;
    guessInput.value = '';
    message.textContent = '';
    randNumber = Math.floor(Math.random() * 100) + 1;
    guessBtn.disabled = false;
    document.body.style.backgroundColor = '#f0f4f7'; //Reset background color
});

