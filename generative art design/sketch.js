// Generative Art Design
// Mandy Fraser
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"



function setup() {
  createCanvas(4500, 3000);
  rectMode(CORNERS);
}

function drawThingy(){
  let xOff = 1;
  for(let x = 0; x <= width; x++){
    rect(x, noise(xOff) * height, x + 1, height);
    xOff += 0.01;
  }
}

function draw() {
  background(255);
  drawThingy();
}

function keyPressed(){
  if(key === " "){
    save();
  }
}