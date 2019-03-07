// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let z = 0;
let mouseClick = 0;
let previousMouseClick = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);
  mouseClicked();
  let squareSize = width/26;
  if (mouseClick > previousMouseClick){
    squareSize += 5;
  }
  else if (mouseClick < previousMouseClick){
    squareSize -= 5;
  }
  for (let x = 0; x <= width; x += squareSize){
    for (let y = 0; y <= height; y += squareSize){
      if (z === 0){
        chooseColours();
      }
      rect(x,y,squareSize,squareSize);
    }
  }
  z += 1;
  print(mouseClick);
  print(previousMouseClick);
}


function chooseColours(){
  let rColour = int(random(0,255));
  let gColour = int(random(0,255));
  let bColour = int(random(0,255));
  fill(rColour,gColour,bColour);
}

function mouseClicked(){
  if (mouseButton === RIGHT){
    mouseClick += 1;
    previousMouseClick = mouseClick;
  }
  else if (mouseButton === LEFT){
    mouseClick -= 1;
    previousMouseClick = mouseClick;

  }
}