/*
 * Yuli Cai 蔡雨利
 */

// Example: if statement
// 示例：条件语句
// 线上示例：https://editor.p5js.org/yulicai/sketches/r1hwDyG1f



var x = 300;
var y = 200;
var d = 100;

function setup() {
  createCanvas(600, 400);
}

function draw() {

  if (dist(mouseX, mouseY, x, y) < d/2) { //如果鼠标的在圆圈内部了
    background(0);
  } else {
    background(255);
  }
  ellipse(x, y, d, d);
}