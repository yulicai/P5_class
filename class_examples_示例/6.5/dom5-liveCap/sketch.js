// 这个sketch需要在p5线上编辑器运行
// 或者开启一个本地服务器 local server
// Yuli Cai


// 创造一个全局变量
var capture;


// 创造一个实时捕捉， 并把它赋予给变量capture
function setup() {
  createCanvas(200,200);
  capture = createCapture(VIDEO)
  capture.size(200,200)
}


// 不间断的将capture里面的像素点画到画布上
function draw() {
  //Original video slides horizontally
  // 这里显示的是本身的捕捉视频，随着鼠标移动而移动
  capture.position(mouseX,0);

  // 另外再画一个反相的视频图像画布再固定的位置
  image(capture,0,0,200,200);
  filter(INVERT);
}