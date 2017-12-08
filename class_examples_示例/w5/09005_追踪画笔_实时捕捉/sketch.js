/*
 * 视频音频以及动态面部捕捉
 * Yuli Cai 蔡雨利 caiyuli.com
 */

// Example 9-5: the scribbler, live camera capture
// 示例9-5: 追踪画笔，实时视频捕捉
// 翻译注释自 Daniel Shiffman



var x;
var y;
var video;

function setup() {
  createCanvas(640, 480);
  background(175);
  // 从哪里开始画
  x = width/2;
  y = height/2;


  // 开启摄像头，允许浏览器开启摄像头
  // 如果用p5线上编辑器，需要在右上角齿轮设置>sketch settings>勾选serve over https
  video = createCapture(VIDEO);
  video.size(width, height);
  // 上面这个功能实际在页面上创造了额外的一个视频元素
  // 下面这行代码是为了隐藏它，因为我们自己在画布中画了视频的内容
  video.hide();

}

function draw() {
  video.loadPixels();

  // 下一帧的位置是建立在当前帧的位置之上，在此之上加上一个随机的数值
  // 新的位置被限制在画布的大小之内
  var newx = constrain(x + random(-20, 20), 0, width);
  var newy = constrain(y + random(-20, 20), 0, height);

  var col = video.get(floor(newx), floor(newy));

  // var loc = (floor(newx) + floor(newy) * width) * 4;
  // var r = video.pixels[loc];
  // var g = video.pixels[loc + 1];
  // var b = video.pixels[loc + 2];
  // Draw a line from x,y to the newx,newy
  stroke(col);
  strokeWeight(4);
  line(x, y, newx, newy);

  // 新旧替换
  x = newx;
  y = newy;
}
