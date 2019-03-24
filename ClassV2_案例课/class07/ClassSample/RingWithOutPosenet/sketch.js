/*
 * Ring instrument
 * Developed by Yuli Cai
 */

// 线上案例：https://editor.p5js.org/yulicai/sketches/wmbB0ohuU

let leftY = rightY = 1;
let easing = 0.05;
let ringNum = 10;

let oscLeft, oscRight;
let freqLeft = freqRight = 240;


function setup() {
  createCanvas(720, 400);
  noFill();
  ellipseMode(CENTER);


  oscLeft = new p5.Oscillator();
  oscLeft.setType('sine');
  oscLeft.freq(freqLeft);
  oscLeft.amp(0.5);
  oscLeft.start();


  oscRight = new p5.Oscillator();
  oscRight.setType('sine');
  oscRight.freq(freqRight);
  oscRight.amp(0.5);
  oscRight.start();
}


function draw() {
  background(237, 34, 93);

  let targetLeftY = mouseY;
  let dyL = targetLeftY - leftY;
  leftY += dyL * easing;

  freqLeft = map(leftY, 0, height, 100, 500);
  oscLeft.freq(freqLeft);

  for (let i = 0; i < ringNum; i++) {
    let currentGap = (height / 2 - leftY) / ringNum;
    let currentY = height / 2 - i * currentGap;
    ellipse(width / 2 - width / 4, currentY, 80, 30);
  }


  // right
  let targetRightY = mouseY;
  let dyR = targetRightY - rightY;
  rightY += dyR * easing;

  freqRight = map(rightY, 0, height, 500, 100);
  oscRight.freq(freqRight);

  for (let i = 0; i < ringNum; i++) {
    let currentGap = (height / 2 - rightY) / ringNum;
    let currentY = height / 2 - i * currentGap;
    ellipse(width / 2 + width / 4, currentY, 80, 30);
  }
}