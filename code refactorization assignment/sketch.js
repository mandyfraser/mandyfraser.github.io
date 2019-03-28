// Code Refactorization Exercises
// Mandy Fraser
// 3/28/19
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

////////////////////////////////////
//EXERCISE 1
///////////////////////////////////

// let x,y,changeX,changeY;

// function setup() {
//   createCanvas(windowWidth, windowHeight);
//   x = 200;
//   y = 300;
//   changeX = random(3,8);
//   changeY = random(3,8);
// }

// function draw() {
//   moveRect();
//   background(80,80,80);
//   rect(x,y,250,75);
// }

// function moveRect(){
//   x += changeX;   //every time the rectangle is drawn, its x and y positions change by between 3-8
//   y += changeY;
//   if (y >= height - 75 || y <= 0){ //if the rectangle is moving above or below screen, make it go in the opposite direction 
//     changeY = changeY * -1;
//   }
//   if (x >= width - 250 || x <= 0){ //if the rectangle is moving off the screen to the right or left, make it go in the opposite direction
//     changeX = changeX * -1;
//   }
// }


///////////////////////////////////
//EXERCISE 2
///////////////////////////////////

// function setup() {
//   createCanvas(480, 270);
// }

// function draw() {
//   background(255);
//   stroke(0);
//   line(240, 0, 240, 270);  //divide part of the screen into four quadrants
//   line(0, 135, 480, 135);
//   noStroke();
//   fill(0);
//   if (mouseX < 240 && mouseY < 135){
//     rect(0,0,240,135);
//   }
//   else if (mouseX > 240 && mouseY < 135){
//     rect(240,0,240,135);
//   }                                            //fill in the rectangles with black whenever the mouse is hovering over them
//   else if (mouseX < 240 && mouseY > 135){
//     rect(0,135,240,135);
//   }
//   else if (mouseX > 240 && mouseY > 135){
//     rect(240,135,240,135);
//   }
// }
