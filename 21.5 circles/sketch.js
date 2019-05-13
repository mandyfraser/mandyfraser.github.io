// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


function setup() {
  createCanvas(windowWidth, windowHeight);
  ellipseMode(CENTER);
  rectMode(CENTER);
  // noFill();
}

function draw() {
  randomSeed(4.9092)
  background(220);
  // circles(width/2,height/2,height);
  rectangles(width/2,height/2,height);
}

function circles(x,y,d){
  if(d > 5){
    ellipse(x,y,d,d);
    circles(x-d/2,y,d/2);
    circles(x+d/2,y,d/2);
    circles(x,y+d/2,d/2);
  }
}

function rectangles(x,y,sideLength){
  if(sideLength > 5){
    let half = sideLength / 2;
    fill(0,random(255),random(255),200);
    rect(x,y,sideLength,sideLength);
    rectangles(x-half,y-half,half);
    rectangles(x+half,y-half,half);
    rectangles(x+half,y+half,half);
    rectangles(x-half,y+half,half);
  }
}