/*
* Basic  Drawing 基础图形绘画
* Yuli Cai/caiyuli.com
*/

// Example: for loops
// 示例:for循环
// 翻译自 Dan Shiffman的示例， 注解：Yuli Cai

// 线上案例： https://editor.p5js.org/yulicai/sketches/6zq2kwlOD


function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0,0,255);
  strokeWeight(2);
  stroke(255);

  // for loop
  // 三个基本元素， 1. 本地变量声明；2. 条件； 3. 变化程度（增量，减量等等)
  for (let x = 0; x <= width; x += 50) {
    fill(255, 0, 200);
    ellipse(x, 300, 25, 25);
  }
}