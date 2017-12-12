/*
 * p5手机端互动
 * mobile interaction with p5
 * Yuli Cai 蔡雨利 caiyuli.com
 */

// Example 10-3: mobile interaction with p5
// 示例10-3: p5手机端互动 重力
// 翻译注释自 itp - icm


// 位置
var x = 0;
var y = 0;

// 速度
var vx = 0;
var vy = 0;

// 加速度
var ax = 0;
var ay = 0;

// 有一定的能量损失
var bMultiplier = 0.6;

function setup() {
  createCanvas(windowWidth, windowHeight);
  fill(0);
}

function draw() {
  background(255);
  ballMove();
  ellipse(x, y, 30, 30);
}

function ballMove() {

  ax = accelerationX;
  ay = accelerationY;

  vx = vx + ax;
  vy = vy + ay;
  y = y + vy;
  x = x + vx;

  // 当触壁的时候反弹
  if (x < 0) {
    x = 0;
    vx = -vx * bMultiplier;
  }
  if (y < 0) {
    y = 0;
    vy = -vy * bMultiplier;
  }
  if (x > windowWidth - 20) {
    x = windowWidth - 20;
    vx = -vx * bMultiplier;
  }
  if (y > windowHeight - 20) {
    y = windowHeight - 20;
    vy = -vy * bMultiplier;
  }

}
