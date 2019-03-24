class Particle{
    constructor(x,y,radius,tex){
        // this.mass = m;
        // 基本三元素
        // 1.位置 2.速度 3.加速度
        this.pos = createVector(x, y);
        // 给予每个小东西初始速度，方向不受限制
        this.vel = createVector(random(-1, 1), random(-1, 1));
        this.acc = createVector(0, 0);
        this.r = radius; // 控制这个东西的大小
        this.maxspeed = 5; //最大速度
        this.maxforce = 0.05; //最大作用的力
       // 材质贴图
        this.tex = tex;
    }
    run(particles) {
        this.flock(particles); //这个单独的boid会跟其他的boids进行互动
        this.update();
        this.checkEdges();
        this.display();
    }


    // 牛顿第二定律 f = m*a
    // 力=质量*加速度
    applyForce(force) {
        // let f = p5.Vector.div(force, this.mass);
        this.acc.add(force); //力直接作用给加速度
    }

    // 所有在这个群体的boid不再单独运动
    // 它们的行为受彼此的影响
    // 主要影响： 1.离散力Separation
    flock(particles) {
        let sep = this.separate(particles);
        // 自己编的每个力的作用权重
        sep.mult(1.5);
        // 将最终力的结果作用到这个当前boid上
        this.applyForce(sep); //调用内部函数applyForce
    }

    seek(target) {
        // 想去的地方离现在的地方还有多少差距
        let desired = p5.Vector.sub(target, this.pos);
        desired.normalize(); //将数值标准化，0-1之间，方便计算
        desired.mult(this.maxspeed); //因为本来的数值在0-1之间，乘以最大速度，就是map到0-最大速度 区间了
        // 转向力
        let steer = p5.Vector.sub(desired, this.vel);
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


   // 将弹球判断碰到边界的功能单独提出来
   checkEdges() {
    if (this.pos.x < -this.r) this.pos.x = width + this.r;
    if (this.pos.y < -this.r) this.pos.y = height + this.r;
    if (this.pos.x > width + this.r) this.pos.x = -this.r;
    if (this.pos.y > height + this.r) this.pos.y = -this.r;
}

//这个函数的参数是一个群体，
separate(boids) {
  // 只要近身25像素的距离，就开始有分离力
    let desiredseparation = 100.0;
    let steer = createVector(0, 0);
    let count = 0;
    // 对于每一个在系统中的boid,检查他们是不是相隔太近
    for (let i = 0; i < boids.length; i++) {
        let d = p5.Vector.dist(this.pos, boids[i].pos);
        if ((d > 0) && (d < desiredseparation)) {
            // 如果离得太近了，就要让他们分开，
            let diff = p5.Vector.sub(this.pos, boids[i].pos);
            diff.normalize();
            diff.div(d); // 分离力的大小取决于他们离得多近，化成权重
            steer.add(diff);
            count++; // 要知道有多少个boids在我这个分离力圈子力
        }
    }

    if (count > 0) {
        steer.div(count);
    }
    // 只要最后是有力的，力是大于0的
    if (steer.mag() > 0) {
        // Implement Reynolds: Steering = Desired - Velocity
        steer.normalize();
        steer.mult(this.maxspeed);
        steer.sub(this.velocity);
        steer.limit(this.maxforce);
    }
    // 返回最终力的结果
    return steer;
}
    display(){
        // fill(255,255,255);
        // ellipse(this.pos.x,this.pos.y,5);
        imageMode(CENTER);
       tint(0,0,255);
        // tint(0, 153, 204)
        image(particle_texture,this.pos.x,this.pos.y,this.radius*2,this.radius*2);
    }

}

