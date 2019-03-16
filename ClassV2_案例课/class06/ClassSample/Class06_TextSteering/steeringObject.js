class SteeringObject {

  constructor(x, y) {
    this.pos = createVector(random(width), random(height));
    this.target = createVector(x, y);
    this.vel = p5.Vector.random2D();
    this.acc = createVector();
    this.r = 3;
    this.maxspeed = 10;
    this.maxforce = 1;

  }

  run() {
    let arrive = this.arrive(this.target);
    let mouse = createVector(mouseX, mouseY);
    // 逃跑是以鼠标为中心的
    let flee = this.flee(mouse);

    arrive.mult(1);
    flee.mult(5);

    this.applyForce(arrive);
    this.applyForce(flee);
  }

  applyForce(f) {
    this.acc.add(f);
  }

  update() {
    this.pos.add(this.vel);
    this.vel.add(this.acc);
    this.acc.mult(0);
  }

  show() {
    stroke(222);
    strokeWeight(1);
    let center = createVector(width / 2, 0);
    let spoke = p5.Vector.sub(this.pos, center);
    spoke.setMag(500);
    spoke.add(this.pos);
    line(this.pos.x, this.pos.y + 15, spoke.x, spoke.y);

    let center2 = createVector(width / 2, height);
    let spoke2 = p5.Vector.sub(this.pos, center2);
    spoke2.setMag(500);
    spoke2.add(this.pos);
    line(this.pos.x, this.pos.y - 15, spoke2.x, spoke2.y);

    stroke(255, 255, 45);
    strokeWeight(this.r);
    point(this.pos.x, this.pos.y);

  }
  
	// 快到目的地减速的能力
  arrive(target) {
    // 目的地与现在的向量差
    var desired = p5.Vector.sub(target, this.pos);
    var d = desired.mag();
    // 速度先设为全速前进
    var speed = this.maxspeed;
    // 如果离target近了，小于100像素
    if (d < 100) {
      //当到了减速区域时
      //速度大小与距离目的地的距离成反比
      speed = map(d, 0, 100, 0, this.maxspeed);
    }
    desired.setMag(speed);
    // 阻力
    var steer = p5.Vector.sub(desired, this.vel);
    steer.limit(this.maxforce);
    return steer;
  }

  flee(target) {
    var desired = p5.Vector.sub(target, this.pos);
    var d = desired.mag();
    if (d < 50) {
      desired.setMag(this.maxspeed);
      // 反向速度
      desired.mult(-1);
      var steer = p5.Vector.sub(desired, this.vel);
      steer.limit(this.maxforce);
      return steer;
    } else {
      return createVector(0, 0);
    }
  }


}