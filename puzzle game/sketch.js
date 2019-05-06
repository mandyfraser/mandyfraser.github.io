// Puzzle Game
// Mandy Fraser
// 05/05/19
//
// Extra for Experts:
// I added in the coloured overlay and the ability to switch between a cross pattern and a square pattern.


let NUM_ROWS = 4;
let NUM_COLS = 5;
let rectWidth, rectHeight;
let currentRow, currentCol;
let gridData = [[0,0,0,0,0],
                [0,0,0,0,0],
                [0,255,0,0,0],
                [255,255,255,0,0]];
let won = false;
let crossOrSquare = 0;  // 0 = cross, 1 = square




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
  else{                        //only draws the grid if the player hasn't yet won
    drawGrid();                //render the current game board to the screen (and the overlay)
    determineActiveSquare();   //figure out which tile the mouse cursor is over
  }

}

function keyPressed(){
  if (key === " "){
    if(crossOrSquare === 0){
      crossOrSquare = 1;
    }
    else{
      crossOrSquare = 0;
    }
  }
}

function mousePressed(){
  // cross-shaped pattern flips on a mouseclick. Boundary conditions are checked within the flip function to ensure in-bounds access for array
  if (mouseButton === LEFT){
    if(crossOrSquare === 0){                 //cross
      flip(currentCol, currentRow);
      flip(currentCol-1, currentRow);
      flip(currentCol+1, currentRow);
      flip(currentCol, currentRow-1);
      flip(currentCol, currentRow+1);
    }
    else{                                    //square
      flip(currentCol, currentRow);
      flip(currentCol + 1, currentRow);
      flip(currentCol, currentRow + 1);
      flip(currentCol + 1, currentRow + 1);
    }
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
  fill(0,255,0,100);                                                                           //draws the overlay on current squares
  rect(currentCol * rectWidth, currentRow * rectHeight, rectWidth, rectHeight);
  fill(0,150,0,100);
  if(crossOrSquare === 0){                                                                     //draws the overlay on surrounding squares
    rect((currentCol - 1) * rectWidth, currentRow * rectHeight, rectWidth, rectHeight);
    rect((currentCol + 1) * rectWidth, currentRow * rectHeight, rectWidth, rectHeight);
    rect(currentCol * rectWidth, (currentRow - 1) * rectHeight, rectWidth, rectHeight);
    rect(currentCol * rectWidth, (currentRow + 1) * rectHeight, rectWidth, rectHeight);
  }
  else{
    rect((currentCol + 1) * rectWidth, (currentRow + 1) * rectHeight, rectWidth, rectHeight);
    rect((currentCol + 1) * rectWidth, currentRow * rectHeight, rectWidth, rectHeight);
    rect(currentCol * rectWidth, (currentRow + 1) * rectHeight, rectWidth, rectHeight);
  }
}

function drawGrid(){
  // Render a grid of squares - fill color set according to data stored in the 2D array
  for (let x = 0; x < NUM_COLS ; x++){
    for (let y = 0; y < NUM_ROWS; y++){
      fill(gridData[y][x]);
      rect(x*rectWidth, y*rectHeight, rectWidth, rectHeight);
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
}

function randomize(){
  let counter = 0;
  for (let x = 0; x < NUM_COLS ; x++){
    for (let y = 0; y < NUM_ROWS; y++){
      counter = int(random(0,2));          //randomly picks squares from the array gridData to flip
      if(counter === 0){
        if(gridData[y][x] === 0){
          gridData[y][x] = 255;
        }
        else if(gridData[y][x] === 255){
          gridData[y][x] = 0;
        }
      }
    }
  }
  print(counter);
}