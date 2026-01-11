const cells = document.querySelectorAll(".cell");
const statusText = document.getElementById("status");
const resetBtn = document.getElementById("resetBtn");

let board = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let gameActive = true;

const winConditions = [
  [0,1,2], [3,4,5], [6,7,8], // filas
  [0,3,6], [1,4,7], [2,5,8], // columnas
  [0,4,8], [2,4,6]           // diagonales
];

cells.forEach(cell => {
  cell.addEventListener("click", () => handleCellClick(cell));
});

function handleCellClick(cell) {
  const index = cell.dataset.index;

  if (board[index] !== "" || !gameActive) return;

  board[index] = currentPlayer;
  cell.textContent = currentPlayer;

  checkWinner();
  changePlayer();
}

function changePlayer() {
  currentPlayer = currentPlayer === "X" ? "O" : "X";
}

function checkWinner() {
  for (let condition of winConditions) {
    let [a, b, c] = condition;

    if (board[a] && board[a] === board[b] && board[b] === board[c]) {
      statusText.textContent = `${board[a]} ganó`;
      gameActive = false;
      return;
    }
  }

  if (!board.includes("")) {
    statusText.textContent = "Empate";
    gameActive = false;
  }
}

resetBtn.addEventListener("click", () => {
  board = ["", "", "", "", "", "", "", "", ""];
  gameActive = true;
  currentPlayer = "X";
  statusText.textContent = "";
  cells.forEach(c => c.textContent = "");
});
