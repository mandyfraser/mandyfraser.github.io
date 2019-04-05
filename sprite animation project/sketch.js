// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let sprites = [];
let direction = 0;  //0 = right, 1 = left
let counter = 0;
let speed = 25;
let xPosition;

function preload(){
  for (let i = 0; i < 31; i++){
    sprites.push(loadImage("assets/sonic-" + i + ".png"));
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  xPosition = width/2;
}

function draw() {
  background(255);
  if(keyCode === RIGHT_ARROW && keyIsPressed){
    direction = 0;
    move();
  }
  else if(keyCode === LEFT_ARROW && keyIsPressed){
    direction = 1;
    move();
  }
  else{
    idle();
  }
  // print(direction);
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

// function move(){
//   print(int(speed));
//   //if (frameCount % int(speed) === 0){
//     counter ++;
//     if (direction === 0){
//       if (counter > 19 || counter < 16){
//         counter = 16;
//       }
//       // image(sprites[counter],xPosition,height/2);
//       // xPosition += 10;
//     }
//     else if (direction === 1){
//       if (counter > 23 || counter < 20){
//         counter = 20;
//       }
//       // image(sprites[counter],xPosition,height/2);
//       // xPosition -= 10;
//     }
//   //}
//   image(sprites[counter],xPosition,height/2);
// }


function move(){
  print(int(speed));
  counter ++;
  if (direction === 0){
    xPosition += 7;
    if (counter > 19 || counter < 16){
      counter = 16;
    }
  }
  else if (direction === 1){
    xPosition -= 7;
    if (counter > 23 || counter < 20){
      counter = 20;
    }
  }
  image(sprites[counter],xPosition,height/2);
}