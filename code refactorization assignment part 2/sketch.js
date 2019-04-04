// Code Refactorization Assignment Part 2
// Mandy Fraser
// 4/4/19
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

////////////////////////////////////////
//Black and White Target
////////////////////////////////////////

// function setup() {
//   createCanvas(400, 400);
// }

// function draw() {
//   background(240);
//   drawCircles();
// }

// function drawCircles() {
//   let POSITION = 200;
//   let size = 400;
//   for(let i = 0; i < 10; i++){   //draw 10 circles, size goes down by 40 each time
//     size -= 40; 
//     ellipse(POSITION, POSITION, size, size);
//   }
// }


//////////////////////////////////////////
//Chess Board
//////////////////////////////////////////

// let colourCounter = 1;
// let colour;

// function setup() {
//   createCanvas(600, 600);
// }

// function draw() {
//   makeChessBoard();
// }

// function makeChessBoard(){
//   let SIZE = 75;
//   fill(255);
//   for(let x = 0; x <= 525; x += SIZE){
//     for(let y = 0; y <= 525; y += SIZE){    //create a grid
//       colourCounter += 1;
//       chooseColour();
//       fill(colour);
//       rect(x,y,SIZE,SIZE);       //make a square at the x and y position
//     }
//     colourCounter += 1;
//   }
// }

// function chooseColour(){        //alternate between black and white
//   if(colourCounter % 2 === 0){
//     colour = 255;
//   }
//   else{
//     colour = 0;
//   }
// }