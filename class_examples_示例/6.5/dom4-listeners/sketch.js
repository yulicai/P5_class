// p5 DOM 特殊listeners

var img;
var canvas;

function setup() {
  canvas = createCanvas(400, 400);
  img = createImg("http://th07.deviantart.net/fs70/PRE/i/2011/260/3/5/dash_hooray_by_rainbowcrab-d49xk0d.png");

  img.position(190, 50);
  img.size(200, 200);

  canvas.position(300, 50);
  // Attach listeners for mouse events related to canvas
  // 将功能与鼠标事件相结合
  canvas.mouseOver(uniHide);
  canvas.mouseOut(uniShow);
}

function draw() {
  // 条杠画布
  noStroke();
  background(220, 180, 200);
  fill(180, 200, 40);
  strokeWeight(6);
  stroke(180, 100, 240);
  for (var i = 0; i < width; i += 15) {
    line(i, 0, i, height);
  }
}

// 上面调用到的隐藏和显示功能
function uniHide() {
  img.hide();
}

function uniShow() {
  img.show();
}