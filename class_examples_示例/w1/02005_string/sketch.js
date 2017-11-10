/*
 * Yuli Cai 蔡雨利 2017 翻译自 Dan Shiffman 示例
 */

// Example 2-5: string
// 示例2-5： 文字变量



var quote = "大家好";

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(204);
  textSize(12);
  text(quote, 100, 100);
  textSize(20);
  text(quote, 100, 300)
}