// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let shapeArray = [];
let shapeSize;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  textFont("Georgia");
  textSize(width / 25);
  text("Mandy Fraser", 30,100);
}

function draw() {
  background(255);
  for (let i = 0; i < shapeArray.length; i++){
    keyTyped();
  }
}

function keyTyped() {
  let cur = [mouseX, mouseY, shapeSize];
  shapeArray.push(cur);
  if (key === "a") {
    rect(mouseX,mouseY,100,60);
  } 
  if (key === "s") {
    ellipse(mouseX,mouseY,100,100);
  }
  if (key === "d") {
    triangle(mouseX,mouseY,mouseX + 40,mouseY + 80, mouseX + 80, mouseY);
  }
}

function keyPressed() {
  if (keyCode === SHIFT) {
    fill(random(255),random(255),random(255));
    stroke(random(255),random(255),random(255));
  }
}