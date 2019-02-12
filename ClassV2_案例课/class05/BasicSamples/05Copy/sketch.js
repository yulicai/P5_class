/*
 * copy 复制图片的一部分
 * p5js.org官方案例
 * 中文注释：Yuli Cai /caiyuli.com
 */


// 线上案例： https://editor.p5js.org/yulicai/sketches/1QfVFvdW8

let img;

function preload() {
  img = loadImage('assets/marvel.png');
}

function setup() {
  createCanvas(img.width, img.height);
  // 画布的背景为导入的图片
  background(img);
  copy(img, width/2-50, height/2-90, 50, 50, 100, 125, 200, 200);

  stroke(255);
  noFill();
  // 长方形用来指示，哪一小块图片被复制了
  rect(width / 2 - 50, height / 2-90 , 50, 50);
}