// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let lionL, lionR;
let direction = 1;  //1 = left, 2 = right
let pinImages = [];
let counter = 0;
let speed = 1;  //1-8

function preload(){
  lionL = loadImage("assets/lion-left.png");
  lionR = loadImage("assets/lion-right.png");
  for (let i = 0; i < 9; i++){
    pinImages.push(loadImage("assets/pin-0" + i + ".png"));
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);
  lions();
  image(pinImages[counter],width/2,height/2);
  speed = map(mouseX,0,width,1,8);
  if (frameCount % int(speed) === 0){    //map returns floats, can't do % division with floats
    counter ++;
    if (counter > 8){
      counter = 0;
    }
  }
}

function lions(){
  moving();
  imageMode(CENTER);
  push();
  translate(mouseX,mouseY);
  scale(0.5);
  if (direction === 1){
    image(lionL,0,0);
  }
  else{
    image(lionR,0,0);
  }
  pop();
}

function moving(){
  //determine the direction of mouse movement
  if(mouseX > pmouseX){ //right
    direction = 2;
  }
  else if(mouseX < pmouseX){
    direction = 1;
  }
}