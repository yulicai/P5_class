// 翻译 Yuli Cai


var canvas;

function setup() {

  // 我们仍然像以前一样调用 createCanvas
  // 但是现在我们将结果存储成一个变量
  // 用这种方式我们在之后还能再调用这个元素
  // 去做一些调整，比如调整它的位置
  canvas = createCanvas(600, 400);

  // 这里我们调用每一个元素自带的方法去调整元素的位置
  // 打开inspector来看现在的html元素
  canvas.position(300, 50);
  canvas.class("lemon");
}

function draw() {
  // 这些功能还会像以前一样作用到canvas上
  background(220, 180, 200);
  ellipse(width/2, height/2, 100, 100);
  ellipse(width/4, height/2, 50, 50);
}