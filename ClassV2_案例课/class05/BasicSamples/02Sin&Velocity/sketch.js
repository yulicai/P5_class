/*
 * Sin Wave
 * nature of code 官方案例 http://natureofcode.com
 * Developed by Dan Shiffman; 中文注释：Yuli Cai /caiyuli.com
 */


// 线上案例：https://editor.p5js.org/yulicai/sketches/wJYcfwlxa

let angle = 0;
let aVelocity = 0.03;

function setup() {
    createCanvas(640, 360);
}

function draw() {
    background(51);

    let amplitude = 300;
    let x = amplitude * sin(angle);
    angle += aVelocity; // 新位置 = 上一帧位置+速率（变化的值）

    translate(width / 2, height / 2);

    stroke(255);
    fill(127);
    line(0, 0, x, 0);
    ellipse(x, 0, 48, 48);
}
