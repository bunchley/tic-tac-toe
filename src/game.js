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

const boardDisplay = {
  one: "O",
  two: "X",
  three: "O",
  four: "X",
  five: "O",
  six: "X",
  seven: "O",
  eight: "X",
  nine: "O",
};
function showCurrentGameBoard() {
  for (spot in boardDisplay) {
    console.log(spot);
    position = document.getElementById(`${spot}`);
    move = document.createTextNode(`${boardDisplay[spot]}`);
    position.appendChild(move);
  }
}

board.addEventListener("click", (event) => {
  const isButton = event.target.nodeName === "BUTTON";
  if (!isButton) {
    return;
  }
  //   console.dir(event.target.id);
});

function displayCurrentPlayerName(name, marker) {
  let playerName = document.createTextNode(`${marker}:${name}'s Turn`);
  playerTurnDisplay.appendChild(playerName);
}

function playGame() {
  //   displayPlayerOneName();
  showCurrentGameBoard();
  displayCurrentPlayerName(playerOne.name, playerOne.marker);
}
playGame();
