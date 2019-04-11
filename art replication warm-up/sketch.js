// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


function setup() {
  createCanvas(windowWidth, windowHeight);
  noLoop();
}

function draw() {
  background(255);
  lines();
}

function lines(){
  let a = 3;
  let b = 2;
  let c = 1;
  let x1 = width/2;
  let x2;
  for(let i = 0; i < 100; i ++){
    x2 = a * (-(((random(0,100) - b)^2) / (2 * (c ^ 2))));
    line(x1, (a * (x1 ^ 2)) + (b * x1) + c, x2,  (a * x2 ^ 2) + (b * x2) + c);
    x1 = x2;
    a += random(0,100);
    b += random(0,100);
    c += random(0,100);
  }
}