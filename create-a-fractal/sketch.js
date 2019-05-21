// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let torusDiameter = 50;
let angle = 5;
let x = 0;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  smooth();
  noLoop();
}

function draw() {
  background(220);
  for(let i = 0 - width/2; i < width/2; i += torusDiameter/2){
    x = i;
    push();
    //rotateX(radians(180));
    // translate(x,0);
    toruses(x,90);
    pop();
  }
}

function toruses(xPosition,angle){
  if(xPosition > 0 - width/2 && xPosition < width/2){
    rotateX(radians(angle));
    translate(xPosition,0);
    torus(torusDiameter,10);
    toruses(x+torusDiameter*2,angle+90);          //was toruses(x+angle+90,180);
  }
}