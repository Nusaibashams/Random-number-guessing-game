let score = 0;
let num;

document.getElementById('startButton').addEventListener('click', function() {
const range = parseInt(document.getElementById('rangeInput').value);
    if (isNaN(range) || range <= 0) {
        document.getElementById('message').textContent = 'Please enter a valid range.';
        return;
    }
    
    num = Math.floor(Math.random() * range) + 1;
    document.getElementById('guessInput').style.display = 'inline';
    document.getElementById('guessButton').style.display = 'inline';
    document.getElementById('message').textContent = 'Guess the number!';
    document.getElementById('guessInput').value = '';
});

document.getElementById('guessButton').addEventListener('click', function() {
    const guess = parseInt(document.getElementById('guessInput').value);
    
    if (isNaN(guess)) {
        document.getElementById('message').textContent = 'Please enter a valid number.';
        return;
    }
    if (guess === num) {
        document.getElementById('message').textContent = `You are right! The number is ${num}.`;
        score += 10; // Increase score for correct guess
        document.getElementById('score').textContent = `Score: ${score}`;
        document.getElementById('guessInput').style.display = 'none';
        document.getElementById('guessButton').style.display = 'none';
        document.getElementById('rangeInput').value="";

    } else if (guess < num) {
        document.getElementById('message').textContent = 'Guess was too small. Please try again.';
        document.getElementById('guessInput').value="";
    } else if (guess > num) {
        document.getElementById('message').textContent = 'Guess was too large. Please try again.';
        document.getElementById('guessInput').value="";

    }
});
