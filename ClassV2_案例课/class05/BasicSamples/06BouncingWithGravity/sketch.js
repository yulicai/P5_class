/*
 * Bouncing Ball with Vector 向量与弹球
 * nature of code 官方案例 http://natureofcode.com
 * Developed by Dan Shiffman; 中文注释：Yuli Cai /caiyuli.com
 */


// 线上案例：https://editor.p5js.org/yulicai/sketches/lhj1hxhnq


let m;

function setup() {
  createCanvas(640, 360);
  m = new Mover();
}

function draw() {
  background(51);

  let wind = createVector(0.01, 0);
  let gravity = createVector(0, 0.1);
  m.applyForce(wind);
  m.applyForce(gravity);


  m.update();
  m.display();
  m.checkEdges();
}