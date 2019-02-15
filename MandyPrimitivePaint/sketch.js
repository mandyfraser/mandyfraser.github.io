// Primitive Paint
// Mandy Fraser
// 2/15/2019
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

function keyTyped() {
  if (key === "a") {
    rect(mouseX,mouseY,random(300),random(300));
  } 
  if (key === "s") {
    ellipse(mouseX,mouseY,random(300),random(300));
  }
  if (key === "d") {
    triangle(mouseX,mouseY,mouseX + random(100),mouseY + random(200), mouseX + random(200), mouseY);
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