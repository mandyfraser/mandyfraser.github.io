// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let rectSize = 1;
let start = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function generateTerrain(){
  let xOff = start;
  for(let x = 0; x < width; x+= rectSize){
    let y = -height + map(noise(xOff),0,1,height,0);
    fill(x+5,x+25,x*2);
    rect(x,height,rectSize,y);
    xOff += 0.001;
  }
  start += 0.01;
}

function draw() {
  background(255);
  generateTerrain();
}
