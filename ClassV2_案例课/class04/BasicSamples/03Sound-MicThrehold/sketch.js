/*
 * Audio In Threhold
 * 注释: Yuli Cai / caiyuli.com
 */

// Inspired and Adapted from Learning Processing, Daniel Shiffman
// learningprocessing.com
// 线上案例：https://editor.p5js.org/yulicai/sketches/-Us89IPWB

let input;
let analyzer;

let texts = ["%^&","姑娘加油","哥俩好","今夜你会不会来","I promisie I will never make art again", "New York"]

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0,0,255);

  // 创造一个声音输入的地方
  input = new p5.AudioIn();
  input.start();
}

function draw() {
  // 获取捕捉到的音量大小(0.0-1.0之间)
  let volume = input.getLevel();

  // 如果音量> 0.1,  一个文字和一个正方形就会被随机的画在画面上
  let threshold = 0.1;
  if (volume > threshold) {
    noStroke();
    fill(255,212,0);
    // 随机从上面声明的文字中选取一个画在画面上
    text(texts[int(random(texts.length-1))], random(60, width), random(height));
    // 声音越大正方形越大
    rect(random(60, width), random(height), volume * 70, volume * 70);

  }

  // 侧面的音量指示条
  let y = map(volume, 0, 1, height, 0);
  let ythreshold = map(threshold, 0, 1, height, 0);
  noStroke();
  fill(175);
  rect(0, 0, 20, height);
  fill(0);
  rect(0, y, 20, y);
  stroke(255, 212, 0);
  strokeWeight(2);
  line(0, ythreshold, 19, ythreshold);
}