// Puzzle Game
// Mandy Fraser
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let NUM_ROWS = 4;
let NUM_COLS = 5;
let rectWidth, rectHeight;
let currentRow, currentCol;
let gridData = [[0,0,0,0,0],
                [0,0,0,0,0],
                [0,255,0,0,0],
                [255,255,255,0,0]];
let won = false;




function setup() {
  // Determine the size of each square. Could use windowHeight,windowHeight  for Canvas to keep a square aspect ratio
  createCanvas(windowWidth, windowHeight);
  rectWidth = width/NUM_COLS;
  rectHeight = height/NUM_ROWS;
  randomize();
}

function draw() {
  background(220);
  win();
  if(won === true){
    text("You Win!", width/2, height/2);
  }
  else{
    determineActiveSquare();   //figure out which tile the mouse cursor is over
    drawGrid();                //render the current game board to the screen (and the overlay)
  }

}



function mousePressed(){
  // cross-shaped pattern flips on a mouseclick. Boundary conditions are checked within the flip function to ensure in-bounds access for array
  if (mouseButton === LEFT){
    flip(currentCol, currentRow);
    flip(currentCol-1, currentRow);
    flip(currentCol+1, currentRow);
    flip(currentCol, currentRow-1);
    flip(currentCol, currentRow+1);
  }
  if(mouseButton === CENTER){
    flip(currentCol, currentRow);
  }
}

function flip(col, row){
  // given a column and row for the 2D array, flip its value from 0 to 255 or 255 to 0
  // conditions ensure that the col and row given are valid and exist for the array. If not, no operations take place.
  if (col >= 0 && col < NUM_COLS ){
    if (row >= 0 && row < NUM_ROWS){
      if (gridData[row][col] === 0){
        gridData[row][col] = 255;
      }
      else {
        gridData[row][col] = 0;
      }
    }
  }
}

function determineActiveSquare(){
  // An expression to run each frame to determine where the mouse currently is.
  currentRow = int(mouseY / rectHeight);
  currentCol = int(mouseX / rectWidth);
}

function drawGrid(){
  // Render a grid of squares - fill color set according to data stored in the 2D array
  for (let x = 0; x < NUM_COLS ; x++){
    for (let y = 0; y < NUM_ROWS; y++){
      if(y === currentRow && x === currentCol){
        fill(0,255,0);
        rect(x*rectWidth, y*rectHeight, rectWidth, rectHeight);
        colouredOverlay(currentCol-1, currentRow);
        colouredOverlay(currentCol+1, currentRow);
        colouredOverlay(currentCol, currentRow-1);
        colouredOverlay(currentCol, currentRow+1);
      }
      else if((y !== currentRow + 1 && x !== currentCol) && (y !== currentRow && x !== currentCol + 1)){
        fill(gridData[y][x]);
        rect(x*rectWidth, y*rectHeight, rectWidth, rectHeight);
      }

    }
  }
}

function win(){
  let points = 0;
  for (let x = 0; x < NUM_COLS ; x++){
    for (let y = 0; y < NUM_ROWS; y++){
      points += gridData[y][x];
    }
  }
  if(points === 0 || points === NUM_COLS * NUM_ROWS * 255){
    fill(0);
    won = true;
  }
  print(points);
}

function randomize(){
  let counter = 0;
  for(let i = 0; i < gridData.length; i += random(1,4)){
    if(gridData[counter][i] === 0){
      gridData[counter][i] = 255;
    }
    else if(gridData[counter][i] === 255){
      gridData[counter][i] = 0;
    }
    counter ++;
  }
  print(gridData);
}

function colouredOverlay(columnOverlay, rowOverlay){
  if (columnOverlay >= 0 && columnOverlay < NUM_COLS ){
    if (rowOverlay >= 0 && rowOverlay < NUM_ROWS){
      fill(0,150,0);
      rect(columnOverlay*rectWidth,rowOverlay*rectHeight,rectWidth,rectHeight);
    }
  }
}