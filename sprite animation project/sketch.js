// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let idleSpritesR = [];
let idleSpritesL = [];
let direction = 0;  //0 = right, 1 = left
let counter = 4;
let speed = 1;

function preload(){
  for (let i = 4; i < 6; i++){
    idleSpritesR.push(loadImage("assets/sonic-" + i + ".png"));
  }
  for (let i = 11; i < 13; i++){
    idleSpritesL.push(loadImage("assets/sonic-" + i + ".png"));
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);
  if(direction === 0){
    image(idleSpritesR[counter],width/2,height/2);
  }
  if(direction === 1){
    image(idleSpritesL[counter],width/2,height/2);
  }
  if (frameCount % int(speed) === 0){
    counter ++;
    if (direction === 0){
      if (counter > 6){
        counter = 4;
      }
    }
    if (direction === 1){
      if (counter > 13){
        counter = 11;
      }
    }
  }
}

function keyPressed(){
  if (keyCode === RIGHT_ARROW){
    direction = 0;
  }
  if (keyCode === LEFT_ARROW){
    direction = 1;
  }
}