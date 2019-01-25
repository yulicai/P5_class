/*
 * Basic  Drawing 基础图形绘画
 * Yuli Cai 蔡雨利
 */

// Example 9-1: a human being, loadImage()
// 示例9-1: 一个人，倒入图像

let scream;
let left_eye, right_eye, mouth;
let me;
let counter = 0.0;

function preload() {
    left_eye = loadImage("assets/left_eye.png");
    right_eye = loadImage("assets/right_eye.png");
    mouth = loadImage("assets/mouth.png");
    scream = loadSound("assets/Lay_me_down.m4a");
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    noCursor();
    me = new Weirdo(width / 2, height / 2, 150, 150.0);
    ellipseMode(CENTER);
    // 声音文件设置
    // 具体参考p5.sound library 参考文档
    scream.play();
    scream.loop();
}

function draw() {
    background(255);
    // 每一帧更新位置信息，让位置信息随时跟鼠标位置一致
    me.x = mouseX;
    me.y = mouseY;
    me.update();
    me.display();
    counter++;
}

class Weirdo {
    constructor(x, y, weight, breathTime) {
        this.x = x;
        this.y = y;
        this.weight = weight;
        this.breathTime = breathTime;
        this.mouthSize = createVector(this.weight * 0.7, this.weight);
    }

    display() {
        //脸
        noFill();
        stroke(0);
        strokeWeight(3);
        ellipse(this.x, this.y, 2 * this.weight);
        // 眼睛
        let left_eye_pos = createVector(this.x - 1.5 * this.weight, this.y - this.weight);
        let right_eye_pos = createVector(this.x + this.weight / 2, this.y - this.weight);
        image(left_eye, left_eye_pos.x, left_eye_pos.y, this.weight, this.weight);
        image(right_eye, right_eye_pos.x, right_eye_pos.y, this.weight, this.weight);
        //嘴
        push()
        let mouth_pos = createVector(this.x , this.y + this.weight / 2);
        imageMode(CENTER); //用push 和 pop限制 只对嘴巴这张图片作用
        image(mouth, mouth_pos.x, mouth_pos.y, this.mouthSize.x, this.mouthSize.y);
        pop();
    }

    update() {
        let increment = TWO_PI / this.breathTime;
        let a = this.weight/2;
        let basicSize = 50;
        // 用sin方式让嘴巴大小和声音音量大小有变化
        let scale = a * sin(increment * counter) +a+basicSize;
        let volume = map(scale,basicSize,a+basicSize,0.1,1.);
        scream.setVolume(volume);
        this.mouthSize = createVector(scale,scale);
    }
}
