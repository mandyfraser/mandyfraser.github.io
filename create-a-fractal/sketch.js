// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let torusWidth = 50;
let angle = 5;
let x = 0;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  smooth();
}

function draw() {
  background(220);
  for(let i = 0 - width/2; i < width/2; i += torusWidth/2){
    x = i;
    push();
    //rotateX(radians(180));
    translate(torusWidth*2,0);
    toruses(x);
    pop();
  }
}

function toruses(xPosition,angle){
  if(xPosition > 0 - width/2 && xPosition < width/2){
    push();
    translate(xPosition,0);
    rotateY(radians(angle));
    torus(torusWidth);
    pop();
    toruses(x+angle+90);
  }
}