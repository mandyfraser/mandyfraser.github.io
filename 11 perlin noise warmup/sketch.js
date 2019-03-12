// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let xoff = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);
  let x = map(noise(xoff),0,1,0,width);
  ellipse(x,height/2,50,50);
  xoff += 0.01;
}