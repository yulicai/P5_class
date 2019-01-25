/*
 * Basic  Drawing with data 与数据结合的基础图形绘画
 * Yuli Cai 蔡雨利 2017
 */

// Example 7-1: basic json file
// 示例7-1:基础json文件
// 翻译自Dan Shiffman的代码


let flower;

// 用preload函数保证数据在使用的时候已经准备好了
function preload() {
  flower = loadJSON("flower.json");
}

function setup() {
  createCanvas(400, 400);
  

  // flower = {
  //   name: "sunflower",
  //   col: color(200, 220, 0)
  // }
}

function draw() {
  background(0);
  // 数据的调用方式跟javascript object 调用数据的方式一直
  fill(flower.r, flower.g, flower.b);
  text(flower.name, 10, 50);
}