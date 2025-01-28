let winner = sessionStorage.getItem("winner");
console.log("GAME OVER screen");
let playerOneScore = sessionStorage.getItem("playerOneScore");
let playerOneName = sessionStorage.getItem("playerOneName");
let playerTwoName = sessionStorage.getItem("playerTwoName");
let playerTwoScore = sessionStorage.getItem("playerTwoScore");

function displayNames() {
  // if winner ==
  document.querySelector(".user").textContent = `${playerOneName}`;
  document.querySelector(".robot").textContent = `${playerTwoName}`;
}
function displayWinner() {
  document.querySelector(".winner").textContent = `${winner} Wins!`;
  displayNames(winner);
}
function displayScore() {
  document.querySelector(".playerOneValue").textContent = `${playerOneScore}`;
  document.querySelector(".playerTwoValue").textContent = `${playerTwoScore}`;
}
displayWinner();
displayNames();
displayScore();
