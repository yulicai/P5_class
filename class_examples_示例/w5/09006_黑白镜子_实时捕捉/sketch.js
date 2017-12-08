/*
 * 视频音频以及动态面部捕捉
 * Yuli Cai 蔡雨利 caiyuli.com
 */

// Example 9-6: mirror, live camera capture
// 示例9-6: 黑白镜子，实时视频捕捉
// 翻译注释自 Daniel Shiffman

// 分辨率，每行列有多少个格子
var videoScale = 16;

// 多少行列
var cols, rows;


function setup() {
  createCanvas(640, 480);

  // 声明行和列具体的值
  cols = width/videoScale;
  rows = height/videoScale;

  video = createCapture(VIDEO);
  video.size(cols,rows);
  //video.hide();

}

function draw() {
  background(0);
  image(video, 0, 0);
  video.loadPixels();

  // // Begin loop for columns
  for (var i = 0; i < cols; i++) {
    // Begin loop for rows
    for (var j = 0; j < rows; j++) {
      // 将x反相达到镜子的效果
      // mirrored column = width - column - 1 |  x = x-x-1
      // 当前在数组中的位置 loc = (x+y*cols)*4; 因为每个像素存4个元素，rgba
      var loc = ((cols - i - 1) + j * cols) * 4;

      // 下面的功能将当前像素的红绿蓝从数组中取出来
      var r = video.pixels[loc   ];
      var g = video.pixels[loc + 1];
      var b = video.pixels[loc + 2];

      // 根据每个像素的明度来决定一个长方形的大小
      // 明度(r+g+b)/3
      // 越亮的像素对应越大的长方形，越暗对应越小
      var sz = map((r+g+b)/3, 0, 255, 0, videoScale);
      rectMode(CENTER);
      fill(255);
      noStroke();

      // 对于每个行和列，一个长方形会被根据videoScale重新放大或缩小并画在当前位置
      var x = i*videoScale;
      var y = j*videoScale;
      rect(x + videoScale/2, y + videoScale/2, sz, sz);
    }
  }
}
