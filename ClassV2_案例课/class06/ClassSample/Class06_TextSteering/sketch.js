/*
 * Text Steering 字的聚合
 * Yuli Cai /caiyuli.com
 */


// 线上案例：https://editor.p5js.org/yulicai/sketches/r1dvehRn-

let font;
const FONT_SIZE = 100; // 常量
let textList = ["Now", "Or?", "Never", "..."];

let textPoints = []; //current on showing text points array

let breakDownTexts = []; //array to hold sets of points for different text


let currentIndex = 0;


////////////////////////////

function preload() {
  // 如果要写中文，就要支持中文字体
  font = loadFont('AvenirNextLTPro-Demi.otf');
}

function setup() {
  createCanvas(900, 300);
  background(0);

  // 循环想要轮回的字
  for (let i = 0; i < textList.length; i++) {
    // let sampe_factor = map(textList[i].length, 1, 12, 0.2, .24);
    // 整个字的大小框框  
    let bbox = font.textBounds(textList[i], 0, 0, FONT_SIZE);
    let halfWidth = bbox.w / 2;
    let xPos = width / 2 - halfWidth;
    let yPos = height / 2;
    // 把字变成点，当前for循环循环到的字
    let currentBreakDown = font.textToPoints(textList[i], xPos, yPos, FONT_SIZE, {
      sampleFactor: 0.2
    });
    // 存到整个字点的数组里
    breakDownTexts.push(currentBreakDown);
  }


  // let randomIndex = int(random(breakDownTexts.length));
  for (let i = 0; i < breakDownTexts[currentIndex].length; i++) {
    let pt = breakDownTexts[currentIndex][i];
    // 这个textPoint是我们定义的SteeringObject，是能动的，不是原来那个点
    let textPoint = new SteeringObject(pt.x, pt.y);
    textPoints.push(textPoint);
  }
  currentIndex++;
}

function draw() {
  background(51);
  for (var i = 0; i < textPoints.length; i++) {
    var v = textPoints[i];
    v.run();
    v.update();
    v.show();
  }
}


// 重置
function reset() {
  // 清空textPoints数组
  textPoints = [];
  // let randomIndex = int(random(breakDownTexts.length));
  if (currentIndex >= textList.length) currentIndex = 0;
  for (let i = 0; i < breakDownTexts[currentIndex].length; i++) {
    let pt = breakDownTexts[currentIndex][i];
    let textPoint = new SteeringObject(pt.x, pt.y);
    textPoints.push(textPoint);
  }
  currentIndex++;
}


// 另一种检测键盘按下的写法
window.addEventListener("keydown", function(e) {
  if (e.keyCode == 32) {
    //press space key
    reset();
  }
});
