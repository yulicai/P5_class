/*
 * Basic  Drawing 基础图形绘画
 * Yuli Cai 蔡雨利
 */

// Example 5-3: basic nature of code, position, velocity, acceloration
// 示例5-3: 基础nature of code, 物理模拟， 位置速度加速度
// 翻译自 Dan Shiffman的示例， 注解：Yuli Cai 蔡雨利

let movers = [];
let moverNum = 100;
let mouse_force_weight = 0.5;
let mouse;


function setup() {
    createCanvas(600, 400);
    noStroke();
    for (let i = 0; i < moverNum; i++) {
        let mover = new Mover(random(0.5, 3), random(50, 100), random(height));
        movers.push(mover);
    }

}

function draw() {
    background(0);
    mouse = createVector(mouseX, mouseY);

    // 将鼠标的吸引力赋予给每一个mover
    for (let i = 0; i < movers.length; i++) {
        let mouseForce = movers[i].seek(mouse); //先通过每个mover自带的seek函数得出吸引力
        movers[i].applyForce(mouseForce);
    }

    // 对每一个mover进行操控
    for (let i = 0; i < movers.length; i++) {
        movers[i].update();
        movers[i].display();
        movers[i].checkEdges();
    }


}