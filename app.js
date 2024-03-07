// Iteration 1: Making the play button in the index.html functional.
// Description: When the play button is clicked the game.html page should be opened
document.addEventListener("DOMContentLoaded", function() {
    // Define variables to store game elements
    const playButton = document.getElementById("play-button");
    const gameCover = document.querySelector(".game-cover");
    const gameBoard = document.querySelector(".game-board");
  
    // Add event listener to the play button
    playButton.addEventListener("click", function() {
      // Hide the game cover
      gameCover.style.display = "none";
      // Show the game board
      gameBoard.style.display = "block";
    });
  });
