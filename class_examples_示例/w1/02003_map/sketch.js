/*
 * Yuli Cai 蔡雨利 2017 翻译自 Dan Shiffman 示例
 */

// Example 2-3: map and mouse interaction
// 示例2-3： 映射和鼠标互动



function setup() {
  createCanvas(600, 400);
  fill(0, 102);
  noStroke();
}

function draw() {
  var g = map(mouseY, 0, height, 0, 255); // 鼠标位置y值，从0-画布高度，映射到0-255，背景颜色的数值范围
  background(g);

  var h = map(mouseX, 0, width, 0, 50); //鼠标位置的x值，从0-画布宽度，映射到椭圆的宽度 0-50
  ellipse(300, 200, h, 50);
}