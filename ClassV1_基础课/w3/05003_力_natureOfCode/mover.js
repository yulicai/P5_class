class Mover {
    constructor(m, x, y) {
        this.mass = m;
        // 基本三元素
        // 1.位置 2.速度 3.加速度
        this.pos = createVector(x, y);
        this.vel = createVector(0, 0);
        this.acc = createVector(0, 0);

        this.maxspeed = 5; //最大速度
        this.maxforce = 0.5; //最大作用的力
    }

    // 牛顿第二定律 f = m*a
    // 力=质量*加速度
    applyForce(force) {
        // let f = p5.Vector.div(force, this.mass);
        this.acc.add(force); //力直接作用给加速度
    }

    seek(target){
        // 想去的地方离现在的地方还有多少差距
        let desired = p5.Vector.sub(target,this.pos);
        desired.normalize(); //将数值标准化，0-1之间，方便计算
        desired.mult(this.maxspeed); //因为本来的数值在0-1之间，乘以最大速度，就是map到0-最大速度 区间了
        // 转向力
        let steer = p5.Vector.sub(desired,this.vel); 
        steer.limit(this.maxforce);
        return steer;
    }

    update() {
        // 速度的变化来源于加速度
        this.vel.add(this.acc);
        // 位置的变化来源于速度
        this.pos.add(this.vel);
        // 每一帧结束，我们让加速度清零，这样不会变的无限加速无限快
        this.acc.mult(0); // mult: multiply（乘以0的意思）
    }

    display() {
        stroke(0);
        strokeWeight(2);
        fill(255, 127);
        ellipse(this.pos.x, this.pos.y, this.mass * 16, this.mass * 16);
    }

    // 将弹球判断碰到边界的功能单独提出来
    checkEdges(){
        if(this.pos.y >(height-this.mass*8)){
            this.vel.y *= -0.9; //速度变成相反方向，并且有能量损失
        }
    }
}