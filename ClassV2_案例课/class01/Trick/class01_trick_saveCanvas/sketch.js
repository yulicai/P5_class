/*
* Trick 01 保存你的作品
* saveCanvas
* Developed by: Yuli Cai/ caiyuli.com
*/

// 线上案例： https://editor.p5js.org/yulicai/sketches/gX1Hegkvu

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
}

// 键盘按下后
function keyPressed() {
  // 如果按的是"s"键且不区分大小写
  if (key == 's' || key == 'S') {

    // 时间，用于文件名
    let dd = day();
    let mm = month();
    let yy = year();

    // saveCanvas([filename], [extension])
    saveCanvas(yy+'_'+mm+'_'+dd, 'png');

    // console.log("canvas saved");
  }
}