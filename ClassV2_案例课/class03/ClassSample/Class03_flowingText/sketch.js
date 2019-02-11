/*
* 案例课03 迷你story telling
* Developed by: Yuli Cai / caiyuli.com
*/

// 线上案例：https://editor.p5js.org/yulicai/sketches/osbh6RnTo

let segLength = 80,x, y, x2, y2;

let rectWidth = 150;

let doorBell = {
  x:150,
  y:100,
  size:50
}

let doorBell2 = {
  x: 100,
  y: 100,
  size: 50
}

let soundEffect, eyeSound1, eyeSound2;
let clicked1 = clicked2 = false;

function preload() {
  soundEffect = loadSound('assets/005.wav');
  eyeSound1 = loadSound('assets/hurt1.wav');
  eyeSound2 = loadSound('assets/hurt2.wav');
}  

function setup() {
  createCanvas(710, 400);
  strokeWeight(20);
  stroke(255, 100);
  rectMode(CENTER);

  doorBell2.x = width - doorBell.x;
  doorBell2.y = doorBell.y

  x = width / 2;
  y = height / 2;
  x2 = x;
  y2 = y;
}

function draw() {
  background(0);
  dragSegment();


  // 如果鼠标离关节固定点的距离已经超过了两段线伸直的距离
  if(dist(mouseX,mouseY,x2,y2)>segLength*2){
    if (!soundEffect.isPlaying()){
    soundEffect.play();
    }
  }
  else{
    if(soundEffect.isPlaying()){
    soundEffect.stop();
    }
  }

  // 画嘴巴
  push();
  fill(0,0,255);
  strokeWeight(10);
  stroke(255, 100);
  rect(width/2,height-rectWidth/8,rectWidth,rectWidth/4);
  pop();

  // 画门铃1
  if(clicked1){
    push();
    fill(255,0,0);
    ellipse(doorBell.x, doorBell.y, doorBell.size);
    pop();
  }
  else{
    push();
    fill(255);
    ellipse(doorBell.x, doorBell.y, doorBell.size);
    pop();
  }

  // 画门铃2
  if (clicked2) {
    push();
    fill(255, 0, 0);
    ellipse(doorBell2.x, doorBell.y, doorBell.size);
    pop();
  }
  else {
    push();
    fill(255);
    ellipse(doorBell2.x, doorBell.y, doorBell.size);
    pop();
  }
}

////////////////////
// 以下为非默认函数 //
///////////////////

function dragSegment() {
  background(0);
  // 计算鼠标与关节的固定点的距离
  // 让线的方向与鼠标所相对关节固定点的方向一致
  dx = mouseX - x;
  dy = mouseY - y;
  // 反三角函数计算出角度
  angle1 = atan2(dy, dx);

  tx = mouseX - cos(angle1) * segLength;
  ty = mouseY - sin(angle1) * segLength;
  // 鼠标相对于第一段线段节点的距离
  dx = tx - x2;
  dy = ty - y2;
  angle2 = atan2(dy, dx);

  // 第二条线段的起始点
  x = x2 + cos(angle2) * segLength;
  y = y2 + sin(angle2) * segLength;

  // segment函数需要一个起始点
  segment(x, y, angle1);
  segment(x2, y2, angle2);
}

function segment(x, y, a) {
  push();
  translate(x, y);
  rotate(a);
  line(0, 0, segLength, 0);
  pop();
}

function inDoorBell1(){
  // 函数的返回值
  let result = false;

  // 鼠标与圆心的距离小于圆的半径时
  if(dist(mouseX,mouseY,doorBell.x,doorBell.y)<doorBell.size){
    result = true;
  }
  else{
    clicked1 = false;
    result = false;
  }
  return result;
}

function inDoorBell2() {
  // 函数的返回值
  let result = false;

  // 鼠标与圆心的距离小于圆的半径时
  if (dist(mouseX, mouseY, doorBell2.x, doorBell2.y) < doorBell2.size) {
    result = true;
  }
  else {
    clicked2 = false;
    result = false;
  }
  return result;
}

function mousePressed(){
  if(inDoorBell1()){
    // 左眼 左侧发声音
    // 越往左panning越小，最小为-1
    eyeSound1.pan(-1.0);
    eyeSound1.play();
    rectWidth = 300;
    clicked1 = true;
  }

  if (inDoorBell2()) {
    //右眼 右侧发声音
    eyeSound2.pan(1.0);
    eyeSound2.play();
    rectWidth = 200;
    clicked2 = true;
  }
}

function mouseReleased(){
  // 当鼠标不再按下的时候
  // 所有的“被按下”状态复原
  clicked1= clicked2 = false;
  rectWidth = 150;
}