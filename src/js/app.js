function createGame() {
  const dead = document.querySelector("#dead");
  const lost = document.querySelector("#lost");
  const goblin = document.createElement("img");
  const image = require("../img/goblin.png");
  goblin.setAttribute("src", image);

  const getHole = (index) => document.querySelector(`#hole${index}`);

  const activateHole = (index) => getHole(index).append(goblin);

  const holeInterval = setInterval(() => {
    const hole = goblin.parentElement;
    let activeHoleIndex = Math.floor(1 + Math.random() * 16);

    while (
      hole !== null &&
      hole.getAttribute("id").slice(4) == activeHoleIndex
    ) {
      activeHoleIndex = Math.floor(1 + Math.random() * 16);
    }

    activateHole(activeHoleIndex);
  }, 1000);

  function onClick(event) {
    if (lost.textContent == 4) {
      alert("Вы проиграли!");
      clearInterval(holeInterval);
      goblin.remove();
      document.removeEventListener("click", onClick);
    }
    if (event.target == goblin) {
      dead.textContent = Number(dead.textContent) + 1;
    } else {
      lost.textContent = Number(lost.textContent) + 1;
    }
  }

  document.addEventListener("click", onClick);
}

document.addEventListener("DOMContentLoaded", createGame);

export default function demo(value) {
  return `Demo: ${value}`;
}
