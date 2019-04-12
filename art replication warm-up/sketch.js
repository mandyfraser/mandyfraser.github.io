// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let x1;
let x2;
let y1 = 0;
let y2;
let a = 3;
let b = 2;
let c = 1;

function setup() {
  createCanvas(windowWidth, windowHeight);
  x1 = width/2;
  noLoop();
}

function draw() {
  background(255);
  lines();
  print(y2);
}

function lines(){
  for(let i = 0; i < 100; i ++){
    x2 = random(width/3, width - (width/3));
    getY2();
    line(x1, y1, x2, y2);
    x1 = x2;
    y1 = y2;
    a += random(100,500);
    b += random(100,500);
    c += random(100,500);
  }
}

function getY2(){
  // y2 = ((a * (x2 ** 2)) + (b * x2) + c);  //ax^2 + bx + c
  y2 = random(y1, height);
  if(y2 >= height){
    y2 -= height;
  }
}