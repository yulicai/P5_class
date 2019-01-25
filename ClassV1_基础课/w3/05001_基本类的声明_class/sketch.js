/*
 * Basic  Drawing 基础图形绘画
 * Yuli Cai 蔡雨利
 */

// Example 5-1: basic class declaration 
// 示例5-1: 基本类的声明
// 翻译自 Dan Shiffman的示例， 注解：Yuli Cai 蔡雨利

let bubble1;
let gravity = 0.1;

function setup() {
    createCanvas(600, 400);
    bubble1 = new Bubble();
}

function draw() {
    background(0);
    bubble1.display();
    bubble1.update();

}


// 一个与setup draw都分开的类
class Bubble {
    //每个类必有一个constructor, 里面是需要成立这个类的基本数据需求
    constructor() {
        // this是javascript类特有的语法
        // 在类里面只带这个类未来所绑定的变量
        // 每个在类里面的假设变量，都用this.来声明和引用
        this.x = random(width);
        this.y = random(height);
        this.size = random(10,30);
        this.speed = 0; 
    }

    // constructor之后是这个类中所具有的功能
    // 不需要用function这个关键词进行声明了，只是语法上的不同，因为被封装在这个类里面
    display(){
      fill(175);
      stroke(0);
      ellipse(this.x, this.y,this.size);
    }
    update(){
      this.y = this.y + this.speed; //程序的进行过程中，对变量进行更改
      this.speed = this.speed + gravity; //与全局变量的互动
      if(this.y>=(height-this.size/2)){
        this.speed = this.speed * (-0.95);
      }
    }



}