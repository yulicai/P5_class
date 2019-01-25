// p5 DOM slider

var x = 0;
var canvas;
var par;
var slider;

function setup() {
  canvas = createCanvas(200, 200);
  par = createP("This is some text.");
  par.style("background-color", "red");
  par.style("text-decoration", "line-through")
  slider = createSlider(0, 255, 100);
}


function draw() {
  background(slider.value());
  stroke(255);
  line(x, 0, x, height);
  x = x + 3;
  if (x > width) {
    x = 0;
  }
  par.html("The slider is at: " + slider.value());
}