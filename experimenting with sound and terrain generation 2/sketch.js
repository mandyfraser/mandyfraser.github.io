// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let sound, fft, soundColourR, soundColourG, soundColourB;
let bandWidth;
let currentHeight,previousHeight;

function preload(){
  sound = loadSound("assets/05 Chlorine.m4a");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  bandWidth = width/64;
  fft = new p5.FFT(0.999,64);
  sound.setVolume(1);
  colorMode(RGB);
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
  noStroke();
  for(let i = 0; i < spectrum.length; i++){
    let x = map(i,0,64,0,width);
    let y = -height + map(spectrum[i],0,255,height,0);
    currentHeight = y;
    fill(i+5,i+25,i*2);
    // if(spectrum[i] === 0){
    //   rect(x,height,bandwidth,1);
    // }
    if(i === 1){
      rect(x,height,bandWidth,y);
    }
    else if(i % 2 === 0){
      rect(x,height,bandWidth,y);
      previousHeight = y;
    }
    else{
      rect(x,height,bandWidth,(previousHeight + currentHeight)/2);
    }
  }
}