/*
 * 视频音频以及动态面部捕捉
 * Yuli Cai 蔡雨利 caiyuli.com
 */

// Example 9-3: face tracking and emotion detection with clmtrakr
// 示例9-3: 面部捕捉与情绪识别运用clmtrakr
// clmtrackr更多信息: https://github.com/auduno/clmtrackr

let ctracker;
let emotionData;
let ec; //情绪识别本地变量

function setup() {
  // 开启摄像头，允许浏览器开启摄像头
  // 如果用p5线上编辑器，需要在右上角齿轮设置>sketch settings>勾选serve over https
  let videoInput = createCapture(VIDEO);
  videoInput.size(400, 300);
  videoInput.position(0, 0);

  // setup canvas
  let cnv = createCanvas(400, 300);
  cnv.position(0, 0);

  // 创建一个本地tracker
  ctracker = new clm.tracker();
  ctracker.init(pModel);
  ctracker.start(videoInput.elt);

  // 运用library中的功能，得到本地的情绪分析
  ec = new emotionClassifier();
  ec.init(emotionModel);
  emotionData = ec.getBlank();

  textSize(20);
}

function draw() {
  clear();
  let cp = ctracker.getCurrentParameters();
  let er = ec.meanPredict(cp);

  for (let i=0; i<er.length; i++) {
    strokeWeight(3);
    text(er[i].emotion+' '+nfc(er[i].value, 2), 20, (i+1)*30);
  }
}
