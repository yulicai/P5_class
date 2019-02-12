/*
 * Mills
 * p5js.org官方案例
 * 中文注释：Yuli Cai /caiyuli.com
 */


// 线上案例：https://editor.p5js.org/yulicai/sketches/C2lM-Os3v

// 自程序开始运行后的总秒数

let millisecond;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  millisecond = millis();
  text('Milliseconds \nrunning: \n' + millisecond, 5, 40);
}
