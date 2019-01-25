/*
 * Yuli Cai 蔡雨利 2017 翻译自 Dan Shiffman 示例
 */

// Example 2-7: if statement
// 示例2-7：条件函数



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