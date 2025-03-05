const GameBoard = (() => {
  const boardContainer = document.querySelector(".board");

  const getBoard = boardContainer;

  const showCurrentGameBoard = (clear) => {
    for (spot in boardDisplay) {
      let placement = document.getElementById(`${spot}`);
      if (clear === true) {
        placement.textContent = boardDisplay[spot] = "";
      } else {
        placement.textContent = `${boardDisplay[spot]}`;
      }
    }
  };
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

  return { getBoard, showCurrentGameBoard, boardDisplay };
})();

const GameSystems = (() => {
  const wins = [123, 456, 789, 147, 258, 369, 159, 357];
  const playerTurnDisplay = document.querySelector(".player-turn");

  const displayCurrentPlayerName = (currentMarker, currentName) => {
    let playerName = `${currentMarker}:${currentName}'s Turn`;
    playerTurnDisplay.textContent = `${playerName}`;
  };
  const gameCheck = (playerMarker) => {
    let playerArray = [];
    let position = 1;
    for (property in GameBoard.boardDisplay) {
      if (GameBoard.boardDisplay[property] === playerMarker) {
        playerArray += [position];
      }
      position += 1;
    }
    for (i = 0; i < wins.length; i++) {
      if (playerArray.length > 2) {
        let winner = playerArray.indexOf(`${wins[i]}`);
        if (winner != -1) {
          return true;
        }
      }
    }
    position = 0;
  };
  const gameOver = (winner) => {
    GameBoard.showCurrentGameBoard(true);
    playerTurnDisplay.textContent = `${winner}`;
    sessionStorage.setItem("winner", `${winner}`);
    window.location.href = "gameover.html";
  };

  const setNames = (user, robot) => {
    document.querySelector(".user").textContent = `${user}`;
    document.querySelector(".robot").textContent = `${robot}`;
  };
  return { displayCurrentPlayerName, gameCheck, gameOver, setNames };
})();

const Player = (name, marker, score) => {
  const getScore = () => score;
  const add2Score = () => score++;
  let winner = false;
  const getName = () => name;
  const getMarker = () => marker;

  return { getScore, add2Score, getName, getMarker, winner };
};

const PlayGame = (() => {
  let playerOneName = sessionStorage.getItem("playerOneName");
  let playerTwoName = sessionStorage.getItem("playerTwoName");
  let playerOneScore = sessionStorage.getItem("playerOneScore");
  let playerTwoScore = sessionStorage.getItem("playerTwoScore");
  const playerOne = Player(playerOneName, "X", playerOneScore);
  const playerTwo = Player(playerTwoName, "O", playerTwoScore);
  GameSystems.setNames(playerOne.getName(), playerTwo.getName());
  let currentPlayerMarker = playerOne.getMarker();
  let currentPlayerName = playerOne.getName();
  GameBoard.showCurrentGameBoard(false);
  GameSystems.displayCurrentPlayerName(currentPlayerMarker, currentPlayerName);

  GameBoard.getBoard.addEventListener("click", (event) => {
    const isButton = event.target.nodeName === "BUTTON";
    let position = event.target.id;
    if (
      !isButton ||
      GameBoard.boardDisplay[`${position}`] === "X" ||
      GameBoard.boardDisplay[`${position}`] === "O"
    ) {
      return;
    }
    GameBoard.boardDisplay[`${position}`] = `${currentPlayerMarker}`;

    if (currentPlayerMarker === playerOne.getMarker()) {
      if (GameSystems.gameCheck(playerOne.getMarker(), playerOne.getName())) {
        playerOne.add2Score();
        sessionStorage.setItem("playerOneScore", playerOne.getScore());
        GameSystems.gameOver(playerOne.getName());
      }
      currentPlayerMarker = playerTwo.getMarker();
      currentPlayerName = playerTwo.getName();
    } else {
      if (GameSystems.gameCheck(playerTwo.getMarker(), playerTwo.getName())) {
        playerTwo.add2Score();
        sessionStorage.setItem("playerTwoScore", playerTwo.getScore());
        GameSystems.gameOver(playerTwo.getName());
      }
      currentPlayerMarker = playerOne.getMarker();
      currentPlayerName = playerOne.getName();
    }
    GameSystems.displayCurrentPlayerName(
      currentPlayerMarker,
      currentPlayerName
    );
    GameBoard.showCurrentGameBoard(false);
  });
})();
