// Generative Art Design
// Mandy Fraser
// 4/15/19
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CORNERS);
  noLoop();
}

function drawThingyOutside(){
  let xOff = 1;
  let squareWidth = 0.1;
  let thingyHue;
  for(let x = 0 - (width/2); x < width/2; x++){          //was (let x = 0 - (width/2); x <= width/2; x++), then (let x = 0 - 360; x < 360; x++)
    thingyHue = constrain(x, 100, 275);
    if(thingyHue % 50 === 0){
      stroke(thingyHue % 360,280,330);
    }
    push();
    rotate(radians(x*2));  //rotate by x or x*2?
    rect(x, noise(xOff) * -height/2, x + squareWidth, 0);
    pop();
    xOff += 0.025;
  }
}

function drawThingyInside(){
  let xOff = 1;
  let squareWidth = 0.1;
  let thingyHue;
  for(let x = 0 - (width/2); x < width/2; x++){          //was (let x = 0 - (width/2); x <= width/2; x++), then (let x = 0 - 360; x < 360; x++)
    thingyHue = constrain(x, 100, 275);
    if(thingyHue % 50 === 0){
      stroke(-x % 360,280,330);
    }
    push();
    rotate(radians(x*2));  //rotate by x or x*2?
    rect(x, noise(xOff) * height/2, x + squareWidth, 0);
    pop();
    xOff += 0.025;
  }
}

function draw() {
  colorMode(RGB);
  background(255);
  colorMode(HSB,360);
  push();
  translate(width/2, height/2);
  drawThingyOutside();
  drawThingyInside();
  pop();
}

function keyPressed(){
  if(key === " "){
    save();
  }
}