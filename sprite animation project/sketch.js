// Sprite Animation Project
// Mandy Fraser
// 07/04/19
//
// Extra for Experts:
// I stored all my sprites in the same array and made it so the sprite would never go off the screen and it would have a different animation when on the edge of the screen.

let sprites = [];
let direction = 0;  //0 = right, 1 = left
let counter = 0;
let speed = 25;
let xPosition;

function preload(){
  for (let i = 0; i < 32; i++){
    sprites.push(loadImage("assets/sonic-" + i + ".png"));
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
  xPosition = width/2;
}

function draw() {
  background(255);
  if(keyCode === RIGHT_ARROW && keyIsPressed){        //if the right or left arrow keys are pressed, the sprite will move in that direction
    direction = 0;
    move();
  }
  else if(keyCode === LEFT_ARROW && keyIsPressed){
    direction = 1;
    move();
  }
  else{
    idle();                                          //if the left and right arrow keys aren't being pressed, the sprite will cycle through its idle animation
  }
  print(counter);
}

function idle(){
  image(sprites[counter],xPosition,height/2);
  if (frameCount % int(speed) === 0){
    counter ++;
    if (direction === 0){
      if (counter > 7){
        counter = 0;
      }
    }
    else if (direction === 1){
      if (counter > 15 || counter < 8){
        counter = 8;
      }
    }
  }
}

function move(){
  print(int(speed));
  if(frameCount % int(speed) === 0){
    counter ++;
  }
  if (direction === 0){
    if (xPosition < width - sprites[counter].width/5){      //keep sonic from going off the edge of the screen
      xPosition += 7;                                       //change sonic's x position when the arrow keys are pressed
      if (counter > 19 || counter < 16){
        counter = 16;
      }
    }
    else{
      if (counter > 27 || counter < 24){
        counter = 24;
      }
    }
  }
  else if (direction === 1){
    if (xPosition > 0 + sprites[counter].width/5){
      xPosition -= 7;
      if (counter > 23 || counter < 20){
        counter = 20;
      }
    }
    else{
      if (counter >= 31 || counter < 28){
        counter = 28;
      }
    }
  }
  image(sprites[counter],xPosition,height/2);
}