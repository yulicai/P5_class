/*
 * Bouncing Together 碰撞检测
 * Yuli Cai /caiyuli.com
 */


// 线上案例：https://editor.p5js.org/yulicai/sketches/FB8io3oup

// 球的数组相关
let balls = [];
let numBalls = 13;

// 一些物理参数
let spring = 0.05;
let gravity = 0.03;
let friction = -0.9;


function setup() {
    createCanvas(720, 400);
    // 一次性根据Ball类，创造多个球
    for (let i = 0; i < numBalls; i++) {
        balls[i] = new Ball(
            random(width),
            random(height),
            random(30, 70),
            balls // 注意这里，把balls数组本身也传了进去
        );
    }
    noStroke();
    fill(255, 204);
}

function draw() {
    background(0);
    // 主流程draw中，对于所有的球，都执行一系列动作
    for (let ball of balls) {
        ball.collide();
        ball.move();
        ball.display();
    }
}


// Ball类的声明
class Ball {
    //一个ball需要：
    //x、y坐标
    constructor(xin, yin, din, oin) {
        // x,y坐标
        this.x = xin;
        this.y = yin;
        // x,y方向的速度
        this.vx = 0;
        this.vy = 0;
        // ball的直径
        this.diameter = din;
        // 传进来的要比较的ball的数组
        this.balls = oin;
    }


    intersects(other) {
        let d = dist(this.x, this.y, other.x, other.y);
        return (d < this.diameter / 2 + other.diameter / 2);
    }

    collide() {
        let dx;
        let dy;
        let minDist;
        let angle = 0;
        for (let other of this.balls) {
            dx = other.x - this.x;
            dy = other.y - this.y;
            minDist = other.diameter / 2 + this.diameter / 2;
            // 如果不是自己，而且与之相碰
            if (this != other && this.intersects(other)) {
                // 计算需要反弹的角度
                angle = atan2(dy, dx);
                let targetX = this.x + cos(angle) * minDist;
                let targetY = this.y + sin(angle) * minDist;
                // 根据反弹角度计算加速度，并且乘以一个弹力系数
                let ax = (targetX - other.x) * spring;
                let ay = (targetY - other.y) * spring;
                // 根据加速度改变速度
                this.vx -= ax;
                this.vy -= ay;
                // 被撞的球的速度也要改变
                other.vx += ax;
                other.vy += ay;
            }
        }

    }

    move() {
        // 所有的球都实时受重力影响
        this.vy += gravity;
        // 也受碰撞后的速度影响
        this.x += this.vx;
        this.y += this.vy;

        //如果撞墙
        if (this.x + this.diameter / 2 > width) {
            this.x = width - this.diameter / 2;
            this.vx *= friction; //撞墙能量受损
        } else if (this.x - this.diameter / 2 < 0) {
            this.x = this.diameter / 2;
            this.vx *= friction; //撞墙能量受损
        }
        if (this.y + this.diameter / 2 > height) {
            this.y = height - this.diameter / 2;
            this.vy *= friction;
        } else if (this.y - this.diameter / 2 < 0) {
            this.y = this.diameter / 2;
            this.vy *= friction;
        }
    }

    // ball要自己有形态
    display() {
        ellipse(this.x, this.y, this.diameter, this.diameter);
    }
}