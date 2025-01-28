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

function showCurrentGameBoard(clear) {
  for (spot in boardDisplay) {
    let placement = document.getElementById(`${spot}`);
    if (clear === true) {
      placement.textContent = boardDisplay[spot] = "";
    } else {
      placement.textContent = `${boardDisplay[spot]}`;
    }
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
        return winner;
      }
    }
  }

  position = 0;
  console.log(playerArray);
}
function gameOver(player) {
  console.log(`player wins`, player.name);
  showCurrentGameBoard(true);
  playerTurnDisplay.textContent = `${player.name}`;
  sessionStorage.setItem("player", "player");
  window.location.href = "gameover.html";
}

function displayWinner() {}
function playGame() {
  showCurrentGameBoard(false);
  displayCurrentPlayerName(playerOne, true);

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
      if (gameCheck(playerTwo) === true) {
        gameOver(playerTwo);
      }
      displayCurrentPlayerName(playerOne, false);
      currentplayer = "X";
    }
    showCurrentGameBoard(false);
  });
}

playGame();
