// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let sound, fft, soundColourR, soundColourG, soundColourB;
let bandWidth;

function preload(){
  sound = loadSound("assets/12 Bloodflood.m4a");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  bandWidth = width/64;
  fft = new p5.FFT(0.9,64);
  sound.setVolume(1);
  colorMode(RGB);
}

function mousePressed(){
  sound.play();
  // createSpectrum();
}

function draw() {
  background(200);
  createSpectrum();
  print(getEnergy("treble"));
}

function createSpectrum(){
  let spectrum = fft.analyze();
  noStroke();
  for(let i = 0; i < spectrum.length; i++){
    let x = map(i,0,64,0,width);
    let y = -height + map(spectrum[i],0,255,height,0);
    getEnergy("treble");
    fill(i+5,i+25,i*2);
    if(i % 1 === 0){
      rect(x,height,bandWidth - 2,y);
    }
    // rect(x,height,width/spectrum.length,y);
  }
}

function getEnergy(){

}