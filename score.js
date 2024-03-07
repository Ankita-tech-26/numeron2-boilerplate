// Iteration 8: Making scoreboard functional
document.addEventListener("DOMContentLoaded", function() {
    // Define variables to store game elements
    const scoreBoard = document.getElementById("score-board");
    const playAgainButton = document.getElementById("play-again-button");
  
    // Set initial score to 0
    let score = 0;
  
    // Function to update the score
    function updateScore(newScore) {
      score = newScore;
      scoreBoard.textContent = score;
    }
  
    // Example usage:
    // Call updateScore function with the new score
    updateScore();
  
    // Add event listener to the play again button (if needed)
    playAgainButton.addEventListener("click", function() {
      // Code to restart the game or navigate to another page
    });
  });
  
