// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let squareArray = [];
let ellipseArray = [];
let triangleArray = [];
let shapeSize;
let shape = " ";

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  textFont("Georgia");
  textSize(width / 25);
  text("Mandy Fraser", 30,100);
}

function draw() {
  background(255);
  for (let i = 0; i < squareArray.length; i++){
    rect(squareArray[i][0], squareArray[i][1], squareArray[i][2], squareArray[i][3]);
  }
  for (let i = 0; i < ellipseArray.length; i++){
    ellipse(ellipseArray[i][0], ellipseArray[i][1], ellipseArray[i][2], ellipseArray[i][3]);
  }
  for (let i = 0; i < triangleArray.length; i++){
    triangle(triangleArray[i][0], triangleArray[i][1], triangleArray[i][2], triangleArray[i][3]);
  }
  if (shape === "square"){
    rect(mouseX,mouseY,100,60);
  }
  ellipse(mouseX,mouseY,100,100);
  triangle(mouseX,mouseY,mouseX + 40,mouseY + 80, mouseX + 80, mouseY);
  //keyTyped();
}

function keyTyped() {
  let cur = [mouseX, mouseY, shapeSize];
  if (key === "a") {
    shape = "square";
    squareArray.push(cur);
    rect(mouseX,mouseY,100,60);
  } 
  if (key === "s") {
    ellipseArray.push(cur);
    ellipse(mouseX,mouseY,100,100);
  }
  if (key === "d") {
    triangleArray.push(cur);
    triangle(mouseX,mouseY,mouseX + 40,mouseY + 80, mouseX + 80, mouseY);
  }
}

function keyPressed() {
  if (keyCode === SHIFT) {
    fill(random(255),random(255),random(255));
    stroke(random(255),random(255),random(255));
  }
}