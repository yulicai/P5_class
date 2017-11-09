/*
 * Yuli Cai 蔡雨利 2017 翻译自 Dan Shiffman 示例
 */

// Example 2-2: random
// 示例2-2：随机



function setup() {
    createCanvas(600, 400);
    frameRate(60);
    //frameRate(30);
    //frameRate(10);
    //frameRate(1);
}

function draw() {
    var x = random(width); //随机返还一个数在0-画布宽度之间
    var y = random(height);
    var g = random(255); //随机明度

    background(255);
    fill(g);
    ellipse(x, y, 50, 50);

}