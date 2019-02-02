/*
 * Yuli Cai/caiyuli.com 翻译自 Dan Shiffman 示例
 */

// Example: map and mouse interaction
// 示例： 映射和鼠标互动
// 线上示例：https://editor.p5js.org/yulicai/sketches/S1VOURW1G



function setup() {
  createCanvas(600, 400);
  fill(0, 102);
  noStroke();
}

function draw() {
  let g = map(mouseY, 0, height, 0, 255); // 鼠标位置y值，从0-画布高度，映射到0-255，背景颜色的数值范围
  background(g);

  let h = map(mouseX, 0, width, 0, 50); //鼠标位置的x值，从0-画布宽度，映射到椭圆的宽度 0-50
  ellipse(300, 200, h, 50);
}