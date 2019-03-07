// Rollover
// Mandy Fraser
// 06/03/2019
//
// Extra for Experts:
// I chose other colours for the fade and I implemented additional functionality when the mouse is clicked in the top left square and the bottom right square

let quadrant = 0;

let quad1R = 0;
let quad1G = 0;
let quad1B = 0;
let quad2R = 0;
let quad2G = 0;
let quad2B = 0;
let quad3R = 0;
let quad3G = 0;
let quad3B = 0;
let quad4R = 0;
let quad4G = 0;
let quad4B = 0;

let lightsOff;
let lightSwitch = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);
  fill(255);
  if (mouseX <= windowWidth/2 && mouseY <= windowHeight/2){                      //find out where the mouse is
    quadrant = 1;
  }
  else if (mouseX > windowWidth/2 && mouseY <= windowHeight/2){
    quadrant = 2;
  }
  else if (mouseX <= windowWidth/2 && mouseY > windowHeight/2){
    quadrant = 3;
  }
  else if (mouseX > windowWidth/2 && mouseY > windowHeight/2){
    quadrant = 4;
  }

  if (quadrant === 1 && lightsOff){    //if the top left square is clicked, all the squares become black until the mouse moves off the square
    background(0);
  }
  else{
    lightsOff = false;
    if (quadrant === 1){                                      //quadrant 1 (top left square)

      quad1R = 0;
      quad1G = 17;
      quad1B = 64;
    }
    else{
      quad1R += 2;
      quad1G += 2;
      quad1B += 2;
    }
    quad1R = constrain(quad1R,0,90);
    quad1G = constrain(quad1G,0,101);
    quad1B = constrain(quad1B,0,131);
    fill(quad1R,quad1G,quad1B);
    rect(0,0,windowWidth/2,windowHeight/2);


    if (quadrant === 2){                                       //quadrant 2 (top left square)
      quad2R = 0;
      quad2G = 17;
      quad2B = 64;
    }
    else{
      quad2R += 2;
      quad2G += 2;
      quad2B += 2;
    }
    quad2R = constrain(quad2R,0,90);
    quad2G = constrain(quad2G,0,101);
    quad2B = constrain(quad2B,0,131);
    fill(quad2R,quad2G,quad2B);
    rect(windowWidth/2,0,windowWidth/2,windowHeight/2);


    if (quadrant === 3){                                       //quadrant 3 (bottom left square)
      quad3R = 0;
      quad3G = 17;
      quad3B = 64;
    }
    else{
      quad3R += 2;
      quad3G += 2;
      quad3B += 2;
    }
    quad3R = constrain(quad3R,0,90);
    quad3G = constrain(quad3G,0,101);
    quad3B = constrain(quad3B,0,131);
    fill(quad3R,quad3G,quad3B);
    rect(0,windowHeight/2,windowWidth/2,windowHeight/2);


    if (quadrant === 4 && lightSwitch === 1){                   //quadrant 4 (bottom right square)
      quad4R = 0;
      quad4G = 0;
      quad4B = 0;
    }
  
    else if (quadrant === 4 && lightSwitch === 2){
      quad4R = 255;
      quad4G = 255;
      quad4B = 255;
    }
    else if (quadrant === 4){
      quad4R = 0;
      quad4G = 17;
      quad4B = 64;
    }
    else{
      quad4R += 2;
      quad4G += 2;
      quad4B += 2;
    }
    if (lightSwitch === 2){
      quad4R = constrain(quad4R,0,255);
      quad4G = constrain(quad4G,0,255);
      quad4B = constrain(quad4B,0,255);
    }
    else{
      quad4R = constrain(quad4R,0,90);
      quad4G = constrain(quad4G,0,101);
      quad4B = constrain(quad4B,0,131);
    }
    fill(quad4R,quad4G,quad4B);
    rect(windowWidth/2,windowHeight/2,windowWidth/2,windowHeight/2);
  }
}


function mousePressed(){   //extra for experts functionality
  if (quadrant === 1){
    lightsOff = true;
  }
  else if (quadrant === 4){                 //0 = off, 1 = black, 2 = white
    if (lightSwitch < 2){
      lightSwitch += 1;
    }
    else if (lightSwitch === 2){
      lightSwitch = 0;
    }
  }
}