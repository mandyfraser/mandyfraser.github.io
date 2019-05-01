// Generative Art Design
// Mandy Fraser
// 4/15/19
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

function setup() {
  createCanvas(4500, 3000);
  rectMode(CORNERS);
  noLoop();
}

function drawSpiralOutside(){
  let xOff = 1;
  let squareWidth = 0.1;
  for(let x = 0 - (width/2); x < width/2; x++){          //was (let x = 0 - (width/2); x <= width/2; x++), then (let x = 0 - 360; x < 360; x++)
    if(x % 50 === 0){
      // stroke(205,x,330);
      stroke(205,map(x,-width /2, width/2, 0, 255),330);
    }
    push();
    rotate(radians(x));  //rotate by x or x*2?
    rect(x, noise(xOff) * -height/2, x + squareWidth, 0);
    pop();
    xOff += 0.025;
  }
}

function drawSpiralInside(){
  let xOff = 1;
  let squareWidth = 0.1;
  for(let x = 0 - (width/2); x < width/2; x++){          //was (let x = 0 - (width/2); x <= width/2; x++), then (let x = 0 - 360; x < 360; x++)
    if(x % 50 === 0){
      stroke(205,map(x,-width /2, width/2, 0, 255),330);
    }
    push();
    rotate(radians(x));  //rotate by x or x*2?
    rect(x, noise(xOff) * height/2, x + squareWidth, 0);
    pop();
    xOff += 0.025;
  }
}

function draw() {
  colorMode(RGB);
  background(0);
  colorMode(HSB,360);
  // stroke(255);
  push();
  translate(width/2, height/2);
  drawSpiralOutside();
  drawSpiralInside();
  pop();
}

function keyPressed(){
  if(key === " "){
    save();
  }
}