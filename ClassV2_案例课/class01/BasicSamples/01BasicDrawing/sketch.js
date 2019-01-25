/*
* Basic  Drawing 基础图形绘画
* Yuli Cai 蔡雨利
*/

// Example 1-1: stroke and fill and color and shape
// 示例1-1:描线和填充和颜色和形状

function setup() {
  createCanvas(600, 600);
  strokeWeight(3); //描线粗细
  stroke(102,249,195); // 三个参数代表 红red, 绿green, 蓝blue，各占多少。颜色的数值从0-255，0代表黑色，255代表白色。
  fill(66,217,244);
}

function draw() {
  background(230,102,249); // 3种颜色
  // background(255);	// 只有一个参数的时候代表，灰色调 明度
  rect(50,50,75,100);
  ellipse(50,50,100,100);
}
