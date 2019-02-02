/*
 * Yuli Cai/caiyuli.com
 */

// Example: grid and nested for loop
// 示例： 画格子和for循环
// 线上示例：https://editor.p5js.org/yulicai/sketches/Byvza_NkG


function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  stroke(0);
  for (var i = 0; i < 400; i+=10) {
    for (var j = 0; j < 400; j+=10) {
      line(i, 0, i, height);
      line(0, j, width, j);
    }
  }
}