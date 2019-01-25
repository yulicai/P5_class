/*
 * Basic  Drawing 基础图形绘画
 * Yuli Cai 蔡雨利
 */

// Example 3-2: nested loop
// 示例3-2:叠加循环
// 翻译自 Dan Shiffman的示例， 注解：Yuli Cai 蔡雨利

function setup() {
    createCanvas(600, 400);
}

function draw() {
    background(0);
    strokeWeight(4);
    stroke(255);

    // 对于每一个x, 执行一遍所有的y, 然后进入到下一个x, 执行所有的y
    // 每一帧的x的条件最大值，在这个例子中是变化的，为当前帧的mouseX
    for (let x = 0; x <= mouseX; x += 50) {
        for (let y = 0; y <= height; y += 50) {
            fill(random(255), 0, random(255));
            ellipse(x, y, 25, 25);
        }
    }

}