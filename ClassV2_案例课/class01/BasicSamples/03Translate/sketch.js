/*
 * Yuli Cai/ caiyuli.com 翻译自 Dan Shiffman 示例
 */

// Example: translate
// 示例：位移于转换
// 线上示例：https://editor.p5js.org/yulicai/sketches/HydB8kMkz



function setup() {
    createCanvas(600, 400);
    fill(100, 102);
    noStroke();
}

function draw() {
	background(255);
    rect(0, 0, 55, 55); // 画一个长方形在顶点坐标 0,0
    translate(30, 20);
    rect(0, 0, 55, 55); // 画一个新的长方形在顶点坐标 new 0,0
    translate(14, 14);
    rect(0, 0, 55, 55); // 画一个新的长方形在顶点坐标 new 0,0
}