// need to add event listener on .board
// need to add player turn to display players engaged
//
// function Position = {
//     position: "one",
//     currentValue
// }
const board = document.querySelector(".board");

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
