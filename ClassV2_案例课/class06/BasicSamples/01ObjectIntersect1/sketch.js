/*
 * Object Intersecting 01 对象之间相互检测 01
 * Developed by Dan Shiffman; 修改+中文注释：Yuli Cai /caiyuli.com
 */

// 线上案例： https://editor.p5js.org/yulicai/sketches/QJnEEVLt2

let bubble1;
let bubble2;

function setup() {
  createCanvas(600, 400);

  // 创造2个新的“bubble" - Bubble为一个类class
  bubble1 = new Bubble(200, 200);
  bubble2 = new Bubble(400, 200, 100);
}

function draw() {
  background(0);

  // 如果bubble1与bubble2重叠了
  if (bubble1.intersects(bubble2)) {
    background(200, 0, 100);
  }
  // 在主流程draw当中，按照顺序，call每个bubble相应的函数
  bubble1.show();
  bubble2.show();
  bubble1.move();
  //bubble2.move();
  bubble2.x = mouseX;
  bubble2.y = mouseY;

}

// 对Bubble类的声明
class Bubble {
  constructor(x, y, r = 50) {
    this.x = x;
    this.y = y;
    // 有一个半径，为了计算bubble间距离
    this.r = r;
    this.brightness = 0;
  }

  // 将判断重叠变为类的一个属性，让每个bubble都自己有能力
  intersects(other) {
    let d = dist(this.x, this.y, other.x, other.y);
    return (d < this.r + other.r);
    // if (d < this.r + other.r) {
    //   return true;
    // } else {
    //   return false;
    // }
  }

  changeColor(bright) {
    this.brightness = bright;
  }

  move() {
    this.x = this.x + random(-2, 2);
    this.y = this.y + random(-2, 2);
  }

  show() {
    stroke(255);
    strokeWeight(4);
    fill(this.brightness, 125);
    ellipse(this.x, this.y, this.r * 2);
  }
}