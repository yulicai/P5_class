/*
 * 视频音频以及动态面部捕捉
 * Yuli Cai 蔡雨利 caiyuli.com
 */

// Example 9-4: pointillism, live camera capture
// 示例9-4: 点式绘画，实时视频捕捉
// 翻译注释自 Daniel Shiffman


let slider;

function setup() {
  createCanvas(640, 480);
  //运用一个滑条来决定笔触点的大小
  slider = createSlider(4, 64, 16);
  // 开启摄像头，允许浏览器开启摄像头
  // 如果用p5线上编辑器，需要在右上角齿轮设置>sketch settings>勾选serve over https
  video = createCapture(VIDEO);
  // video的大小跟画布大小一样
  video.size(width, height);

  video.hide();//可以尝试把这一行代码注释掉

  background(0);
}

function draw() {
  // p5自带获取像素点功能
  video.loadPixels();

  // 每一帧我们画十个点
  for (let i = 0; i < 10; i++) {

    // 在屏幕任何一点上绘画
    let x = floor(random(video.width));
    let y = floor(random(video.height));

    // 获取一个像素点的颜色信息，col是一个数组
    let col = video.get(x, y);

    // 我们用每一个像素的颜色信息来画一个圆在该像素点的位置
    noStroke();
    // col[0]是当前像素的r值 同理g,b
    fill(col[0], col[1], col[2], 127);
    // 像素点的大小跟slider的值一样
    ellipse(x, y, slider.value(), slider.value());

  }
}
