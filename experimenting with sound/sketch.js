// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let sound, fft;

function preload(){
  sound = loadSound("assets/energy.mp3");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  fft = new p5.FFT();
  sound.setVolume(0.1);
}

function mousePressed(){
  sound.play();
  // createSpectrum();
}

function draw() {
  background(255);
  let spectrum = fft.analyze();
  fill(0);
  noStroke();
  for(let i = 0; i < spectrum.length; i++){
    let x = map(i,0,spectrum.length,0,width);
    let y = -height + map(spectrum[i],0,255,height,0);
    rect(x,height,width/spectrum.length,y);
  }
}

// function createSpectrum(){
//   let spectrum = fft.analyze();
//   fill(0);
//   noStroke();
//   for(let i = 0; i < spectrum.length; i++){
//     let x = map(i,0,spectrum.length,0,width);
//     let y = -height + map(spectrum[i],0,255,height,0);
//     rect(x,height,width/spectrum.length,y);
//   }
// }