/*
 * Basic  Drawing Function
 * Yuli Cai/ caiyuli.com
 */

// Example: function, reusability, parameters
// 示例:函数的重复利用，参数输入
// 翻译自 Reas & Fry. O'Reilly / Make 2010

function setup() {
    createCanvas(720, 480);
    strokeWeight(2);
    ellipseMode(RADIUS);
}

function draw() {
    background(204);
    ellipse(200, 200, 500, 500);
    drawRobot(120, 420, 110, 140);
    drawRobot(270, 460, 260, 95);
    drawRobot(420, 310, 80, 10);
    drawRobot(570, 390, 180, 40);
}

function drawRobot(x, y, bodyHeight, neckHeight) {

    let radius = 45;
    let ny = y - bodyHeight - neckHeight - radius; // neckHeight Y

    // Neck 脖子
    stroke(102);
    line(x + 2, y - bodyHeight, x + 2, ny);
    line(x + 12, y - bodyHeight, x + 12, ny);
    line(x + 22, y - bodyHeight, x + 22, ny);

    // Antennae 触角
    line(x + 12, ny, x - 18, ny - 43);
    line(x + 12, ny, x + 42, ny - 99);
    line(x + 12, ny, x + 78, ny + 15);

    // Body 身体
    noStroke();
    fill(102);
    ellipse(x, y - 33, 33, 33);
    fill(0);
    rect(x - 45, y - bodyHeight, 90, bodyHeight - 33);
    fill(102);
    rect(x - 45, y - bodyHeight + 17, 90, 6);

    // Head 头部
    fill(0);
    ellipse(x + 12, ny, radius, radius);
    fill(255);
    ellipse(x + 24, ny - 6, 14, 14);
    fill(0);
    ellipse(x + 24, ny - 6, 3, 3);
    fill(153);
    ellipse(x, ny - 8, 5, 5);
    ellipse(x + 30, ny - 26, 4, 4);
    ellipse(x + 41, ny + 6, 3, 3);
}