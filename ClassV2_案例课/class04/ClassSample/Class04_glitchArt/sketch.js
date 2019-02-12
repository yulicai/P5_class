/*
* 案例课04 声控Glitch艺术
* Developed by: Yuli Cai / caiyuli.com
*/

// 线上案例：https://editor.p5js.org/yulicai/sketches/En-ZVn-D8

let img;
let hOffset;

// 原声麦克风和
let mic, scaledMic;

function preload() {
  img = loadImage('assets/tv.jpg');
}

function setup() {

  hOffset = 0;
  createCanvas(940, 720);

  // Audio 声音
  mic = new p5.AudioIn()
  mic.start();
}

function draw() {

  image(img, 0, 0);

  // 获取mic音量
  micLevel = mic.getLevel();
  scaledMic = map(micLevel, 0., 0.2, 0., 6.);

  // 每一帧都随机有一个滤镜效果
  // randomFilter();

  // 总共3块错位的地点
  for (let x = 0; x <= 3; x++) {
    hOffset = 0;

    // 开始位置, 从整体高度中随机选取一个纵向位置开始
    let start = random(height) / 2 + random(height) / 2;
    // 结束位置
    let end = random(height) / 1.15;

    for (let i = start; i < end; i++) {
      // 随机错位
      hOffset += random(-scaledMic, scaledMic);
      // hOffset += random(-5, 5);

      let yPos;
      if (i >= height) yPos = i - height;
      else yPos = i;

      // 每次错位1像素高度
      copy(img, 0, yPos, width, 1, hOffset, yPos, width, 1);//copy(srcImage, sx, sy, sw, sh, dx, dy, dw, dh)
    }
  }
}

function randomFilter() {
  let rnd = 2 + random(50);

  if (rnd <= 7) {
    //filter(INVERT);
  } else if (rnd > 7 && rnd <= 13) {
    filter(POSTERIZE, 2 + random(200));
  } else if (rnd > 13 && rnd <= 20) {
    filter(DILATE);
  } else if (rnd > 20 && rnd <= 25) {
    filter(ERODE);
  } else if (rnd > 25 && rnd <= 28) {
    filter(GRAY);
  }

}
