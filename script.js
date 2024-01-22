"use strict";
let squaresPerSide;
const containerEl = document.querySelector(".container");
const newButton = document.querySelector(".btn");

for (let i = 0; i < 256; i++) {
  const square = document.createElement("div");
  square.style.height = "60px";
  square.style.width = "60px";
  square.classList.add("square-black");
  square.addEventListener("mouseover", () => {
    square.classList.add("square-white");
  });
  containerEl.appendChild(square);
}

newButton.addEventListener("click", () => {
  const numSquares = prompt("How many squares?");
  while (containerEl.hasChildNodes()) {
    containerEl.removeChild(containerEl.lastChild);
  }

  for (let i = 0; i < numSquares ** 2; i++) {
    const square = document.createElement("div");
    const squareSize = 960 / numSquares;
    square.style.height = `${squareSize}px`;
    square.style.width = `${squareSize}px`;
    square.classList.add("square-black");
    square.addEventListener("mouseover", () => {
      square.classList.add("square-white");
    });
    containerEl.appendChild(square);
  }
});
