/*
* Basic Bouncing Ball
* p5js.org官方案例
* 中文注释: Yuli Cai / caiyuli.com
*/

// 线上案例：https://editor.p5js.org/yulicai/sketches/FlUYUtCzD
function preload() {
  sound = loadSound('assets/song.m4a');
}
function setup() {
  createCanvas(windowWidth,windowHeight);
  amplitude = new p5.Amplitude();
  sound.play();
}
function draw() {
  background(0);

  push();
  noStroke();
  fill(255);
  let level = amplitude.getLevel();
  let size = map(level, 0, 1, 0, 200);
  ellipse(width / 2, height / 2, size, size);
  pop();

  push();
  stroke(255);
  strokeWeight(2);
  line(width/2,height/2-size,width/2,height/2+size);
  pop();
}

function mouseClicked() {
  sound.stop();
}