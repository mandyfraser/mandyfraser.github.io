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
  push();
  translate(width/2,height/2);
  strokeWeight(9);
  ellipse(0,0,500,500);
  for(let i = 0; i < 360; i += 6){
    push();
    rotate(radians(i));
    if (i % 30 === 0){
      //thick line
      strokeWeight(5);
      line(180, 0, 240, 0);
    }
    else{
      //thin line
      strokeWeight(2);
      line(200,0,240,0);
    }
    pop();
  }
  //draw clock hands
  //the seconds hand
  push();
  rotate(radians(frameCount));
  strokeWeight(2);
  line(0,0,250,0);
  pop();

  //the minutes hand?
  push();
  strokeWeight(4);
  rotate(radians(frameCount/6));
  line(0,0,0,-150);


  pop();

  pop();
}
