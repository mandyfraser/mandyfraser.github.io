// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);
  ellipse(width/2,height/2,300);

  push();
  for(let i = 0; i <= 60; i ++){
    line(width/2, 270, width/2, 280);
    translate(20,20);
    rotate(radians(6));
  }
}
