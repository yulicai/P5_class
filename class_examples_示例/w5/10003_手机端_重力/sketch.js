/*
 * p5手机端互动
 * mobile interaction with p5
 * Yuli Cai 蔡雨利 caiyuli.com
 */

// Example 10-1: mobile interaction with p5
// 示例10-1: p5手机端互动
// 翻译注释自 Daniel Shiffman
function setup() {
  // Make the canvas the size of the mobile device screen
  // 将画布大小设置成更手机屏幕一样的大小
  createCanvas(windowWidth, windowHeight);
  background(200);
}

// 有一个特殊的功能叫touchMoved()来检测设备是否被触动
function touchMoved() {
  strokeWeight(10)
  stroke(0);
  // Here touchX and touchY act like mouseX and mouseY
  // 在这列touchX, touchY 就像mouseX, mouseY
  line(touchX, touchY, ptouchX, ptouchY);
  // 以下是非移动端的写法
  // line(mouseX, mouseY, pmouseX, pmouseY);

  // 这个返回参数防止互动的过程拽动屏幕
  return false;
}
