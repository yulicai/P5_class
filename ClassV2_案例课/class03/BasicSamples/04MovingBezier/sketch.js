/*
 * Yuli Cai/caiyuli.com
 */

// Example: map bezier
// 示例：映射贝塞尔曲线高度
// 线上示例： https://editor.p5js.org/yulicai/sketches/paLE3GRcA

let x1,y1,x2,y2,x3,y3,x4,y4;
let addon=0;


function setup() {
    createCanvas(600, 600);
    noStroke() //不要描线
  
  x1 = x2 = width/2-width/4;
  x3=x4 = width/2+width/4;
  y2=y3 = height/2-height/4+addon;
  y1=y4 = height/2+height/4
}

function draw() {
    background(0);
  
    //贝塞尔曲线 Bezier
    noFill();
    stroke(255);
    ///////////////////
    // bezier(x1,y1,x2,y2,x3,y3,x4,y4)
    // x1，y1: 第一个锚点x,y
    // x2, y2: 第一个控制点x,y
    // x3, y3: 第二个控制点x,y
    // x4, y4: 第二个锚点x,y
    ///////////////////
    y2=y3 = height/2-height/4+addon;
    addon = map(mouseY,0,height,0,100);
    bezier(x1,y1,x2,y2,x3,y3,x4,y4);
    // bezier(186,380,185,80,517,57,517,374);


}