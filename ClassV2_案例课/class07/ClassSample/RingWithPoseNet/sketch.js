/*
 * Ring instrument with poseNet
 * Developed by Yuli Cai
 */

// 线上案例：https://editor.p5js.org/yulicai/sketches/wmbB0ohuU

// 声明poseNet相关的变量
let video; // 如果要用到摄像头捕捉
let poseNet;
let poses = [];

let leftHand = { x: 0, y: 0 };
let rightHand = { x: 0, y: 0 };

let leftY = rightY = 1;
let easing = 0.05;
let ringNum = 10;

let oscLeft, oscRight;
let freqLeft = freqRight = 240;

let logo;

function preload() {
    logo = loadImage("neon.jpg");
}

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


    // PoseNet
    video = createCapture(VIDEO);
    video.size(640, 480);
    // 备用于创建一个新的PoseNet的补充参数
    // 参数解释： https://github.com/tensorflow/tfjs-models/tree/master/posenet
    let options = {
        imageScaleFactor: 0.3,
        flipHorizontal: true,
        minConfidence: 0.5,
        maxPoseDetections: 1,
        scoreThreshold: 0.5,
        detectionType: 'single',
    }
    // 从ml5 library中创建一个新的PoseNet
    // 相关的3参数：input, 补充参数，创建成功后的回调函数
    poseNet = ml5.poseNet(video, options, modelReady);
    // 每当有一个新的身体被相机检测到，就会将results传递给poses这个变量
    // 这个results是一个包涵者所有检测到的body的骨骼信息的数组
    let pose;
    poseNet.on('pose', function (results) {
        poses = results;
    });
    // 将video html元素隐藏，仅用canvas来显示内容
    video.hide();
    imageMode(CENTER);
}

// 创建poseNet后调用的回调函数，没有实际用处，用于debug
function modelReady() {
    console.log("model ready")
    select('#status').html('Model Loaded');
}


function draw() {
    background(11, 10, 10);
    image(logo, width / 2, height / 2, 200, 200 * logo.height / logo.width);
    drawKeypoints();
    drawSkeleton();

    // left
    let targetLeftY = leftHand.y;
    let dyL = targetLeftY - leftY;
    leftY += dyL * easing;

    freqLeft = map(leftY, 0, height, 100, 500);
    oscLeft.freq(freqLeft);

    stroke(65, 162, 16);
    for (let i = 0; i < ringNum; i++) {
        let currentGap = (height / 2 - leftY) / ringNum;
        let currentY = height / 2 - i * currentGap;
        ellipse(width / 2 - width / 4, currentY, 80, 30);
    }


    // right
    let targetRightY = rightHand.y;
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



// poseNet有个词叫keyPoint, 就代表着检测到的骨骼关节点
function drawKeypoints() {
    // 这里我们不用循环所有检测的骨骼，这个程序只检测一个骨骼
    if (poses.length > 0) {
        for (let i = 0; i < 1; i++) {
            // 对于每一个当前帧检测到的骨骼
            // 都循环一遍里面的关节点
            let pose = poses[i].pose;

            let nose = pose.keypoints[0];
            let leftEar = pose.keypoints[3];
            let rightEar = pose.keypoints[4];

            // 直接通过关节序列号，找到左右手的序列号，得到左右手的坐标
            rightHand = {
                x: pose.keypoints[9].position.x, y: pose.keypoints[9].position.y
            }
            leftHand = {
                x: pose.keypoints[10].position.x, y: pose.keypoints[10].position.y
            }

            // 左右手用一个额外的圆圈画出来
            push();
            fill(255);
            ellipse(leftHand.x, leftHand.y, 10, 10);
            ellipse(rightHand.x, rightHand.y, 10, 10);
            pop();
            // 用上面拿到的：鼻子，左耳，右耳的数据画头
            push();
            stroke(38, 114, 22);
            strokeWeight(1);
            noFill();
            triangle(nose.position.x, nose.position.y, leftEar.position.x, leftEar.position.y, rightEar.position.x, rightEar.position.y);
            pop();

        }
    }

}

// 一个画骨骼的函数
function drawSkeleton() {
    push()
    // 循环所有检测到的骨骼
    for (let i = 0; i < poses.length; i++) {
        let skeleton = poses[i].skeleton;
        // 对于每个skeleton，都循环一遍它的关节连结处
        for (let j = 0; j < skeleton.length; j++) {
            let partA = skeleton[j][0];
            let partB = skeleton[j][1];

            strokeWeight(4);
            stroke(38, 114, 22);
            line(partA.position.x, partA.position.y, partB.position.x, partB.position.y);
        }

    }
    pop();
}