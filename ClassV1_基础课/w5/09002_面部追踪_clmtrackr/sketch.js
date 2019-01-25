/*
 * 视频音频以及动态面部捕捉
 * Yuli Cai 蔡雨利 caiyuli.com
 */

// Example 9-2: basic face tracking with clmtrakr
// 示例9-2: 基本面部捕捉运用clmtrakr
// clmtrackr更多信息: https://github.com/auduno/clmtrackr

let ctracker;

function setup() {
  // 开启摄像头，允许浏览器开启摄像头
  // 如果用p5线上编辑器，需要在右上角齿轮设置>sketch settings>勾选serve over https
  let videoInput = createCapture(VIDEO);
  videoInput.size(400, 300);
  videoInput.position(0, 0);
  //videoInput.hide();

  // 创建我们的画布并将它赋予到本地变量
  let cnv = createCanvas(400, 300);
  cnv.position(0, 0);
  // 创建一个本地tracker
  ctracker = new clm.tracker();
  // model模型文件已经在html文件里面链接好了
  ctracker.init(pModel);
  ctracker.start(videoInput.elt);
  noStroke();
}

function draw() {
  // 清空画布
  clear();
  // 获取一个数组的面部识别点位置[x,y]
  let positions = ctracker.getCurrentPosition();

  for (let i = 0; i < positions.length; i++) {
    // 将填充的颜色与圆的位置信息相对应，形成彩虹色的效果
    fill(map(positions[i][0], width * 0.33, width * 0.66, 0, 255), map(positions[i][1], height * 0.33, height * 0.66, 0, 255), 255);
    // 把每个位置信息画成圆圈
    ellipse(positions[i][0], positions[i][1], 8, 8);

  }
}
