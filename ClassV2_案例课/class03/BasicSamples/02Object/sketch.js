/*
 * Basic  Drawing Object
 * Yuli Cai /caiyuli.com
 */

// Example: object basic
// 示例:基础对象
// 注译自Dan Shiffman的代码

// 线上案例： https://editor.p5js.org/yulicai/sketches/HyYladj1z

// 声明一个对象
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
    // 对象变量的使用方式，需要标注是属于哪个对象的
    // 对象A的X属性
    ellipse(circle.x, circle.y, circle.diameter, circle.diameter);

    circle.x = circle.x + 1;
}