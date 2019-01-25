function setup() { 
  createCanvas(windowWidth, windowHeight);
   background(240);
} 

function touchMoved() { 
 strokeWeight(10);
  stroke(0);
  line(mouseX,mouseY,pmouseX,pmouseY);
  return false;
}