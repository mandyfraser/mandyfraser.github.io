// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let angle = 5;
let angleSpeed = 1;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  smooth();
}

function draw() {
  //angle = map(mouseX,0,width,-40,40);
  angle += angleSpeed;
  if(angle < -40 || angle > 40){
    angleSpeed *= -1;
  }
  background(220);
  // rotateY(radians(frameCount));  //third parameter = z direction (going into and coming out of the screen)
  // torus(100);
  push();
  rotateY(radians(frameCount));
  for(let i = 0; i < 360; i += 45){
    push();
    rotateY(radians(i));
    boxes(70);
    pop();
  }
  pop();
}

function boxes(size){
  if(size > 20){
    rotateZ(radians(angle));
    translate(size*1.5,0);
    box(size);
    boxes(size*0.8);
  }
}