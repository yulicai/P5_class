let left_eye, right_eye, mouth;
let scream;
let me;
let counter = 0.0;

function preload() {
    left_eye = loadImage("assets/left_eye.png");
    right_eye = loadImage("assets/right_eye.png");
    mouth = loadImage("assets/mouth.png");

    scream = loadSound("assets/Lay_me_down.m4a");

}

function setup() {
    createCanvas(windowWidth, windowHeight);
    me = new Weirdo(width / 2, height / 2, 150, 150.0);
    ellipseMode(CENTER);

    scream.play();
    scream.loop();

}

function draw() {
	background(255);
	me.x = mouseX;
	me.y = mouseY;
	me.update();
	me.display();
	counter++;
}

class Weirdo {

    constructor(x, y, weight, breathTime) {
        this.x = x;
        this.y = y;
        this.weight = weight;
        this.breathTime = breathTime;
        this.mouthSize = createVector(this.weight * 0.7, this.weight);
    }

    display() {
        //脸
        noFill();
        stroke(0);
        ellipse(this.x, this.y, 2 * this.weight);

        //眼睛
        let left_eye_pos = createVector(this.x - 1.5 * this.weight, this.y - this.weight);
        let right_eye_pos = createVector(this.x + this.weight / 2, this.y - this.weight);
        image(left_eye, left_eye_pos.x, left_eye_pos.y, this.weight, this.weight);
        image(right_eye, right_eye_pos.x, right_eye_pos.y, this.weight, this.weight);

        //嘴
        push();
        let mouth_pos = createVector(this.x, this.y + this.weight / 2);
        imageMode(CENTER);
        image(mouth, mouth_pos.x, mouth_pos.y, this.mouthSize.x, this.mouthSize.y);
        pop();

    }

    update(){

    	let increment = TWO_PI/this.breathTime;
    	let a = this.weight/2;
    	let basicSize = 100;
    	let scale = a*sin(increment*counter)+a + basicSize;
    	let volume = map(scale,basicSize,basicSize+2*a,0.1,1.0);
    	scream.setVolume(volume);

    	this.mouthSize = createVector(scale,scale);
    }


}