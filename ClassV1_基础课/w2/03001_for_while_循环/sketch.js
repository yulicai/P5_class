/*
* Basic  Drawing 基础图形绘画
* Yuli Cai 蔡雨利
*/

// Example 3-1: for and while loops
// 示例3-1:for循环和while循环
// 翻译自 Dan Shiffman的示例， 注解：Yuli Cai 蔡雨利


function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  strokeWeight(4);
  stroke(255);
  
  let x = 0; //本地变量
  while (x <= width) {
    fill(0, 200, 255);
    ellipse(x, 200, 25, 25);
    x = x + 50;
  }
  // for loop是while loop的升华简练版本
  // 三个基本元素， 1. 本地变量声明；2. 条件； 3. 变化程度（增量，减量等等)
  for (x = 0; x <= width; x += 50) {
    fill(255, 0, 200);
    ellipse(x, 300, 25, 25);
  }
}