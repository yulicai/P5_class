/*
* Weaving 织线
* Yuli Cai 蔡雨利 2017
*/

// Example 2-1: random and basic math function
// 示例2-1：随机与基础数学指令


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

  // 圆的公式 (x-a)^2 + (y-b)^2 = r^2
  stroke(255, 255, 255, 10);
  x1 = random(r, 2 * r); //在r和2r之间任意返回一个数值
  // sqrt 平方根
  y1 = sqrt(r * r - (x1 - center1X) * (x1 - center1X)) + center1Y;

  x2 = random(0, r);
  y2 = sqrt(r * r - x2 * x2) + center2Y;

  x3 = random(0, r);
  y3 = center3Y- sqrt(r * r - x3 * x3);

  x4 = random(r, 2 * r);
  y4 = center4Y - sqrt(r * r - (x4 - r) * (x4 - r));

  x5 = random(2 * r, 3 * r);
  y5 = center5Y - sqrt(r * r - (x5 - 3 * r) * (x5 - 3 * r));

  x6 = random(3 * r, 4 * r);
  y6 = center6Y - sqrt(r * r - (x6 - 4 * r) * (x6 - 4 * r));

  x7 = random(3 * r, 4 * r);
  y7 = sqrt(r * r - (x7 - 4 * r) * (x7 - 4 * r)) + center7Y;

  x8 = random(2 * r, 3 * r);
  y8 = sqrt(r * r - (x8 - 3 * r) * (x8 - 3 * r));
  line(x1, y1, x3, y3);
  line(x2, y2, x4, y4);
  line(x3, y3, x5, y5);
  line(x4, y4, x6, y6);
  line(x5, y5, x7, y7);
  line(x6, y6, x8, y8);
  line(x7, y7, x1, y1);
  line(x8, y8, x2, y2);


}

