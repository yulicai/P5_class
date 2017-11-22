/*
 * Basic  Drawing 基础图形绘画
 * Yuli Cai 蔡雨利
 */

// Example 5-2: class with parameters, separate class js file
// 示例5-2: 带参数的类的声明，单独类的js文件
// 翻译自 Dan Shiffman的示例， 注解：Yuli Cai 蔡雨利

let bubbles = [];
let bubbleNum = 100;
let gravity = 0.1;


function setup() {
    createCanvas(600, 400);
    noStroke();
    for (let i = 0; i < bubbleNum; i++) {
        let bubble = new Bubble();
        bubbles.push(bubble);
    }

}

function draw() {
    background(0);

    // 对每一个bubble进行操控
    for(let i = 0; i<bubbles.length;i++){
      bubbles[i].update(); 
      bubbles[i].display();
    }

    // 判断是不是所有bubble还是活着的
    // 去除生命周期已经结束的bubble
    for (let i = bubbles.length - 1; i >= 0; i--) {
        if (bubbles[i].isDead()) { //调用bubble自带的布尔函数功能来判断
            bubbles.splice(i, 1);
        }
    }



}
