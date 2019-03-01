

// 一个与setup draw都分开的类
class Bubble {
    //每个类必有一个constructor, 里面是需要成立这个类的基本数据需求
    constructor(x, y, size, i) {
        // this是javascript类特有的语法
        // 在类里面只带这个类未来所绑定的变量
        // 每个在类里面的假设变量，都用this.来声明和引用
        this.i = i;
        this.x = this.i * 2 + 20;
        this.y = random(height);
        this.size = size;
        this.speed = 0;
        this.lifespan = 255;
        this.dead = false;
    }

    // constructor之后是这个类中所具有的功能
    // 不需要用function这个关键词进行声明了，只是语法上的不同，因为被封装在这个类里面
    display() {
        fill(this.lifespan);
        ellipse(this.x, this.y, this.size);
    }


    // 一个整体的更新迭代功能，针对需要变化的变量
    update() {
        this.y = this.y + this.speed; //程序的进行过程中，对变量进行更改
        this.speed = this.speed + gravity; //与全局变量的互动
        if (this.y >= (height - this.size / 2)) {
            this.speed = this.speed * (-0.95);
        }
        // 更新lifespan
        this.lifespan--;
    }

    // 一个判断泡泡生命周期是否结束的布尔函数
    isDead() {
        if (this.lifespan <= 0) this.dead = true;
        return this.dead; //函数返回布尔值，true or false
    }
}