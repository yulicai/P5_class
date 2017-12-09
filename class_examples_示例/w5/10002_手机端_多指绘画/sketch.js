/*
 * p5手机端互动
 * mobile interaction with p5
 * Yuli Cai 蔡雨利 caiyuli.com
 */

// Example 10-1: mobile interaction with p5
// 示例10-1: p5手机端互动
// 翻译注释自 itp - icm

//https://alpha.editor.p5js.org/full/B1MRkCOZf

let colors;

function setup() {
  // 将画布大小设置成更手机屏幕一样的大小
  createCanvas(windowWidth, windowHeight);
  background(200);

  // 一个五个颜色的数组，每个颜色对应一个手指
  colors = [color(255,0,0), color(0,255,0), color(0,0,255), color(255, 255,0), color(0,255,255)];
}

function draw() {
  // touches这个数组将每一次手指点击都作为一个对象存储下来
  // 这个数组的长度是弹性的，当前帧有多少个手指触碰到屏幕，这个数组的长度就是多少
  for (let i = 0; i < touches.length; i++) {
    noStroke();
    // 每一个手指对应一种颜色
    fill(colors[i]);
    // 在每个手指的位置画圆
    ellipse(touches[i].x, touches[i].y, 24, 24);
  }
}

  // 这个返回参数防止互动的过程拽动屏幕
function touchMoved() {
  return false;
}
