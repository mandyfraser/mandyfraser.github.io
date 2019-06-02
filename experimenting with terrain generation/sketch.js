// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let rectSize = 1;
let start = 0;
let biker;
let currentHeight;
let x,y;
let b;

function preload(){
  biker = loadImage("assets/spr_bike2man_0.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  b = new Biker(x,y);
}

function generateTerrain(){
  let xOff = start;
  for(let i = 0; i < width; i+= rectSize){
    x = i;
    currentHeight = noise(xOff) * height;
    let y = -height + map(noise(xOff),0,1,height,0);
    fill(x+5,x+25,x*2);
    rect(x,height,rectSize,y);
    push();
    translate(x,y*-1);
    pop();
    xOff += 0.001;
  }
  start += 0.004;
}

function draw() {
  background(255);
  generateTerrain();
  b.move();
  b.display();
}

class Biker{
  constructor(x_,y_){
    this.x = x_;
    this.y = y_;
    this.xSpeed = 10;
    this.ySpeed = 0;
    this.GRAV = -0.02;
  }

  move(){
    this.floorCollision();
  }

  floorCollision(){
    if(this.y > currentHeight){
      this.y = height;
      this.y -= currentHeight;
    }
  }

  display(){
    imageMode(CENTER);
    image(biker, width/2, height/2, 144, 111);
  }
}