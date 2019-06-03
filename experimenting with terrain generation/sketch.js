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
let rects = [];

function preload(){
  biker = loadImage("assets/spr_bike2man_0.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  bw = new BackWheel(0,0);
  fw = new FrontWheel(0+50,0);
}

function generateTerrain(){
  let xOff = start;
  for(let i = 0; i < width; i+= rectSize){
    x = i;
    currentHeight = noise(xOff) * height;
    let y = -height + map(noise(xOff),0,1,height,0);
    fill(x+5,x+25,x*2);
    rect(x,height,rectSize,y);
    // push();
    // translate(x,y*-1);
    // pop();
    xOff += 0.001;
  }
  start += 0.004;
}

function draw() {
  background(255);
  generateTerrain();
  bw.move();
  bw.display();
  fw.move();
  fw.display();
}

class BackWheel{
  constructor(x_,y_){
    this.x = x_;
    this.y = y_;
    this.xSpeed = 10;
    this.ySpeed = 0;
    this.GRAV = -0.02;
    this.hit = false;
  }

  move(){
    if(this.hit === false){
      this.ySpeed += this.GRAV;
    }
    this.y += this.ySpeed;
  }

  display(){
    ellipseMode(CENTER);
    ellipse(this.x, this.y, 20);
  }
}

class FrontWheel{
  constructor(x_,y_){
    this.x = x_;
    this.y = y_;
    this.xSpeed = 10;
    this.ySpeed = 0;
    this.GRAV = -0.02;
    this.hit = false;
  }

  move(){
    if(this.hit === false){
      this.ySpeed += this.GRAV;
    }
    this.y += this.ySpeed;
  }

  display(){
    ellipseMode(CENTER);
    ellipse(this.x, this.y, 20);
  }
}

// class Biker{
//   constructor(x1_,y1_,x2_,y2_){
//     this.xBackWheel = x1_;
//     this.yBackWheel = y1_;
//     this.xFrontWheel = x2_;
//     this.yFrontWheel = y2_;
//     this.xSpeed = 10;
//     this.ySpeed = 0;
//     this.GRAV = -0.02;
//     this.hitBackWheel = false;
//     this.hitFrontWheel = true;
//   }

//   move(){
    
//   }

//   collide(){
//     this.hitBackWheel = 
//   }

//   display(){
//     imageMode(CENTER);
//     image(biker, width/2, height/2, 144, 111);
//   }
// }