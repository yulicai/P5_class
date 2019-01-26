/*
* Trick 02 
* easing 水墨
* Developed by: Yuli Cai/ caiyuli.com
*/

// 线上案例： https://editor.p5js.org/yulicai/sketches/rJd3C1xpW

let locs = [];
let trailLength = 100;
let easing = 0.1;
let diffx=diffy=x=y=0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
}

function draw() {
  background(255);
  diffx=mouseX-x;
  diffy=mouseY-y;
  x = x +easing *diffx;
  y = y+easing*diffy;
  locs.push({x: x, y: y});
  if(locs.length>trailLength) locs.shift();
  for (let l = 0; l < locs.length; l++) {
    let loc = locs[l];
    fill(0, (l*5));
    ellipse(loc.x, loc.y, l/2, l/2);
  }
}