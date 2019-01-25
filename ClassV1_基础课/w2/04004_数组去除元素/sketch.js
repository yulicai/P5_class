/*
 * Basic  Drawing 基础图形绘画
 * Yuli Cai 蔡雨利 2017
 */

// Example 4-4: .splice removing elements from an array
// 示例4-4:从一个数组中减少元素


// 这里的bubble是一个数值的集合体，里面包含了画一个ellipse所需要的三个数值
let myBubbles = [];
let myBubbleNum = 6;

function setup() {
    createCanvas(500, 500);
    noStroke();
    // 在setup中定义了数组中每一个元素是什么，非弹性的，定义一次就可以
    for (let i = 0; i < myBubbleNum; i++) {
        myBubbles[i] = {
            x: i * 30,
            y: i * 40 + random(20),
            size: random(20, 50),
            lifespan: random(255)
        };
    }

}

function draw() {
    background(255);
    // 思考： 为什么不用myBubbleNum而用myBubbles.length
    for (let i = 0; i < myBubbles.length; i++) {
        fill(myBubbles[i].lifespan);
        ellipse(myBubbles[i].x, myBubbles[i].y, myBubbles[i].size);
        myBubbles[i].lifespan--;
    }

    // 思考：为什么是myBubbles.length-1, 与index相关
    for (let i = myBubbles.length - 1; i >= 0; i--) {
        if (myBubbles[i].lifespan <= 0) {
            myBubbles.splice(i, 1);
        }
    }

}

function mousePressed() {
    let newBubble = {
        x:mouseX,
        y:mouseY,
        size:random(20,50),
        lifespan:random(255)
    };
    myBubbles.push(newBubble);
}