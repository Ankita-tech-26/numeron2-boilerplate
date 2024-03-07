// Iteration 2: Generating two random numbers (0 to 100) and displaying the same in the game.html
var number1 = Math.floor(Math.random() * 101); // Random number between 0 and 100
var number2 = Math.floor(Math.random() * 101); // Random number between 0 and 100


document.getElementById('number1').innerText = number1;
document.getElementById('number2').innerText = number2;

// Iteration 3: Creating variables required to make the game functional
var operators = ['+', '-', '*', '/', '%']; // Array of operators
var operatorIndex = Math.floor(Math.random() * operators.length); // Random index for selecting operator
var operator = operators[operatorIndex]; // Randomly selected operator

var correctAnswer; // Variable to store the correct answer

// Iteration 4: Creating a variable for number 3 and a variable for storing the html element with the Id "number3"
var number3 = document.getElementById('number3');
function randomize() {
    number1 = Math.floor(Math.random() * 101); // Generate new random numbers
    number2 = Math.floor(Math.random() * 101);
    operatorIndex = Math.floor(Math.random() * operators.length); // Select new random operator
    operator = operators[operatorIndex];
    
    // Display the new numbers and operator
    document.getElementById('number1').innerText = number1;
    document.getElementById('number2').innerText = number2;
    number3.innerText = '?'; // Reset number3 to '?'
}

// Iteration 5: Creating a randomise function to make the game functional
function randomize() {
    number1 = Math.floor(Math.random() * 101); // Generate new random numbers
    number2 = Math.floor(Math.random() * 101);
    number2 = Math.floor(Math.random() * 101);
    operatorIndex = Math.floor(Math.random() * operators.length); // Select new random operator
    operator = operators[operatorIndex];
    
    // Display the new numbers and operator
    document.getElementById('number1').innerText = number1;
    document.getElementById('number2').innerText = number2;
    document.getElementById('number2').innerText = number2;
    // number3.innerText = '?';
}
// Iteration 6: Making the Operators (button) functional

document.getElementById('plus').addEventListener('click', function() {
    checkAnswer('+');
});
document.getElementById('minus').addEventListener('click', function() {
    checkAnswer('-');
});
document.getElementById('mul').addEventListener('click', function() {
    checkAnswer('*');
});
document.getElementById('divide').addEventListener('click', function() {
    checkAnswer('/');
});
document.getElementById('modulus').addEventListener('click', function() {
    checkAnswer('%');
});

// Function to check the answer
function checkAnswer(clickedOperator) {
    if (clickedOperator === operator) {
        alert('Correct!');
    } else {
        alert('Incorrect!');
    }
    randomize(); // Randomize numbers and operator after checking the answer
}


// Iteration 7: Making Timer functional
var timeLeft = 60; // 60 seconds
const timerElement = document.getElementById('timer');
timerElement.style.fontSize = '14px';
var timer = setInterval(function() {
    document.getElementById('timer').innerText = 'Time Left: ' + timeLeft + ' seconds';
    timeLeft--;
    if (timeLeft < 0) {
        clearInterval(timer);
        alert('Time\'s up!');
    }
}, 1000);