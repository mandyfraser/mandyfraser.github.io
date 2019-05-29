// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let sound, fft;
let increment = 0;

function preload(){
  sound = loadSound("assets/05 Chlorine.m4a");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  fft = new p5.FFT();
  sound.setVolume(1);
  colorMode(RGB);
  rectMode(CORNERS);
}

function mousePressed(){
  if(sound.isPlaying()){
    sound.stop();
  }
  else{
    sound.play();
  }
}

function draw() {
  background(200);
  createSpectrum();
}

function createSpectrum(){
  let spectrum = fft.analyze();
  // noStroke();
  // for(let i = 0; i < spectrum.length; i++){
  //   let x = map(i,0,spectrum.length,0,width);
  //   let y = -height + map(spectrum[i],0,255,height,0);
  //   fill(i+5,i+25,i*2);
  //   rect(x,height,width/spectrum.length,y);
  // }
  let xOff = 0;
  let rectWidth = width/spectrum.length;
  for(let i = 0; i < spectrum.length; i++){
    let x = map(i,0,spectrum.length,0,width);
    fill(i+5,i+25,i*2);
    increment = map(spectrum[i],0,255,0,1);
    rect(x,noise(increment)*height,1,height);
    print(x);
  }
  // print(spectrum);
}