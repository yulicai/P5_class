/*
 * Sin Wave
 * nature of code 官方案例 http://natureofcode.com
 * Developed by Dan Shiffman; 中文注释：Yuli Cai /caiyuli.com
 */


// 线上案例：https://editor.p5js.org/yulicai/sketches/AKVacjQ6E

let startAngle = 0;
let angleVel = 0.23;

function setup() {
  createCanvas(640, 360);
}

function draw() {
  background(51);

  startAngle += 0.015;
  let angle = startAngle;

  for (let x = 0; x <= width; x += 24) {
    // sin函数里面一定是一个变化的值，除非只是单纯的做运算
    let y = map(sin(angle), -1, 1, 0, height);
    stroke(164);
    fill(255, 50);
    strokeWeight(2);
    ellipse(x, y, 48, 48);
    angle += angleVel;
  }
}