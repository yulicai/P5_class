/*
* 案例课02 流动互动动态海报
* Flowy Interactive Poster
* Developed by: Yuli Cai / caiyuli.com
*/

// 线上案例：https://editor.p5js.org/yulicai/sketches/Vo7mWX-1D

// 随机数相关
let xstart, xnoise, ystart, ynoise;

// 整体颜色形状相关
let rectSize = 20;
let col,textCol;
let r = g = 0;


// 文字相关
let textR = 255;
let textGap = 4;
let font1,font2,font3;

function preload() {
  // 载入自己的字体 - 在对应的文件夹中
  // 用线上编辑器的话，一定要先上传字体上来
  font1 = loadFont('fonts/Bondi.ttf');
  font2 = loadFont('fonts/Roboto.ttf');
  font3 = loadFont('fonts/BalooTamma-Regular.ttf');
}


function setup() {
  // 设置
  createCanvas(windowWidth,windowHeight);
  textAlign(CENTER);

	col = color(r,g,255);
  textCol = color(textR,0,0);

  // Base gap宽度
  xstart = 2*rectSize;
  ystart = 2*rectSize;

  // 背景的格子
  drawGrid();
}

function draw() {
  // 底色的矩形
  push();
  fill(col);
  noStroke();
  // 整个画面二分之一宽度和高度的矩形，且居中
  rect(width/2-width/4,height/2-height/4,width/2,height/2);
  pop();


  // 整体在运动的关键两行
  xstart += 0.005;
  ystart += 0.005;

  xnoise = xstart;
  ynoise = ystart;

  push()
  // 从底色矩形的左上顶点开始排列
  translate(width/4,height/4);
	// 格子的间隔是在随机变动的
    for(let y = 0; y<height/2; y+=rectSize){
    // 每一个格子的
  	ynoise += noise(2);
  	// 变动后重新reset到base
  	xnoise = xstart;
  	for(let x=0; x<width/2;x+=rectSize){
  		xnoise +=noise(2);
  		drawRect(x,y,noise(xnoise,ynoise)); // noise 返回值是0-1
  	}
  }
  pop();

  // 画出文字的方法（函数）
  // 函数的内容在下面具体定义的地方
  drawTextGroup("FAITH",width/2,height/2);
  drawTextGroup("#¥%&*…%$.",width/2-100,height/2-100);
  drawTextGroup("たまたま",width/2+100,height/2+100);
}


// 画每个动的小正方形的函数（动态的部分在主函数draw当中）
function drawRect(x,y,noiseFactor){
  // len为矩形的大小
	let len = rectSize*noiseFactor;
	push();
	fill(255);
	noStroke();
	rect(x,y,len,len);
	pop();
}


// 画格子的函数
function drawGrid(){
	// lines
  // 每行多少条线，自动由宽度和大小相除决定
  let lineWideNum = width/rectSize;
  let lineHighNum = height/rectSize;

	push();
  stroke(col);
  for(let i = 0; i<lineWideNum;i++){
    // 竖线
	 line(i*rectSize,0,i*rectSize,height);
	 for(let j=0;j<lineHighNum;j++){
    // 横线
		line(0,j*rectSize,width,j*rectSize);
}
}
 pop();
}

// 每个文字都是由几个重叠的文字组成的
function drawTextGroup(line,baseX,baseY){
  for(let i = 0;i<5;i++){
  for(let j=0;j<2;j++){
    // textGap是重叠文字之间的距离
    // drawText具体的函数在下面，接受一个颜色的参数，所以会有渐变的效果
    drawText(line, baseX+i*textGap*cos(PI/4),baseY+i*textGap*sin(PI/4),textR-i*20);
  }
}
}

// 每一个最终显示出来的文字的最小集再次
function drawText(line,x,y,col){
  push();
  translate(x,y);
  rotate(-PI/6);
  // 接受的颜色参数用来控制红色的程度
  fill(col,0,0);
  //textFont("font2");
  textSize(76);
  text(line,0,0);
  pop();
}


function keyPressed(){
  // 每次敲击键盘，都会有一个随机的颜色，还会调整文字的间隔
r = random(255);
g = random(255);
col = color(r,g,255);
textGap = random(1,8);
drawGrid();
}