// Multi-Coloured Grid
// Mandy Fraser
// 3/21/19
//
// Extra for Experts:
// I added a colour scheme and made it so the squares wouldn't go off the screen.

let runSquares = true;       //determines if the squares should be drawn again
let commonDenominators = [];   //holds numbers that the width and height of the squares can be so they don't go off the screen
let rColour,gColour,bColour;
let squareSize;  //width and height of the squares
let sizeSelection;
let start = true;  //determines if this is the first time the squares are being drawn

function setup() {
  createCanvas(1400, 700);
}

function draw() {
  if (runSquares){
    denom();
    if (start){
      sizeSelection = commonDenominators.length / 2;
    }
    squareSize = commonDenominators[sizeSelection];
    squares();
  }
  start = false;
}

function mousePressed(){
  if (mouseButton === RIGHT){
    if (sizeSelection > 0){
      sizeSelection -= 1;
      runSquares = true;
    }
  }
  else if (mouseButton === LEFT){
    if (commonDenominators[0] > sizeSelection){
      sizeSelection += 1;
      runSquares = true;
    }
  }
}

function squares(){
  for (let x = 0; x <= width; x += squareSize){
    for (let y = 0; y <= height; y += squareSize){
      chooseColours();
      fill(rColour,gColour,bColour);
      rect(x,y,squareSize,squareSize);
    }
  }
  runSquares = false;
}

function chooseColours(){
  rColour = int(random(40,70));
  gColour = rColour;
  bColour = int(random(100,200));
}

function denom(){ //find common denominators
  for (let i = 1000; i > 0; i--){
    if (width % i === 0 && height % i === 0){   //if i can be evenly divisible by the size of the screen, add it to common denominators
      append(commonDenominators, i);
    }
  }
}