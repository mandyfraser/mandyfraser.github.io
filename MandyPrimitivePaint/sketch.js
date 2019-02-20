// Primitive Paint
// Mandy Fraser
// 2/20/2019
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  textFont("Georgia");
  textSize(width / 25);
  text("Mandy Fraser", 30,100);
  rectMode(CENTER);
}

function draw() { //autonomous art
  rect(random(windowWidth),random(windowHeight),random(50),random(50));
  ellipse(random(windowWidth),random(windowHeight),random(50),random(50));
}

function keyTyped() { //user-added shapes
  if (key === "a") {
    rect(mouseX,mouseY,200,120);
  } 
  if (key === "s") {
    ellipse(mouseX,mouseY,200,200);
  }
  if (key === "d") {
    triangle(mouseX,mouseY,mouseX + 80,mouseY + 160, mouseX + 160, mouseY);
  }
  if (key === " "){
    background(255);
    text("Mandy Fraser", 30,100); //so it only erases the shapes, not the text
  }
}

function keyPressed() { //change colour
  if (keyCode === SHIFT) {
    fill(random(255),random(255),random(255));
    stroke(random(255),random(255),random(255));
  }
}