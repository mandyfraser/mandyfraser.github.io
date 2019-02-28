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
let quad2G = 0;
let quad2B = 0;
let quad3R = 0;
let quad3G = 0;
let quad3B = 0;
let quad4R = 0;
let quad4G = 0;
let quad4B = 0;

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
    quad1R = 0;
    quad1G = 0;
    quad1B = 0;
  }
  else{
    quad1R += 4;
    quad1G += 4;
    quad1B += 4;
  }
  quad1R = constrain(quad1R,0,255);
  quad1G = constrain(quad1G,0,255);
  quad1B = constrain(quad1B,0,255);
  fill(quad1R,quad1G,quad1B);
  rect(0,0,windowWidth/2,windowHeight/2);
  if (quadrant === 2){
    quad2R = 0;
    quad2G = 0;
    quad2B = 0;
  }
  else{
    quad2R += 4;
    quad2G += 4;
    quad2B += 4;
  }
  quad2R = constrain(quad2R,0,255);
  quad2G = constrain(quad2G,0,255);
  quad2B = constrain(quad2B,0,255);
  fill(quad2R,quad2G,quad2B);
  rect(windowWidth/2,0,windowWidth/2,windowHeight/2);
  if (quadrant === 3){
    quad3R = 0;
    quad3G = 0;
    quad3B = 0;
  }
  else{
    quad3R += 4;
    quad3G += 4;
    quad3B += 4;
  }
  quad3R = constrain(quad3R,0,255);
  quad3G = constrain(quad3G,0,255);
  quad3B = constrain(quad3B,0,255);
  fill(quad3R,quad3G,quad3B);
  rect(0,windowHeight/2,windowWidth/2,windowHeight/2);
  if (quadrant === 4){
    quad4R = 0;
    quad4G = 0;
    quad4B = 0;
  }
  else{
    quad4R += 4;
    quad4G += 4;
    quad4B += 4;
  }
  quad4R = constrain(quad4R,0,random); //was 255 instead of random, worked fine
  quad4G = constrain(quad4G,0,random);
  quad4B = constrain(quad4B,0,random);
  fill(quad4R,quad4G,quad4B);
  rect(windowWidth/2,windowHeight/2,windowWidth/2,windowHeight/2);
}