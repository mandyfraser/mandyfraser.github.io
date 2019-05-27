// Create-a-fractal
// Mandy Fraser
// 5/27/19
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let torusDiameter = 50;
let x;
let c = 0;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  x = 0 - width/2;
  smooth();
}

function draw() {
  background(220);
  for(let i = 0 - height/2; i < height/2; i += torusDiameter){
    rotateY(radians(frameCount/2));
    rotateX(radians(frameCount/2));
    fill(20,50,200);
    toruses(x,i,90);
  }
}

function toruses(xPosition,yPosition,angle){
  print(xPosition);
  if(xPosition > width/2){
    push();
    rotateX(radians(angle));
    translate(xPosition,yPosition);
    torus(torusDiameter,10);
    pop();
  }
  else{
    push();
    rotateX(radians(angle));
    translate(xPosition, yPosition);
    torus(torusDiameter,10);
    pop();
    toruses(xPosition+torusDiameter*2,0,angle+90);
  }
}