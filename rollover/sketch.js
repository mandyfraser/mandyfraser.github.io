// Rollover
// Mandy Fraser
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let quadrant = 0;
let quad1R = 0;
let quad1G = 0;
let quad1B = 0;
let quad2R = 0;
let quad3Colour = 0;
let quad4Colour = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);
  fill(255);
  //find out where the mouse is
  if (mouseX <= windowWidth/2 && mouseY <= windowHeight/2){
    quadrant = 1;
  }
  else if (mouseX > windowWidth/2 && mouseY <= windowHeight/2){
    quadrant = 2;
  }
  else if (mouseX <= windowWidth/2 && mouseY > windowHeight/2){
    quadrant = 3;
  }
  else if (mouseX > windowWidth/2 && mouseY > windowHeight/2){
    quadrant = 4;
  }
  if (quadrant === 1){
    quad1Colour = 0;
  }
  else{
    quad1Colour += 4;
  }
  quad1Colour = constrain(quad1Colour,0,255);
  fill(quad1Colour);
  rect(0,0,windowWidth/2,windowHeight/2);
  if (quadrant === 2){
    quad2Colour = 0;
  }
  else{
    quad2Colour += 4;
  }
  quad2Colour = constrain(quad2Colour,0,255);
  fill(quad2Colour);
  rect(windowWidth/2,0,windowWidth/2,windowHeight/2);
  if (quadrant === 3){
    quad3Colour = 0;
  }
  else{
    quad3Colour += 4;
  }
  quad3Colour = constrain(quad3Colour,0,255);
  fill(quad3Colour);
  rect(0,windowHeight/2,windowWidth/2,windowHeight/2);
  if (quadrant === 4){
    quad4Colour = 0;
  }
  else{
    quad4Colour += 4;
  }
  quad4Colour = constrain(quad4Colour,0,255);
  fill(quad4Colour);
  rect(windowWidth/2,windowHeight/2,windowWidth/2,windowHeight/2);
}