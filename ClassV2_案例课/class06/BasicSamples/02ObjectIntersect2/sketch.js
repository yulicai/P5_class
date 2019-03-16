/*
 * Object Intersecting 02 对象之间相互检测 02
 * Developed by Dan Shiffman; 修改+中文注释：Yuli Cai /caiyuli.com
 */


// 线上案例：https://editor.p5js.org/yulicai/sketches/X8Easm_Mg

let bubbles = [];

function setup() {
    createCanvas(600, 400);

    // 一次性新建20个bubble,并存在数组当中
    for (let i = 0; i < 20; i++) {
        let x = random(width);
        let y = random(height);
        let r = random(10, 50);
        bubbles[i] = new Bubble(x, y, r);
    }
}

function draw() {
    background(0);

    /* 划重点 */

    // 循环一遍所有数组中的bubble，b为比较的主体	
    for (let b of bubbles) {
        b.show();
        b.move();
        let overlapping = false;
        // 循环第二遍所有数组中的bubble
        for (let other of bubbles) {
            // other如其名
            //如果第二次比较的bubble是其他的bubble，而不是比较的主体b
            // 而且二者还重叠了
            if (b !== other && b.intersects(other)) {
                overlapping = true;
            }
        }
        if (overlapping) {
            b.changeColor(255);
        } else {
            b.changeColor(0);
        }

    }

}

class Bubble {
    constructor(x, y, r = 50) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.brightness = 0;
    }

    intersects(other) {
        let d = dist(this.x, this.y, other.x, other.y);
        return (d < this.r + other.r);
        // if (d < this.r + other.r) {
        //   return true;
        // } else {
        //   return false;
        // }
    }

    changeColor(bright) {
        this.brightness = bright;
    }


    move() {
        this.x = this.x + random(-2, 2);
        this.y = this.y + random(-2, 2);
    }

    show() {
        stroke(255);
        strokeWeight(4);
        fill(this.brightness, 125);
        ellipse(this.x, this.y, this.r * 2);
    }
}