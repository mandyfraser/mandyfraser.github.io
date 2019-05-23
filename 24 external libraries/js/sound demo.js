let mySound, reverb;

function preload(){
  mySound = loadSound('assets/energy.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  mySound.setVolume(0.1);
  reverb = new p5.Reverb();
}

function mousePressed(){
  mySound.play();
  reverb.process(soundFile,5,1);
}

function draw() {
  background(255);
}