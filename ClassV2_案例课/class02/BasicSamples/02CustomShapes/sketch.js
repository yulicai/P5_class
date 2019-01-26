/*
 * Yuli Cai/caiyuli.com
 */

// Example: custom shapes, curve line
// 示例：自定义形状，曲线
// 线上示例： https://editor.p5js.org/yulicai/sketches/rkQ2NCbkz

function setup() {
    createCanvas(600, 600);

    noStroke() //不要描线
}

function draw() {
    background(0);
    //自定义形状 
    //custom shape with beginShape
    fill(255);
    beginShape(); //顺时针走过一下定点位置，形成闭环，其中顶点数量不限
    vertex(30, 100); //顶点
    vertex(100, 100);
    vertex(120, 500);
    vertex(50, 500);
    endShape(); //有始有终

    //贝塞尔曲线 Bezier
    noFill();
    stroke(255, 102, 0);
    line(85 + 200, 20, 10 + 200, 10);
    line(90 + 200, 90, 15 + 200, 80);
    stroke(255);
    ///////////////////
    // bezier(x1,y1,x2,y2,x3,y3,x4,y4)
    // x1，y1: 第一个锚点x,y
    // x2, y2: 第一个控制点x,y
    // x3, y3: 第二个控制点x,y
    // x4, y4: 第二个锚点x,y
    ///////////////////
    bezier(85 + 200, 20, 10 + 200, 10, 90 + 200, 90, 15 + 200, 80);


}