const DEFAULT_COLOR = "#000";
const DEFAULT_SIZE = 16;

const gridContainer = document.querySelector(".container");
const blackBtn = document.getElementById("blackBtn");
const rainbowBtn = document.getElementById("rainbowBtn");
const eraserBtn = document.getElementById("eraserBtn");
const clearBtn = document.getElementById("clearBtn");
const createBtn = document.getElementById("createBtn");
const rangeInput = document.getElementById("rangeSlider");
const rangeValue = document.getElementById("rangeValue");

blackBtn.addEventListener("click", function () {
  color = DEFAULT_COLOR;
  isRainbowMode = false;
});

rainbowBtn.addEventListener("click", colorRainbow);

eraserBtn.addEventListener("click", function () {
  color = "#FFF";
  isRainbowMode = false;
});

clearBtn.addEventListener("click", clearGrid);

createBtn.addEventListener("click", function () {
  size = rangeInput.value;
  createGrid(size);
});

let color = DEFAULT_COLOR;
let size = DEFAULT_SIZE;
let isRainbowMode = false;

function createGrid(size) {
  gridContainer.innerHTML = "";
  for (let i = 0; i < size * size; i++) {
    let cell = document.createElement("div");
    cell.classList.add("grid-cell");
    let width_height = 100 / size;
    cell.style.width = `${width_height}%`;
    cell.style.height = `${width_height}%`;
    cell.addEventListener("mouseover", handleCellHover);
    gridContainer.appendChild(cell);
  }
}

function handleCellHover() {
  if (isRainbowMode) {
    const rainbowColor = getRandomRainbowColor();
    this.style.backgroundColor = rainbowColor;
  } else {
    this.style.backgroundColor = color;
  }
}

function colorRainbow() {
  isRainbowMode = true;
}

function getRandomRainbowColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function clearGrid() {
  rangeInput.value = 16;
  rangeValue.innerHTML = "16 X 16"
  color = DEFAULT_COLOR;
  size = DEFAULT_SIZE;
  isRainbowMode = false;
  createGrid(size);
}

//initial call
createGrid(size);
