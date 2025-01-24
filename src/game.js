let playerTurnDisplay = document.querySelector(".player-turn");
let Player = function Player(name, marker) {
  this.name = name;
  this.marker = marker;
};

Player.prototype.displayPlayer = function () {
  console.log("display player");
};
const board = document.querySelector(".board");

const playerOne = new Player("Ashley", "X");
const playerTwo = new Player("Kevin", "O");

function handleClick() {
  console.log("Position Clicked");
}

board.addEventListener("click", (event) => {
  const isButton = event.target.nodeName === "BUTTON";
  if (!isButton) {
    return;
  }
  console.dir(event.target.id);
});

function displayCurrentPlayerName(name, marker) {
  let playerName = document.createTextNode(`${marker}:${name}'s Turn`);
  playerTurnDisplay.appendChild(playerName);
}

function playGame() {
  //   displayPlayerOneName();
  displayCurrentPlayerName(playerOne.name, playerOne.marker);
}
playGame();
