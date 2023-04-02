document.addEventListener("DOMContentLoaded", function () {
  let current = "x";
  const cells = document.querySelectorAll(".game .cell");
  for (const ce of cells) {
    ce.addEventListener("click", function (ev) {
      if (ce.textContent !== "") {
        return;
      }
      ce.textContent = current;
      if (current == "x") {
        current = "o";
      } else if (current == "o") {
        current = "x";
      }

      //выйгрышная позиция

      const wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ];
      for (const win of wins) {
        let xwin = true;
        let owin = true;
        for (const idx of win) {
          const a = cells[idx].textContent;
          if (a != "x") {
            xwin = false;
          }
          if (a != "o") {
            owin = false;
          }
        }
        if (xwin) {
          setTimeout(() => {
            alert(`Крестики WINS`);
          });
        }

        if (owin) {
          setTimeout(() => {
            alert(`Нолики WINS`);
          });
        }
      }
    });
  }
  const button = document.querySelector(".newGame");
  button.addEventListener("click", function () {
    for (const ce of cells) {
      setTimeout(function () {
        ce.textContent = "";
      }, 500);
    }
    const game = document.querySelector(".game");
    game.classList.toggle("gameAnim");
    button.classList.toggle("buttonAnim");
  });
});
