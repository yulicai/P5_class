/*
 * Basic  AudioIn
 * p5js.org官方案例
 * 中文注释：Yuli Cai /caiyuli.com
 */


// 线上案例： https://editor.p5js.org/yulicai/sketches/1B4in5spc

// 需要先声明一个麦克风的变量作为承载体
let  mic;

function setup() {
    mic = new p5.AudioIn()
    mic.start();
}
function draw() {
    background(0);
    micLevel = mic.getLevel();
    // constrain是一个限制范围的指令
    ellipse(width / 2, constrain(height - micLevel * height * 5, 0, height), 10, 10);
}