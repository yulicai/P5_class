/*
 * Basic  Drawing 基础图形绘画
 * Yuli Cai 蔡雨利 2017
 */

// Example 3-3: function, easing，Modularity
// 示例3-3:函数定义, 淡入淡出， 模块化

let xPos = 0;
let yPos = 0;
let diffx = diffy = 0;
let easing = 0.1;

function setup() {
    createCanvas(600, 400);
    fill(255);
}

function draw() {
    background(0);
    normalFollowing(); // 叫哪个函数，起不同的作用
    // easingEffect();
    strokeWeight(4);
    stroke(255);
    ellipse(xPos, yPos, 20, 20);
}

/*
 * 以下两个函数都是针对椭圆位置做出改变
 */

// 基本淡入淡出作用
function easingEffect() {
    diffx = mouseX - xPos;
    diffy = mouseY - yPos;
    xPos = xPos + easing * diffx;
    yPos = yPos + easing * diffy;
}
// 单纯鼠标跟随效果
function normalFollowing() {
    xPos = mouseX;
    yPos = mouseY;
}