// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

///////////////////////////////////////
//Diagonal Line Generator
///////////////////////////////////////

const spacing = 50;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noLoop();
}

function diagonalAscending(x,y,s){
  line(x-s/2, y+s/2, x+s/2, y-s/2); 
}

function diagonalDescending(x,y,s){
  line(x-s/2, y-s/2, x+s/2, y+s/2);
}
  
function draw() {
  background(255);
  for(let x = spacing/2; x < width - spacing/2; x += spacing){
    for(let y = spacing/2; y < height - spacing/2; y += spacing){
      if(int(random(2)) === 0){   //int(random(2)) returns either a 0 or a 1
        diagonalDescending(x,y,spacing);
      }
      else{
        diagonalAscending(x,y,spacing);
      }
    }
  }
}