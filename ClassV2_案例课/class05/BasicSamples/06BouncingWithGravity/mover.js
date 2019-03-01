/*
 * Bouncing Ball with Vector 向量与弹球
 * nature of code 官方案例 http://natureofcode.com
 * Developed by Dan Shiffman; 中文注释：Yuli Cai /caiyuli.com
 */


// 线上案例：https://editor.p5js.org/yulicai/sketches/lhj1hxhnq

class Mover {
    constructor() {
        this.mass = 1;
        this.position = createVector(30, 30);
        this.velocity = createVector(0, 0);
        this.acceleration = createVector(0, 0);
    }

    applyForce(force) {
        var f = p5.Vector.div(force, this.mass);
        this.acceleration.add(f);
    }

    update() {
        this.velocity.add(this.acceleration);
        this.position.add(this.velocity);
        this.acceleration.mult(0);
    }

    display() {
        stroke(0);
        strokeWeight(2);
        fill(255, 127);
        ellipse(this.position.x, this.position.y, 48, 48);
    }

    checkEdges() {
        if (this.position.x > width) {
            this.position.x = width;
            this.velocity.x *= -1;
        } else if (this.position.x < 0) {
            this.velocity.x *= -1;
            this.position.x = 0;
        }
        if (this.position.y > height) {
            this.velocity.y *= -1;
            this.position.y = height;
        }
    }

}