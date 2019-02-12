/*
* Basic Bouncing Ball with Sound
*/

// 线上案例：https://editor.p5js.org/yulicai/sketches/uI8Wk_LOX

let rad = 60; // 圆的大小 radius
let xpos, ypos; // 圆的初始位置

let xspeed = 2.8; // 圆的x速率
let yspeed = 2.2; // 圆的y速率

let xdirection = 1; // 方向的值
let ydirection = 1; // 方向的值

let sound;

function preload() {
  sound=loadSound("assets/sound.wav");
}


function setup() {
  createCanvas(720, 400);
  noStroke();
  frameRate(30);
  ellipseMode(RADIUS);

  // 设置圆的初始位置为画布正中央
  xpos = width / 2;
  ypos = height / 2;
}


function draw() {
  background(102);

  // 每一帧都更新圆的位置
  xpos = xpos + xspeed * xdirection;
  ypos = ypos + yspeed * ydirection;

  // 判断圆是否跑出了画布范围
  // 如果跑出了，则相关的方向变为反向（-1）
  // x轴跑出去了
  if (xpos > width - rad || xpos < rad) {
    xdirection *= -1;
    if (!sound.isPlaying()) {
      sound.play();
    }
  }


  // y轴跑出去了
  if (ypos > height - rad || ypos < rad) {
    ydirection *= -1;
    if (!sound.isPlaying()) {
      sound.play();
    }
  }


  // Draw the shape
  ellipse(xpos, ypos, rad, rad);
}