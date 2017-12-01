

class Mover {
    constructor(m, x, y) {
        this.mass = m;
        this.pos = createVector(x, y);
        this.vel = createVector(0, 0);
        this.acc = createVector(0, 0);

    }
    applyforce(force) {
        var a = p5.Vector.div(force, this.mass);
        this.acc.add(a);
    };
    update() {
        this.vel.add(this.acc);
        this.pos.add(this.vel);
        this.acc.mult(0);
    };
    display() {
        noStroke;
        fill(0);
        ellipse(this.pos.x, this.pos.y, this.mass * 6, this.mass * 6);
        for (var i = 0; i < movers.length; i++) {
            line(width / 2, height / 2, this.pos.x, this.pos.y);
        }
    };
    checkEdge() {
        if (this.pos.x > width) {
            this.pos.x = width;
            this.vel.x *= -1;
            sound.play();
        }
        if (this.pos.x < 0) {
            this.pos.x = 0;
            this.vel.x *= -1;

        }
        if (this.pos.y > height) {
            this.pos.y = height;
            this.vel.y *= -1;
        }
    }
}