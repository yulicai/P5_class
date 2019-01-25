/*
* 案例课01 基础互动动态海报
* Basic Interactive Poster
* Developed by: Yuli Cai 蔡雨利
*/

// 线上案例： https://editor.p5js.org/yulicai/sketches/1epvO5Mm-


// 一些被选颜色
//red : (206,48,38)
// grey: (216,216,216)
// blue: (21,30,245)

let statement= "We are a community of, and in solidarity with, \n people from every gender identity and expression,  \n sexual orientation, race, ethnicity, language, neuro-type, size, ability, \n class, religion, culture, subculture, political opinion, age, \n skill level, occupation, and background. \n We acknowledge that not everyone has the time, financial means, or capacity to actively participate,\n but we recognize and encourage involvement of all kinds. \n We facilitate and foster access and empowerment. We are all learners."

function setup() {
  createCanvas(1024,1366);
  rectMode(CENTER);
}

function draw() {
  background(255);

  // Center Rect 中间的圆
  fill(216,216,216);
  stroke(21,30,245);
  strokeWeight(10);
  rect(width/2,height/2,width/2,width/2+40);

  // 右上角十字
  noStroke();
  fill(21,30,245);
  // 横杠
  rect(width-380,540,120,14);
  // 竖杠
  push();
  translate(width-380,540);
  rotate(PI/2);
  rect(0,0,120,14);
  pop();

  // 文字
  textSize(14);
  //textStyle(BOLD);
  text(statement,120,height/2);

  // 下方十字
  noStroke();
  fill(21,30,245);
  // 横杠
  push();
  translate(width/2,height/2+(width/2+40)/2);
  rotate((mouseX/mouseY)*PI/4);
  // rotate(PI/4);
  rect(0,0,80,8);
  pop();
  // 竖杠
  push();
  translate(width/2,height/2+(width/2+40)/2);
  rotate((mouseX/mouseY)*3*PI/4);
  //rotate(3*PI/4);
  rect(0,0,80,8);
  pop();


  // 竖线
  stroke(21,30,245);
  strokeWeight(4);
  line(width/2,height/2+(width/2+40)/2,width/2,height);

  // 下方的人
  stroke(206,48,38);
  fill(216,216,216);
  // 人一
  // ellipse(width/2+150, height-100,50,50);
  // line(width/2+150,height-100+25,width/2+150,height);
  ellipse(width/2+150, height-100-mouseY/5,50,50);
  line(width/2+150,height-100+25-mouseY/5,width/2+150,height);
  // 人二
  // ellipse(width/2+230, height-80,50,50);
  // line(width/2+230,height-80+25,width/2+230,height);
  ellipse(width/2+230, height-80-mouseY/3,50,50);
  line(width/2+230,height-80+25-mouseY/3,width/2+230,height);
  // 人三
  // ellipse(width/2+290, height-120,50,50);
  // line(width/2+290,height-120+25,width/2+290,height);
  ellipse(width/2+290, height-120-mouseY/4,50,50);
  line(width/2+290,height-120+25-mouseY/4,width/2+290,height);

  // Degug
  // fill(0,0,255);
  // ellipse(width/2,height/2,6,6);
}