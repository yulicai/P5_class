/*
* Basic multiple circle Drawing 基础图形多个圆圈绘画
* Yuli Cai 蔡雨利 2017
*/

// Example 1-2: position and sizes
// 示例1-2：位置和大小


// 大椭圆半径
let r = 150;

// 每个椭圆圆心 x,y
let center1X = r;
let center1Y = 0;
let center2X = 0;
let center2Y = r;
let center3X = 0;
let center3Y = 3 * r;
let center4X = r;
let center4Y = 4 * r;
let center5X = 3 * r;
let center5Y = 4 * r;
let center6X = 4 * r;
let center6Y = 3 * r;
let center7X = 4 * r;
let center7Y = r;
let center8X = 3 * r;
let center8Y = 0;

function setup() {
  createCanvas(4 * r, 4 * r);
  background(0);
}

function draw() {

  // 大椭圆
  stroke(255);
  noFill();
  // ellipse 1 椭圆
  ellipse(center1X, center1Y, 2 * r);
  // 2
  ellipse(center2X, center2Y, 2 * r);
  // 3
  ellipse(center3X, center3Y, 2 * r);
  // 4
  ellipse(center4X, center4Y, 2 * r);
  // 5
  ellipse(center5X, center5Y, 2 * r);
  //6
  ellipse(center6X, center6Y, 2 * r);
  // 7
  ellipse(center7X, center7Y, 2 * r);
  // 8
  ellipse(center8X, center8Y, 2 * r);

  // 中间绿色小椭圆
  fill(0, 255, 0);
  // 1
  ellipse(center1X, center1Y, 10);
  // 2
  ellipse(center2X, center2Y, 10);
  // 3
  ellipse(center3X, center3Y, 10);
  // 4
  ellipse(center4X, center4Y, 10);
  // 5
  ellipse(center5X, center5Y, 10);
  //6
  ellipse(center6X, center6Y, 10);
  // 7
  ellipse(center7X, center7Y, 10);
  // 8
  ellipse(center8X, center8Y, 10);

}

