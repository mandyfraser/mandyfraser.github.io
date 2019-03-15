// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let tWidth = 1;
let start = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CORNERS);
}

function drawTerrain(){
  //do all the work to draw terrain one frame
  let xOff = start;
  for (let x = 0; x < width; x += tWidth){
    let currentHeight = noise(xOff) * height;         //for the flag thing
    rect(x,noise(xOff) * height,x + tWidth, height);
    xOff += 0.01;
  }
  start += 0.01;      //for the scrolling thing
}

function draw() {
  background(220);
  drawTerrain();
}
