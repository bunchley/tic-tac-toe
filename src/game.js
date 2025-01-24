let playerTurnDisplay = document.querySelector(".player-turn");
let currentplayer = "X";
let winCheck = "";
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
  one: "",
  two: "",
  three: "",
  four: "",
  five: "",
  six: "",
  seven: "",
  eight: "",
  nine: "",
};
function showCurrentGameBoard() {
  for (spot in boardDisplay) {
    let placement = document.getElementById(`${spot}`);
    placement.textContent = `${boardDisplay[spot]}`;
  }
}

function displayCurrentPlayerName(player) {
  let playerName = `${player.marker}:${player.name}'s Turn`;
  playerTurnDisplay.textContent = `${playerName}`;
}
function gameCheck() {
  console.log("Game checked for a winner");
  winCheck = false;
  if (!winCheck) {
  } else {
    console.log("winner winner");
  }
}

function playGame() {
  //   displayPlayerOneName();
  showCurrentGameBoard();

  displayCurrentPlayerName(playerOne);
  //   let currentplayer = `${playerOne.marker}`;
  board.addEventListener("click", (event) => {
    const isButton = event.target.nodeName === "BUTTON";
    if (!isButton) {
      return;
    }
    if (currentplayer === "X") {
      position = event.target.id;

      boardDisplay[`${position}`] = `${currentplayer}`;
      console.log(boardDisplay);

      gameCheck();
      currentplayer = "O";
      displayCurrentPlayerName(playerTwo);
    } else if (currentplayer === "O") {
      position = event.target.id;
      boardDisplay[`${position}`] = `${currentplayer}`;
      console.log(boardDisplay);
      gameCheck();
      currentplayer = "X";
      displayCurrentPlayerName(playerOne);
    }
    showCurrentGameBoard();
  });
}

playGame();
