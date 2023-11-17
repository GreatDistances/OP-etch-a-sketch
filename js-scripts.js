const gridContainer = document.querySelector(".gridContainer");
const gridSetter = document.querySelector(".gridSetter");

const gridBtn = document.createElement("button");
gridBtn.classList.add("btn-resize");

const gridResetBtn = document.createElement("button");
gridResetBtn.classList.add("btn-reset");

//const clearGridBtn = document.createElement("button");

gridSetter.append(gridBtn);
gridSetter.append(gridResetBtn);
//gridSetter.append(clearGridBtn);

let gridWidth = 16;
let gridUnitWidth = 800 / gridWidth;

// establish grid
const buildGrid = (width) => {
  gridContainer.innerHTML = "";
  for (let i = 0; i < width; i++) {
    for (let j = 0; j < width; j++) {
      const etchDiv = document.createElement("div");
      gridUnitWidth = 800 / width;

      etchDiv.setAttribute(
        "style",
        `width: ${gridUnitWidth}px; height: ${gridUnitWidth}px`
      );

      gridContainer.append(etchDiv);
      etchDiv.classList.add("etchDiv");
      
      let randomR = Math.floor(Math.random() *255);
      let randomG = Math.floor(Math.random() *255);
      let randomB = Math.floor(Math.random() *255);
      let randomAlpha = Math.random();

      etchDiv.addEventListener("mouseover", () => {
        etchDiv.style.backgroundColor = `rgb(${randomR},${randomG},${randomB},${randomAlpha})`;
      });
    }
  }
};

gridBtn.textContent = "Resize the grid?";
gridBtn.addEventListener("click", () => {
  let continueLoop = true;
  while (continueLoop) {
    gridWidth = prompt("Enter a new grid size between 4 - 100");
    if (gridWidth >= 4 && gridWidth <= 100) break;
  }
  buildGrid(gridWidth);
});

gridResetBtn.textContent = "Reset the grid?"
gridResetBtn.addEventListener("click", () => {
  buildGrid(gridWidth);
});

//clearGridBtn.textContent = "Clear the grid?";
//clearGridBtn.addEventListener("click", () => {
// write code to loop thru each etchDiv and reset style
//});

buildGrid(gridWidth);
