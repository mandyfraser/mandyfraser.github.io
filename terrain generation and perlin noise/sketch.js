// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let rectSize = 5;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
}

function generateTerrain(){
  for (let x = 0; x < windowWidth; x += rectSize){
    // rect(x,height,rectSize,random(-20,-500));
    rect(x,height,rectSize,noise(0.01));
  }
}

function keyPressed(){
  if (keyCode === LEFT_ARROW){
    rectSize -= 1;
  }
  else if (keyCode === RIGHT_ARROW){
    rectSize += 1;
  }
  background(255);
  fill(100);
  generateTerrain();
}