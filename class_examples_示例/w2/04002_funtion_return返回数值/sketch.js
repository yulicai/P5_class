/*
 * Basic  Drawing 基础图形绘画
 * Yuli Cai 蔡雨利 2017
 */

// Example 4-2: function with return
// 示例4-2:返回数值的函数
// 自己写 p5的dist() 函数

function setup() {
    createCanvas(200, 200);
    noStroke();
}

function draw() {
    background(255);
    let d = distance(width / 2, height / 2, mouseX, mouseY);
    fill(d * 3, d * 2, d);
    ellipseMode(CENTER);
    ellipse(width / 2, height / 2, 100, 100);
}

function distance(x1, y1, x2, y2) {
    let dx = x1 - x2;
    let dy = y1 - y2;
    let d = sqrt(dx * dx + dy * dy); //数学运算，平方根，两点之间的距离
    return d;
}