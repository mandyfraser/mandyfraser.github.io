// Terrain Generation and Perlin Noise
// Mandy Fraser
// 16/03/19
//
// Extra for Experts:
// I included the draw flag function and visualized the average height per frame.

let rectSize = 1;
let start = 0;
let currentHeight = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CORNERS);
}

function generateTerrain(){
  // background(0);
  let xOff = start;
  let highestX = 0;
  let highest = height;
  let heights = 0;
  for (let x = 0; x < width; x += rectSize){
    let currentHeight = noise(xOff) * height;
    heights += currentHeight;                   //add up all of the heights/y values
    if (currentHeight < highest){
      highest = currentHeight;
      highestX = x;
    }
    fill(0);
    stroke(0);
    rect(x,noise(xOff) * height,x + rectSize,height);
    xOff += 0.01;
  }
  fill(255,0,0);
  drawFlag(highestX,highest);
  calculateAverage(heights);
  start += 0.01;
}

function drawFlag(flagX,flagY){
  rect(flagX,flagY,flagX + 1, flagY - 30);
  triangle(flagX, flagY - 18, flagX, flagY - 30, flagX + 15, flagY - 24);
}

function calculateAverage(value){
  let average = value / width;             //rectSize = 1, so the number of rectangles/y values is equal to the width of the screen
  stroke(255,0,0);
  rect(0,average,width,average);
}

function draw() {
  background(220);
  generateTerrain();
}