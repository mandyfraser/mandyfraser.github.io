// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let runSquares = true;
let mouseClick = 1;
let commonDenominators = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  if(mouseClicked()){
    runSquares = true;
  }
  if (runSquares){
    squares();
  }
  // let squareSize = width/26;
  // if (mouseClick === 2){
  //   squareSize += 5;
  //   mouseClick = 1;
  // }
  // else if (mouseClick === 0){
  //   squareSize -= 5;
  //   mouseClick = 1;
  // for (let x = 0; x <= width; x += squareSize){
  //   for (let y = 0; y <= height; y += squareSize){
  //     chooseColours();
  //     rect(x,y,squareSize,squareSize);
  //   }
  // }
  print(mouseClick);
}

function mouseClicked(){
  if (mouseButton === RIGHT){
    mouseClick = 2;
  }
  else if (mouseButton === LEFT){
    mouseClick = 0;
  }
}

function squares(){
  denom();
  let squareSize = width/random(commonDenominators);
  if (mouseClick === 2){
    squareSize += 5;
    mouseClick = 1;
  }
  else if (mouseClick === 0){
    squareSize -= 5;
    mouseClick = 1;
  }
  for (let x = 0; x <= width; x += squareSize){
    for (let y = 0; y <= height; y += squareSize){
      chooseColours();
      rect(x,y,squareSize,squareSize);
    }
  }
  runSquares = false;
}

function chooseColours(){
  let rColour = int(random(0,255));
  let gColour = int(random(0,255));
  let bColour = int(random(0,255));
  fill(rColour,gColour,bColour);
}

function denom(){
  for (let i = 0; i < 500; i++){
    if (width % i === 0 && height % i === 0){
      append(commonDenominators, i);
    }
  }
}