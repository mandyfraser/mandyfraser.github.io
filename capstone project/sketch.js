// Snowball Game
// Mandy Fraser
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let rectSize = 1;
let rectX,rectY;
let snowballDiameter = 30;
let rectangles = [];
let xOff;
let rectHeight;
let latestKeyPressed;
let meteors = [];
let currentMeteor;
let snowballX,snowballY;
let gameOver = false;
let gameStart = false;
let secondsElapsed = 0;
let minutesElapsed = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB);
  textAlign(CENTER);
  textFont("Georgia");
  fw = new Snowball(width/2,0);
  generateTerrain();
}

function generateTerrain(){
  stroke(136,66,66);
  xOff = 0;
  for(let i = 0; i < width; i += rectSize){
    rectX = i;
    rectY = -height + map(noise(xOff),0,1,height,0);
    rectangles.push(new Rectangle(rectX,height,rectSize,rectY,height + rectY, rectY * -1));   //create rectangle objects that make up the terrain
    xOff += 0.0015;
  }
}

function updateTerrain(){                                                                     //make the terrain move from left to right
  rectangles.splice(0,1);                                                                     //by removing rectangles and adding new ones
  rectX = width - rectSize;
  rectY = -height + map(noise(xOff),0,1,height,0);
  rectangles.push(new Rectangle(rectX,height,rectSize,rectY,height + rectY, rectY * -1));
  xOff += 0.0015;
  for(let i = 0; i < rectangles.length; i++){
    rectangles[i].x -= rectSize*2;
  }
}

function draw() {
  if(!gameStart){                                                                            //main menu
    background(230,43,55);
    fill(255);
    textSize(50);
    text("Snowball Game",width/2,height/3);
    textSize(18);
    text("Use the arrow keys to move the snowball and dodge meteors",width/2,height/2);
    text("Use the spacebar to fly",width/2,height/2 + 40);
    text("As you roll along the terrain, the snowball will get bigger",width/2,height/2 + 80);
    textSize(25);
    text("Press the 'enter' key to start", width/2, height/2 + (height/3));
    if(keyIsDown(ENTER)){
      gameStart = true;
    }
  }
  else if(gameOver){                                                                       //game over screen
    background(230,43,55);
    fill(255);
    textSize(50);
    text("Game Over",width/2,height/3);
    textSize(18);
    text("Your time" + " " + "-" + " " + minutesElapsed + ":" + secondsElapsed, width/2, height/2);
    textSize(25);
    text("Press the 'escape' key to go back to main menu",width/2,height/2 + (height/3));
    meteors.splice(0,meteors.length);
    if(keyIsDown(ESCAPE)){
      fw.size = snowballDiameter;
      fw.ySpeed = 0;
      secondsElapsed = 0;
      minutesElapsed = 0;
      gameOver = false;
      gameStart = false;
    }
  }
  else{                                                                                   //while the user is playing the game
    background(230,43,55);
    stroke(123);
    updateTerrain();

    if(frameCount % 2 === 0 && frameCount > 300){               //create meteors after a certain period of time so the snowball can't get hit immediately at the start
      meteors.push(new Meteor(random(0,width),0-10));           //of the game and there aren't too many meteors
    }

    for(let i = 0; i < meteors.length; i++){
      currentMeteor = i;
      if(meteors[i].collision()){
        gameOver = true;
      }
      meteors[i].move();
      meteors[i].display();                     
      if(meteors[i].ifReachedTheGround() === true){         //destroys meteors if they have reached the bottom of the screen
        meteors.splice(i,1);
        i--;
      }
    }
    for(let i = 0; i < rectangles.length; i++){
      rectangles[i].snowballCollision();                     //check if the snowball is colliding with any rectangle in the terrain
      rectangles[i].display();
    }
    fw.move();
    fw.display();

    fill(255);
    textSize(50);
    if(secondsElapsed === 60){                                                       //keep track of the amount of time the user has been playing
      minutesElapsed += 1;
      secondsElapsed = 0;
    }
    if(frameCount % 60 === 0){
      secondsElapsed += 1;
    }
    text(minutesElapsed + ":" + secondsElapsed, width - 75, 50);
  }
}

class Rectangle{
  constructor(x_,y_,w_,h_,yCol_,hCol_){
    this.x = x_;
    this.y = y_;
    this.w = w_;
    this.h = h_;
    this.yCol = yCol_;
    this.hCol = hCol_;
  }
  snowballCollision(){                                                 //detects if the snowball has made contact with the current rectangle
    return fw.collision(this.x,this.yCol,this.w,this.hCol);
  }
  display(){
    fill(255);
    rect(this.x, this.y, this.w, this.h);
  }
}

class Snowball{
  constructor(x_,y_){
    this.x = x_;
    this.y = y_;
    this.xSpeed = 0;
    this.ySpeed = 0;
    this.xAccel = 0.3;
    this.yAccel = -0.4;        //how fast the snowball flies
    this.GRAV = 0.1;
    this.yHit = false;
    this.size = snowballDiameter;
    this.sizeIncrease = 0.02;
    this.xHitInFront = false;
    this.xHitBehind = false;
    this.disableGrav = false;
  }

  collision(x,y,w,h){
    rectHeight = y;
    this.yHit = collideRectCircle(x,y,w,h,this.x,this.y+this.ySpeed,this.size);           //detects if the snowball is making contact with the terrain
    this.disableGrav = collideRectCircle(x,y,w,h,this.x,this.y+this.ySpeed,this.size);
    this.xHitInFront = collideRectCircle(x,y,w,h,this.x + 1,this.y,this.size);
    this.xHitBehind = collideRectCircle(x,y,w,h,this.x - 1,this.y,this.size);

    if(this.yHit){
      this.ySpeed = 0;
      this.y = rectHeight - this.size/2;
      if(keyIsDown(LEFT_ARROW) || keyIsDown(RIGHT_ARROW)){          //makes the snowball get bigger as it's rolling along the terrain
        this.size += this.sizeIncrease;
      }
      return true;
    }
  }

  move(){
    if(keyIsDown(32)){
      this.ySpeed += this.yAccel;
    }

    if(keyIsDown(LEFT_ARROW)){
      latestKeyPressed = 1;
      if(this.xHitBehind && latestKeyPressed){
        this.y = rectHeight;
      }
      this.xSpeed -= this.xAccel;
    }
    else if(keyIsDown(RIGHT_ARROW)){
      latestKeyPressed = 2;
      if(this.xHitInFront){
        this.y = rectHeight;
      }
      this.xSpeed += this.xAccel;
    }
    
    else{                                                    //slow the snowball down
      if(this.xSpeed > 0 && latestKeyPressed === 2){
        this.xSpeed -= this.xAccel;
      }
      else if(this.xSpeed < 0 && latestKeyPressed === 1){
        this.xSpeed += this.xAccel;
      }
      else{
        this.xSpeed = 0;
      }
    }
    if(!this.yHit){                        //make the snowball fall down
      this.ySpeed += this.GRAV;
      this.y += this.ySpeed;
    }
    this.x += this.xSpeed;
    snowballX = this.x;
    snowballY = this.y;
  }

  display(){
    ellipseMode(CENTER);
    ellipse(this.x, this.y, this.size);
  }
}

class Meteor{
  constructor(x_,y_){
    this.x = x_;
    this.y = y_;
    this.colour = color(0,100,map(y_,0,rectHeight,0,100));
    this.size = 10;
    this.ySpeed = random(-1,1);
    this.xSpeed = random(-0.5,0.5);
    this.GRAV = 0.02;
    this.noiseLoc = random(10);
    this.hit = false;
  }
  collision(){
    this.hit = collideCircleCircle(this.x,this.y,this.size,snowballX,snowballY,snowballDiameter);   //detects if the meteors are making contact with the snowball
    if(this.hit){
      return true;
    }
    else{
      return false;
    }
  }
  move(){
    this.ySpeed += this.GRAV;
    this.x += (map(noise(this.noiseLoc),0,1,-1,1));
    this.noiseLoc += 0.01;
    this.y += this.ySpeed;
  }
  ifReachedTheGround(){              //detects if the meteors have reached the bottom of the screen
    if(this.y >= height){
      return true;
    }
    else{
      return false;
    }
  }
  display(){
    fill(this.colour);
    ellipse(this.x,this.y,this.size,this.size);
  }
}