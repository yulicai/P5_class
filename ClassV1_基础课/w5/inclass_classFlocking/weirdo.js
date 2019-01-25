
class Weirdo {
    constructor(x, y, weight, breathTime) {
        this.x = x;
        this.y = y;
        this.weight = weight;
        this.breathTime = breathTime;
        this.mouthSize = createVector(10,20);
    }

    display() {
        //脸
        noFill();
        stroke(255);
        strokeWeight(3);
        ellipse(this.x, this.y, this.weight);

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
        let basicSize = 20;
        // 用sin方式让嘴巴大小和声音音量大小有变化
        let scale = a * sin(increment * counter) +a+basicSize;
        this.mouthSize = createVector(scale,scale);
    }
}
