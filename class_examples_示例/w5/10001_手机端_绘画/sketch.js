/*
 * p5手机端互动
 * mobile interaction with p5
 * Yuli Cai 蔡雨利 caiyuli.com
 */

// Example 10-1: mobile interaction with p5
// 示例10-1: p5手机端互动
// 翻译注释自 itp - icm

function setup() {
  // 将画布大小设置成更手机屏幕一样的大小
  createCanvas(windowWidth, windowHeight);
  background(200);
}


function touchMoved(){
  strokeWeight(10);
  stroke(0);
  line(touchX, touchY, ptouchX, ptouchY);
  return false;
}
