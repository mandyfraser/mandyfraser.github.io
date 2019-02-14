// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let state = 0; //0 = top, 1 = right, 2 = bottom, 3 = left
const rectSize = 30;
let x = 0;
let y = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);
  if (state === 0) { //on top, going right
    x += 10;
    if (x > windowWidth - rectSize) {
      state = 1;
    } 
  }
  else if (state === 1) { //on right, going down
    y += 10;
    if (y > windowHeight - rectSize) {
      state = 2;
    }
  }
  else if (state === 2) { //on bottom, going left
    x -= 10;
    if (x < 0) {
      state = 3;
    }
  }
  else if (state === 3) { //on left, going up
    y -= 10;
    if (y < 0) {
      state = 0;
    }
  }
  rect(x,y,rectSize,rectSize);
  print(state);
}