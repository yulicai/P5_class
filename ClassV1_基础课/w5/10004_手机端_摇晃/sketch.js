/*
 * p5手机端互动
 * mobile interaction with p5
 * Yuli Cai 蔡雨利 caiyuli.com
 */

// Example 10-4: mobile interaction with p5
// 示例10-4: p5手机端互动
// 翻译注释自 Jiashan Wu


var balls = [];

function setup() {
    createCanvas(displayWidth, displayHeight);
    for (var i = 0; i < 15; i++) {
        balls.push(new Ball());
    }
    // p5自带功能，检测摇晃程度另不灵敏
    setShakeThreshold(50);
}

function draw() {
    background(0);

    for (var i = 0; i < balls.length; i++) {
        balls[i].move();
        balls[i].turn();
        balls[i].display();
    }

}

function deviceShaken() {
    for (var i = 0; i < balls.length; i++) {
        balls[i].shake();
        balls[i].turn();
    }
    // 在500毫秒之后，执行一个call back回调函数
    setInterval(function() {
        for (var i = 0; i < balls.length; i++) {
            balls[i].stopShake();
            balls[i].move();
        }
    }, 500);
}



// Ball class
class Ball {
    constructor() {
        this.x = random(width);
        this.y = random(height);
        this.diameter = random(20, 30);
        this.xspeed = random(-2, 2);
        this.yspeed = random(-2, 2);
        this.oxspeed = this.xspeed;
        this.oyspeed = this.yspeed;
        this.direction = 0.5;
    }
    move() {
        this.x += this.xspeed * this.direction;
        this.y += this.yspeed * this.direction;

    };

    turn() {
        if (this.x < 0) {
            this.x = 0;
            this.direction = -this.direction;
        } else if (this.y < 0) {
            this.y = 0;
            this.direction = -this.direction;
        } else if (this.x > width - 20) {
            this.x = width - 20;
            this.direction = -this.direction;
        } else if (this.y > height - 20) {
            this.y = height - 20;
            this.direction = -this.direction;
        }
    }

    shake() {
        //   this.xspeed += random(5, accChangeX/3);
        //   this.yspeed += random(5, accChangeX/3);
        this.xspeed += random(5, 15);
        this.yspeed += random(5, 15);
    }

    stopShake() {
        if (this.xspeed > this.oxspeed) {
            this.xspeed -= 0.6;
        } else {
            this.xspeed = this.oxspeed;
        }
        if (this.yspeed > this.oyspeed) {
            this.yspeed -= 0.6;
        } else {
            this.yspeed = this.oyspeed;
        }
    }

    display() {
        ellipse(this.x, this.y, this.diameter, this.diameter);
    };
}
