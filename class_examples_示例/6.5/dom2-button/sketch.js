var canvas;
var par;
var x = 0;
var button;

function setup() {
  canvas = createCanvas(200, 200);

  par = createP("This is some text.");
  par.mousePressed(changeText);

  button = createButton("change color");
  button.mousePressed(changeColor);
}

function changeText() {
  par.html("NEW TEXT!" + random(100));
  button.html("BUTTON TEXT");
}

function changeColor() {
  background(random(255), 0, random(255));
}

function draw() {

}