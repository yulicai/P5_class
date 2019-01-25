/*
 * Yuli Cai 蔡雨利 原创
 */

// Example: Random
// 示例：随机
// 线上示例：https://editor.p5js.org/yulicai/sketches/SyLo_xoHD

let names = [
  "LONDON",
  "NEW YORK",
  "BERLIN",
  "SHANGHAI",
  "BEIJING",
  "TOKYO",
  "SEOUL",
  "SAN FRANCISCO",
  "PARIS",
  "KYOTO",
  "SAN DIEGO",
  "ROME",
  "ATHANS",
  
];

let randomResult1 = randomResult2 = randomResult3 = "click mouse";
let randomColor = 0;
function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(10);
}

function draw() {
  background(0,0,255);
  
  randomResult1 = names[floor(random(names.length))]
   randomResult2 = names[floor(random(names.length))]
   randomResult3 = names[floor(random(names.length))]
  randomColor= random(255);
  
  fill(randomColor);
  textSize(36);
  text(randomResult1,100,height/2-100);
  text(randomResult2,300,height/2-100);
  text(randomResult3,500,height/2-100);
  
  text(randomResult1,100,height/2+100);
  text(randomResult2,300,height/2+100);
  text(randomResult3,500,height/2+100);
}

