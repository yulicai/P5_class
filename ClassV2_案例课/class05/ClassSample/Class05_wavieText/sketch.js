/*
* 案例课05 wavieText 扭动的字体
* Developed by: Yuli Cai / caiyuli.com
*/

// 线上案例：https://editor.p5js.org/yulicai/sketches/UcCSeJmMQ

let font;
function preload() {
  font = loadFont('./fonts/Bondi.ttf');
}

let pointsCollection = [];
let boundsCollection = [];

let letters = ['D', 'A', 'N', 'C', 'E'];

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  smooth();

  
  fill(255);
  // 为每一数组里的文字都执行一遍
  for (let i = 0; i < letters.length; i++) {
    let points = font.textToPoints(letters[i], 0, 0, 100, {
      sampleFactor: 5,
      simplifyThreshold: 0
    });
    // 将文字分解出来的点都加到一个数组里
    pointsCollection.push(points);
    // 获取每一个文字的边框包围信息
    let bounds = font.textBounds(letters[i], 0, 0, 100);
    boundsCollection.push(bounds);
  }
}


function draw() {
  background(216, 20, 255);

  // 对于数组当中的每一个字母都执行一遍
  for (let j = 0; j < letters.length; j++) {
    // translate(-bounds.x * width / bounds.w, -bounds.y * height / bounds.h);

    // 为每个的边界和包围点调取之前setup获取到的信息
    let bounds = boundsCollection[j];
    let points = pointsCollection[j];

    push();
    beginShape();
    // 位移到的x位置是基于画面的中央，再加上当前字母之前所有字母的宽度
    translate(width / 2 + j * (bounds.w + 30), height / 2);

    // 对于一个字母里面包含的所有包围点都执行一遍
    for (let i = 0; i < points.length - 1; i++) {
      let p = points[i];
      // 每一个顶点的x坐标在灵动的挪动
      vertex(
        p.x +sin((10 + j * 2) * p.y / bounds.h + millis() / 600) * 10,
        p.y
      );

    }
    endShape();
    pop();
  }
}