const startGameButton = document.querySelector(".play");

startGameButton.addEventListener("click", () => {
  console.log("clicked");
  let playerOne = document.querySelector("input#oneName").value;
  let playerTwo = document.querySelector("input#twoName").value;
  if (playerOne === "") {
    playerOne = "Bert";
  }
  if (playerTwo === "") {
    playerTwo = "Ernie";
  }

  sessionStorage.setItem("playerOneName", `${playerOne}`);
  console.log("oneName", playerOne);

  sessionStorage.setItem("playerTwoName", `${playerTwo}`);
  console.log("twoName", playerTwo);
  sessionStorage.setItem("playerOneScore", 0);
  sessionStorage.setItem("playerTwoScore", 0);
  sessionStorage.setItem("winner", "");
  window.location.href = "game.html";
});
