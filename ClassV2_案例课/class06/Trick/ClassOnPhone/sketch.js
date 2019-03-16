/*
 * flocking with phone
 * Yuli Cai caiyuli.com
 */

// Example 10-5: nature of code flocking
// 示例810-5: nature of code, 物理模拟进阶
// https://p5js.org/examples/simulate-flocking.html
// 改译自 Dan Shiffman的示例， 注解：Yuli Cai caiyuli.com

//微信事件监听停止|防止滑动
document.querySelector('body').addEventListener('touchstart', function(ev) {
  event.preventDefault();
});


let movers = [];
let moverNum = 10;
let mouse_force_weight = 0.5;
let mouse;

let shakenCount = 0;
let attracting = true; //鼠标是吸引还是抵抗

let displayWord = "使劲摇这些丧气脸";
let wordSize = 22;
let mouth;
let counter = 0.0;

function preload() {
  mouth = loadImage("mouth_white.png");
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  // 在setup中定义声明每一个小boid
  for (let i = 0; i < moverNum; i++) {
    let boid = new Boid(random(0.5, 3), random(50, 100), random(height));
    movers.push(boid);
  }

  ellipseMode(CENTER);
  setShakeThreshold(70);

}

function draw() {
  background(255, 0, 222);
  textSize(wordSize);
  fill(232, 5, 200);
  noStroke();

  let wordWidth = textWidth(displayWord);
  text(displayWord, width / 2 - wordWidth / 2, 80);
  // 鼠标的位置转换成向量
  mouse = createVector(mouseX, mouseY);
  if (attracting) {
    // 如果是吸引模式
    // 将鼠标的吸引力赋予给每一个mover
    for (let i = 0; i < movers.length; i++) {
      // let mouseForce = movers[i].seek(mouse); //先通过每个mover自带的seek函数得出吸引力
      // movers[i].applyForce(mouseForce);
      let gravity = createVector(0.6 * accelerationX, accelerationY);
      let gravityForce = movers[i].seek(gravity);
      movers[i].applyForce(gravity);
    }
  }


  // 对每一个mover进行操控， 更新，显示
  for (let i = 0; i < movers.length; i++) {
    movers[i].flock(movers);
    movers[i].update();
    movers[i].display();
    movers[i].checkEdges();
  }

  counter++;
}

// 如果设备摇晃
function deviceShaken() {
  for (let i = 0; i < movers.length; i++) {
      movers[i].weirdo.weight *=1.2 ;
    }
    wordSize = 24;
  shakenCount++;
  if(shakenCount ==0 ||shakenCount ==1|| shakenCount ==2)  displayWord = "糟糕更大了！！";
  if(shakenCount ==3||shakenCount ==4)  displayWord = "还玩！快回去工作！";
  if(shakenCount ==5)  displayWord = "#¥%……&*（";
   
}