/*
 * Bouncing Ball with Vector 向量与弹球
 * nature of code 官方案例 http://natureofcode.com
 * Developed by Dan Shiffman; 中文注释：Yuli Cai /caiyuli.com
 */


// 线上案例：https://editor.p5js.org/yulicai/sketches/at96g1iHn

let position;
let velocity;

function setup() {
  createCanvas(640, 360);
  background(255);
  position = createVector(100, 100);
  velocity = createVector(2.5, 5);
}

function draw() {
  background(255);

  // 位置不断加上速率带来的变化
  position.add(velocity);

  // 碰壁掉头
  if ((position.x > width) || (position.x < 0)) {
    velocity.x = velocity.x * -1;
  }
  if ((position.y > height) || (position.y < 0)) {
    velocity.y = velocity.y * -1;
  }

  // Display circle at x position
  stroke(0);
  strokeWeight(2);
  fill(127);
  ellipse(position.x, position.y, 48, 48);
}