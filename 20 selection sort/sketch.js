// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let values = [];

function setup() {
  noCanvas();
  noLoop();
  populateArray();
}

function populateArray(){
  for(let i = 0; i < 1000; i++){
    values.push(int(random(0,1000)));
  }
}

function binarySearch(n){
  while(values.length > 1){
    let index = int(values.length / 2);
    if(values[index] === n){
      return true;
    }
    else{
      if(values[index] > n){
        //get rid of larger numbers
        values.splice(n);
      }
      else{
        //get rid of smaller numbers
        values.splice(0,int(values.length / 2));
      }
    }
  }
  return false;
}

function selectionSort(){
  //one character at a time, find the minimum value and swap
  for(let index = 0; index < values.length - 1; index ++){
    let minimum = values[index];
    let minimumLocation = index;
    for(let checkIndex = index + 1; checkIndex < values.length; checkIndex ++){
      let cur = values[checkIndex];
      if(cur < minimum){
        minimum = cur;
        minimumLocation = checkIndex;
      }
    }
    //swap the item at index with the item at minimumLocation
    let temp = values[index];
    values[index] = values[minimumLocation];
    values[minimumLocation] = temp;
  }
}

function draw() {
  print(values);
  selectionSort();
  print(values);
  print(binarySearch(52));
}
