const board = document.getElementById("chessboard")!;
const letters = "ABCDEFGH";

for (let row = 0; row < 8; row++) {
    for (let col = 0; col < 8; col++) {
        const square = document.createElement("div");
        square.classList.add("square");

        if ((row + col) % 2 === 0) {
            square.classList.add("light");
        } else {
            square.classList.add("dark");
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

        board.append(square);
    }
}
