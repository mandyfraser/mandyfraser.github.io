// Art Replication Warm-Up - Noll's "Gaussian Quadratic"
// Mandy Fraser
// 4/15/19
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let x1;
let x2;
let y1 = 5;
let y2;
let yIncrement = 1;

function setup() {
  createCanvas(windowWidth, windowHeight);
  x1 = width/2;
  noLoop();
}

function draw() {
  background(255);
  lines();
}

function lines(){
  for(let i = 0; i < 100; i ++){
    x2 = random(width/3, width - (width/3));   //the lines are only drawn in the middle third of the screen
    getY2();
    if(y2 >= height){              //if a line is going through the bottom of the screen, make it come back onto the screen from the top
      y2 = height;
      line(x1, y1, x2, y2);
      y2 = 0;
    }
    line(x1, y1, x2, y2);
    x1 = x2;                      //the first y-coordinate of each line is the same as the second y-coordinate of the last line
    y1 = y2;                      //keeps all the lines connected
  }
}

function getY2(){
  y2 = y1 + yIncrement;
  yIncrement += random(1,3);      //the y-coordinate of each line is 1-3 greater than the last
}