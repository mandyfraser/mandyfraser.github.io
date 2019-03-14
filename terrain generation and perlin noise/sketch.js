// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let rectSize = 5;
let xoff1 = 0;
let xoff2 = 10000;


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  // let x = map(noise(xoff),0,1,0,width);
  // xoff += 0.01;
}

function generateTerrain(){
  // background(0);
  for (let i = 0; i < windowWidth; i += rectSize){
    // fill(0,random(0,255),random(0,255));
    let x = map(noise(xoff1),0,1,0,width);
    let y = map(noise(xoff2),0,1,0,height);
    xoff1 += 0.01;
    xoff2 += 0.01;
    rect(x,y,rectSize,random(-20,-500));
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