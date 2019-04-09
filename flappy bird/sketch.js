// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let backgroundImage;
let birdImages = [];
let counter = 1;

let position;
let gravity;
let velocity;
let b;

function preload(){
  backgroundImage = loadImage("assets/background.png");
  for (let i = 1; i < 4; i ++){
    birdImages.push(loadImage("assets/Bird" + i + ".png"));
  }
}

class Bird{
  //constructor and properties
  constructor(x_,y_){
    this.position = createVector(x_,y_);
    this.gravity = 1;
    this.velocity = 0;
  }

  update(){
    this.velocity += this.gravity;
    this.position.y += this.velocity;
    if(this.position.y > height){
      this.position.y = height;
      this.velocity = 0;
    }
    if(this.position.y < 0){
      this.position.y = 0;
      this.velocity = 0;
    }
  }

  move(){

  }

  display(){
    imageMode(CENTER);
    image(birdImages[counter], 0 + (birdImages[counter].width/2) , this.position.y);
  }
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  b = new Bird(0,height/2);
}

function draw() {
  imageMode(CORNERS);
  background(backgroundImage);
  b.update();
  b.display();
}
