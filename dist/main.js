const board = document.getElementById("chessboard");
const letters = "ABCDEFGH";
const blackPieces = ["♜", "♞", "♝", "♛", "♚", "♝", "♞", "♜"];
const whitePieces = ["♖", "♘", "♗", "♕", "♔", "♗", "♘", "♖"];
for (let row = 0; row < 8; row++) {
    for (let col = 0; col < 8; col++) {
        const square = document.createElement("div");
        square.classList.add("square");
        if ((row + col) % 2 === 0) {
            square.classList.add("light");
        }
        else {
            square.classList.add("dark");
        }
        if (row === 0) {
            square.textContent = blackPieces[col];
        }
        else if (row === 1) {
            square.textContent = "♟";
        }
        else if (row === 6) {
            square.textContent = "♙";
        }
        else if (row === 7) {
            square.textContent = whitePieces[col];
        }
        if (col === 0) {
            const number = document.createElement("span");
            number.classList.add("label", "number");
            number.textContent = String(8 - row);
            square.append(number);
        }
        if (row === 7) {
            const letter = document.createElement("span");
            letter.classList.add("label", "letter");
            letter.textContent = letters[col];
            square.append(letter);
        }
        square.addEventListener("click", () => {
            square.classList.add("selected");
            setTimeout(() => square.classList.remove("selected"), 800);
        });
        board.append(square);
    }
}
