/*
* Basic Noise 自然的随机
* P5js.org官方案例 
* 注释：Yuli Cai / caiyuli.com
*/

// 线上案例：https://editor.p5js.org/yulicai/sketches/zRwzN0PGc

// noise(x, [y], [z])
// Noise 的返回值永远在0-1之间
// Noise的最佳变化值一般在 0.005-0.03之间
// 但不同的程序可能会有不同的结果


let xoff = 0.0;

function setup() {
  createCanvas(400, 400);
  background(204);
}


function draw() {
  //background(204);

  // 给到noise的值，在变化
  xoff = xoff + 0.02;

  // 乘以一个数（这里为width）来放大/map到倍数
  let n = noise(xoff) * width;

  line(n, 0, n, height);
}