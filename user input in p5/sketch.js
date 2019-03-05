// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let rSlider;
let gSlider;
let bSlider;
let radio;
let colourPicker;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(120);
  rectMode(CENTER);

  rSlider = createSlider(0,255,120);
  rSlider.position(10,600);
  rSlider.style("width", "320px");

  gSlider = createSlider(0,255,120);
  gSlider.position(10,650);
  gSlider.style("width", "320px");

  bSlider = createSlider(0,255,120);
  bSlider.position(10,700);
  bSlider.style("width", "320px");

  radio = createRadio();
  radio.position(width/2,30);
  radio.option("ellipse");
  radio.option("rectangle");
  radio.style("width","60px");

  colourPicker = createColorPicker();
  colourPicker.position(width/2,700);
}

function draw() {
  background(rSlider.value(),bSlider.value(),gSlider.value());
  textSize(50);
  text(rSlider.value(),400,620);
  text(gSlider.value(),400,670);
  text(bSlider.value(),400,720);

  fill(colourPicker.value());
  if (radio.value() === "ellipse"){
    ellipse(width/2,height/2,200,200);
  }
  else{
    rect(width/2,height/2,200,200);
  }
}
