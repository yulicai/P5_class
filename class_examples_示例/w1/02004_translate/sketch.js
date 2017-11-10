/*
 * Yuli Cai 蔡雨利 2017 翻译自 Dan Shiffman 示例
 */

// Example 2-4: translate
// 示例2-4：位移于转换



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