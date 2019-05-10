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
  cantor(width*0.1,height*0.3,width*0.8,9);
}

function cantor(x,y,length,depth){
  if(depth > 1){
    line(x,y,x+length,y);
    y += 20;
    cantor(x,y,length/3,depth-1); //left third
    cantor(x+(length*2/3),y,length/3,depth-1); //right third
  }
}