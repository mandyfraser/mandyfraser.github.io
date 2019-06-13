// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let rectSize = 1;
let start = 0;
let currentHeight;
let x,y;
let b;
let rectX,rectY;
let wheelDiameter = 30;
let rectangles = [];
let xOff;
let rectHeight;
let latestKeyPressed;
let meteors = [];
let currentMeteor;
let wheelX,wheelY;
let gameOver = false;

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB);
  bw = new Wheel(0,0);
  fw = new Wheel(width/2,0);
  generateTerrain();
}

function generateTerrain(){
  stroke(136,66,66);
  xOff = start;
  for(let i = 0; i < width; i += rectSize){
    rectX = i;
    rectY = -height + map(noise(xOff),0,1,height,0);
    // fill(x+5,x+25,x*2);
    rectangles.push(new Rectangle(rectX,height,rectSize,rectY,height + rectY, rectY * -1));
    // rectHeight = height + rectY;
    // rect(rectX,height,rectSize,rectY);
    // fw.collision(rectX,height + rectY,rectSize,rectY * -1);
    xOff += 0.001;
  }
  // updateTerrain();
  // start += 0.004;
}

function updateTerrain(){
  rectangles.splice(0,1);
  rectX = width - rectSize;
  rectY = -height + map(noise(xOff),0,1,height,0);
  rectangles.push(new Rectangle(rectX,height,rectSize,rectY,height + rectY, rectY * -1));
  xOff += 0.001;
  start += 0.004;
  for(let i = 0; i < rectangles.length; i++){
    rectangles[i].x -= rectSize;
  }
}

function draw() {
  background(230,43,55);
  stroke(123);
  updateTerrain();
  // generateTerrain();
  // bw.move();
  // bw.display();
  if(frameCount % 2 === 0){
    meteors.push(new Meteor(random(0,width),0-10));
  }
  // meteors.push(new Meteor(random(0,width),0-10));
  for(let i = 0; i < meteors.length; i++){
    currentMeteor = i;
    // gameOver = meteors[i].collision();
    if(frameCount % 7 === 0){
      // print(meteors[i].collision());
    }
    meteors[i].move();
    meteors[i].display();                     
    if(meteors[i].ifReachedTheGround() === true){
      meteors.splice(i,1);
      i--;
    }
    
    // if(meteorAlive === false){
    //   meteors.splice(i,1);
    //   i--;
    // }
  }
  for(let i = 0; i < rectangles.length; i++){
    rectangles[i].wheelCollision();
    // meteorAlive = rectangles[i].meteorCollision();

    // if(rectangles[i].collision()){
    //   // print("collision");
    // }
    rectangles[i].display();
  }
  fw.move();
  fw.display();
  // print(gameOver);
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
  wheelCollision(){
    return fw.collision(this.x,this.yCol,this.w,this.hCol);
  }
  // xCollision(){
  //   return this.yCol;
  // }
  display(){
    fill(255);
    rect(this.x, this.y, this.w, this.h);
  }
}

class Wheel{
  constructor(x_,y_){
    this.x = x_;
    this.y = y_;
    this.xSpeed = 0;
    this.ySpeed = 0;
    this.xAccel = 0.3;
    this.yAccel = -0.4;
    this.GRAV = 0.1;
    this.yHit = false;
    this.yHitInFront = false;
    this.yHitBehind = false;
    this.xHitInFront = false;
    this.xHitBehind = false;
    this.disableGrav = false;
  }

  collision(x,y,w,h){
    rectHeight = y;
    this.yHit = collideRectCircle(x,y,w,h,this.x,this.y+this.ySpeed,wheelDiameter);
    this.disableGrav = collideRectCircle(x,y,w,h,this.x,this.y+this.ySpeed,wheelDiameter);
    this.xHitInFront = collideRectCircle(x,y,w,h,this.x + 1,this.y,wheelDiameter);
    this.xHitBehind = collideRectCircle(x,y,w,h,this.x - 1,this.y,wheelDiameter);
    this.yHitInFront = collideRectCircle(x,y,w,h,this.x + 2,this.y,wheelDiameter);
    this.yHitBehind = collideRectCircle(x,y,w,h,this.x - 2,this.y,wheelDiameter);
    // if(this.xHitBehind){
    //   print("collision");
    // }
    // if(frameCount % 6 === 0){
    //   print(x,y,w,h,this.x,this.y,wheelDiameter);
    // }

    // if(!this.yHitBehind){
    //   this.xSpeed = -5;
    // }
    // if(!this.yHitInFront){
    //   this.xSpeed = 5;
    // }

    if(this.yHit){
      // this.ySpeed = -this.GRAV;
      // this.y = y - wheelDiameter/2;

      // this.y = rectHeight;

      // this.ySpeed = 0;
      // this.y = y - (this.y - y);
      // print(y - (this.y-y),this.ySpeed,this.yHit,this.xHitInFront,this.xHitBehind);

      this.ySpeed = 0;
      // this.y = rectHeight - wheelDiameter/2;
      this.y = rectHeight - wheelDiameter/2;
      // print(this.y);

      return true;
    }

    //print(this.hit);
  }

  move(){
    // if(this.yHit){
    //   print(this.yHit);
    //   this.ySpeed += -this.GRAV;
    // }
    // else{
    //   this.ySpeed += this.GRAV;
    // }

    if(keyIsDown(32)){
      this.ySpeed += this.yAccel;
    }

    if(keyIsDown(LEFT_ARROW)){
      latestKeyPressed = 1;
      if(this.xHitBehind && latestKeyPressed){
        this.y = rectHeight;
      }

      // this.y = rectHeight - wheelDiameter/2;

      // this.xSpeed = -5;
      this.xSpeed -= this.xAccel;
    }
    else if(keyIsDown(RIGHT_ARROW)){
      latestKeyPressed = 2;
      if(this.xHitInFront){
        this.y = rectHeight;
      }

      // this.y = rectHeight;

      // this.xSpeed = 5;
      this.xSpeed += this.xAccel;
    }
    
    else{
      if(this.xSpeed > 0 && latestKeyPressed === 2){
        this.xSpeed -= this.xAccel;
      }
      else if(this.xSpeed < 0 && latestKeyPressed === 1){
        this.xSpeed += this.xAccel;
      }
      else{
        this.xSpeed = 0;
      }
      // this.xSpeed = 0;
    }
    if(!this.yHit){
      this.ySpeed += this.GRAV;
      this.y += this.ySpeed;
    }
    this.x += this.xSpeed;
    // print(this.ySpeed);
    wheelX = this.x;
    wheelY = this.y;
  }

  display(){
    ellipseMode(CENTER);
    ellipse(this.x, this.y, wheelDiameter);
  }
}

class Meteor{
  constructor(x_,y_){
    this.x = x_;
    this.y = y_;
    this.colour = color(0,100,map(y_,0,rectHeight,0,100));
    this.size = random(10,30);
    this.ySpeed = random(-1,1);
    this.xSpeed = random(-0.5,0.5);
    this.GRAV = 0.02;
    this.noiseLoc = random(10);
    this.hit = false;
  }
  collision(){
    this.hit = collideCircleCircle(this.x,this.y,this.size,wheelX,wheelY,wheelDiameter);
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
  ifReachedTheGround(){
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