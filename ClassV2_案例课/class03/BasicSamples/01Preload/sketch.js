/*
* Basic Preload 加载素材
* 加载字体
* Developed by: Yuli Cai / caiyuli.com
*/

// 线上案例：https://editor.p5js.org/yulicai/sketches/T5uUdSYZ-


let font;

function preload() {
  // 载入自己的字体 - 在对应的文件夹中
  // 用线上编辑器的话，一定要先上传字体上来
  font = loadFont('fonts/BalooTamma-Regular.ttf');
}


function setup() {
  // 设置
  createCanvas(windowWidth,windowHeight);
  // 字体对齐模式为居中
  textAlign(CENTER);

}

function draw() {

  fill(255,0,0);
  textSize(76);
  textFont('font');
  text("FAITH",width/2,height/2);
}


