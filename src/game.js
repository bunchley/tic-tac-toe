let playerTurnDisplay = document.querySelector(".player-turn");
let currentplayer = "X";
let winCheck = "";
let Player = function Player(name, marker) {
  this.name = name;
  this.marker = marker;
};
const wins = [123, 456, 789, 147, 258, 369, 159, 357];

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

function checkAgainstWinningMoves() {
  console.log("Checking against winning Moves");
}
function showCurrentGameBoard() {
  for (spot in boardDisplay) {
    let placement = document.getElementById(`${spot}`);
    placement.textContent = `${boardDisplay[spot]}`;
  }
}

function displayCurrentPlayerName(player, title) {
  let playerName = `${player.marker}:${player.name}'s Turn`;
  if (title === true) {
    playerName = `${player.marker}:${player.name}`;
    document.querySelector(".user").textContent = `${playerOne.name}`;
    document.querySelector(".robot").textContent = `${playerTwo.name}`;
  }
  playerTurnDisplay.textContent = `${playerName}`;
}
function gameCheck(player) {
  console.log("Game checked for a winner");
  let playerArray = [];
  let position = 1;

  for (property in boardDisplay) {
    if (boardDisplay[property] === player.marker) {
      playerArray += [position];
    }
    position += 1;
  }
  for (i = 0; i < wins.length; i++) {
    if (playerArray.length > 2) {
      let winner = playerArray.includes(`${wins[i]}`);
      if (winner === true) {
        console.log(`And the winner is...`, ` ${player.marker}`);
        return winner;
      }
      console.log("here is the win combo", wins[i]);
      console.log("Issssss there a winner?", winner);
    }
  }

  position = 0;
  console.log(playerArray);
}
function gameOver(player) {
  console.log(`player wins`, player.name);
  // clear board
}
function playGame() {
  //   displayPlayerOneName();
  showCurrentGameBoard();

  displayCurrentPlayerName(playerOne, true);
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

      if (gameCheck(playerOne) === true) {
        gameOver(playerOne);
      }
      currentplayer = "O";
      displayCurrentPlayerName(playerTwo, false);
    } else if (currentplayer === "O") {
      position = event.target.id;
      boardDisplay[`${position}`] = `${currentplayer}`;
      console.log(boardDisplay);
      gameCheck(playerTwo);
      currentplayer = "X";
      displayCurrentPlayerName(playerOne, false);
    }
    showCurrentGameBoard();
  });
}

playGame();
