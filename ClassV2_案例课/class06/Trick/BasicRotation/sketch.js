
let clocks = [];

let oriAcc = 0.005;

let clockLength = 50;
let betweenClocks = 10;

let colNum = 30;
let rolNum = 12;
let gap = 20;
let cellWidth = null;

let cursorImg;

//////////////////////////////

function preload(){
  cursorImg = loadImage("assets/cursor.png");
}

//////////////////////////////

function setup() {
  noCursor();

  createCanvas(windowWidth,windowHeight);
  cellWidth = clockLength+gap;
  //angleMode(RADIANS);

  for(var i = 0;i<colNum;i++){
    for(var j=0;j<rolNum;j++){
      let posX= (i+1)*cellWidth-cellWidth/2;
      let posY = (j+1)*cellWidth-cellWidth/2;
      let clock = new Clock(posX,posY);
      clocks.push(clock);
    }
  }
}

//////////////////////////////

function draw() {
  // put drawing code here
  noCursor();
  background(0);

  // UPdate position
  for(var i =0;i<clocks.length;i++){
    let distance =dist(mouseX,mouseY,clocks[i].x,clocks[i].y);
    clocks[i].move(distance);
  }

  // Draw
  for(var i =0;i<clocks.length;i++){
    clocks[i].display();
  }

  // My cursor
  image(cursorImg,mouseX,mouseY,120,112);
}

//////////////////////////////

function drawClock(toX,toY,angle){
  push();
  fill(255);
  stroke(255);
  rectMode(CENTER);
  translate(toX,toY);
  rotate(angle);
  line(-clockLength/2,0,clockLength/2,0);
  ellipse(clockLength/2,0,8,8);
  ellipse(-clockLength/2,0,8,8);
  
  // outline
  noFill();
  ellipse(0,0,clockLength);
  pop();

}

//////////////////////////////

class Clock{
  constructor(x,y){
      this.dist = 0;
      this.x = x;
      this.y = y;
      this.angle = 0;
      this.vel = 0;
      this.acc = oriAcc;
  }

  move(dis){
    this.dist = dis;
    this.acc = map(this.dist,0,width/2,0,0.03);

    //this.vel = 0;
    this.vel=this.acc;
    this.angle += this.vel;
  }

  display(){
    push();
    fill(255);
   stroke(255);
    rectMode(CENTER);
   translate(this.x,this.y);
  rotate(this.angle);
  line(-clockLength/2,0,clockLength/2,0);
  ellipse(clockLength/2,0,8,8);
  ellipse(-clockLength/2,0,8,8);
  
  // outline
  noFill();
  ellipse(0,0,clockLength);
  pop();
  }


}