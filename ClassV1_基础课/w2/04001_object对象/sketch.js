/*
 * Basic  Drawing 基础图形绘画
 * Yuli Cai 蔡雨利 2017
 */

// Example 4-1: object basic
// 示例4-1:对象
// 注译自Dan Shiffman的代码

let circle = {
  x: 0,
  y: 200, 
  diameter: 50
};


let r = 218;
let g = 160;
let b = 221;

function setup() {
  createCanvas(600, 400);  
}

function draw() {
  // background
  background(r, g, b);
  // ellipse
  fill(250, 200, 200);
  // 变量的使用方式，需要标注是属于哪个对象的
  ellipse(circle.x, circle.y, circle.diameter, circle.diameter);
  
  circle.x = circle.x + 1;
}