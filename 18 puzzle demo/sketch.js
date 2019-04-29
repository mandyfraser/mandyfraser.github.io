// Grid Demo

const NUM_ROWS = 4;
const NUM_COLUMNS = 5;
let rectWidth, rectHeight;
let currentRow, currentColumn;

let gridData = [[0,255,0,255,0],
                [255,0,255,0,255],
                [0,255,0,255,0],
                [255,0,255,0,255]];

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectWidth = width / NUM_COLUMNS;
  rectHeight = height / NUM_ROWS;
}

function drawGrid(){
  //render a grid of squares - fill colour set according to data stored in 2D array
  for (let y = 0; y < NUM_ROWS; y++){
    for (let x = 0; x< NUM_COLUMNS; x++){
      fill(gridData[y][x]);
      rect(rectWidth * x,rectHeight * y,rectWidth,rectHeight);
    }
  }
}

function determineActiveSquare(){
  //an expression to run each frame and to determine where the mouse is
  currentRow = int(mouseY/rectHeight);
  currentColumn = int(mouseX/rectWidth);
  print(currentColumn, currentRow);
}

function mousePressed(){
  flip(currentColumn, currentRow);
  flip(currentColumn - 1, currentRow);
  flip(currentColumn + 1, currentRow);
  flip(currentColumn, currentRow - 1);
  flip(currentColumn, currentRow + 1);
}

function flip(column, row){
  //flip the value in the array
  if (column >= 0 && column < NUM_COLUMNS){
    if(gridData[row][column] === 0){
      gridData[row][column] = 255;
    }
    else{
      gridData[row][column] = 0;
    }
  }
}

function draw() {
  background(255);
  drawGrid();
  determineActiveSquare();
}