/*
 * Basic  Drawing 基础图形绘画
 * Yuli Cai 蔡雨利 2017
 */

// Example 4-3: .push adding elements to an array
// 示例4-3:给一个数组增加元素


// 这里的bubble是一个数值的集合体，里面包含了画一个ellipse所需要的三个数值
let myBubbles = [];
let myBubbleNum = 6;

function setup() {
    createCanvas(500, 500);
    // 在setup中定义了数组中每一个元素是什么，非弹性的，定义一次就可以
    for (let i = 0; i < myBubbleNum; i++) {
        myBubbles[i] = {
            x: i * 30,
            y: i * 40 + random(20),
            size: random(20, 50)
        };
    }

}

function draw() {
    background(255);
    // 思考： 为什么不用myBubbleNum而用myBubbles.length
    for(let i = 0; i<myBubbles.length; i++){
        fill(random(255));
        ellipse(myBubbles[i].x, myBubbles[i].y,myBubbles[i].size);
    }

}

function mousePressed() {
    let newBubble = {
        x:mouseX,
        y:mouseY,
        size:random(20,50)
    };
    myBubbles.push(newBubble);
}