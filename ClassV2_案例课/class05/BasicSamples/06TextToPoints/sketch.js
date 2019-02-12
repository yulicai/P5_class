/*
 * TextToPoints 将文字点状化
 * Developed by：Yuli Cai /caiyuli.com
 */


// 线上案例： https://editor.p5js.org/yulicai/sketches/1QfVFvdW8

let font;
function preload() {
  font = loadFont('./fonts/Bondi.ttf');
}

let points = [];



function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  smooth();


  fill(255);
  // textToPoints(txt, x, y, fontSize, [options])
     points = font.textToPoints("Hey", 0, 0, 100, {
      sampleFactor: 5,
      simplifyThreshold: 0
    });

}



function draw() {
  background(0, 0, 255);

    translate(width/2,height/2);
    for (let i = 0; i < points.length - 1; i++) {
      let p = points[i];
      // 除以a后无余数 = 每a个...
      if(i%20==0){
      // 每一个顶点的x坐标在灵动的挪动
      fill(255);
      p.x+=random(-0.3,0.3);
      ellipse(p.x,p.y,2);
      }
    }


}