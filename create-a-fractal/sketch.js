// Create-a-fractal
// Mandy Fraser
// 5/27/19
//
// Production Rules:
// 1. draw torus
// 2. rotate around x axis in increments of 90 degrees
// 3. translate to the last x position plus the radius of the torus times two
// 4. rotate frameCount/2 degrees around y axis
// 5. rotate frameCount/2 degrees around z axis
// 6. repeat
//
// Extra for Experts:
// I built my fractal in three dimensions.

let torusRadius = 50;
let x;
let c = 0;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  x = 0 - width/2;
  smooth();
}

function draw() {
  background(220);
  for(let i = 0 - height/2; i < height/2; i += torusRadius){
    rotateY(radians(frameCount/2));
    rotateZ(radians(frameCount/2));
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
    torus(torusRadius,10);
    pop();
  }
  else{
    push();
    rotateX(radians(angle));
    translate(xPosition, yPosition);
    torus(torusRadius,10);
    pop();
    toruses(xPosition+torusRadius*2,0,angle+90);
  }
}