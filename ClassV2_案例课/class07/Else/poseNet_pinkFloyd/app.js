/*
// PoseNet pink floyd, 
// Developed By: Yuli Cai caiyuli.com
// 以下为相关文档
// https://ml5js.org/docs/PoseNet
// https://github.com/tensorflow/tfjs-models/tree/master/posenet
*/

// 在线体验： https://editor.p5js.org/yulicai/sketches/MR0fXtisX

// 声明poseNet相关的变量
let video; // 如果要用到摄像头捕捉
let poseNet;
let poses = [];

let leftHand = { x: 0, y: 0 }; 
let rightHand = { x: 0, y: 0 };

/////////////
// floyd
let angle = 0;
let speed = 0.01;

let points = [];

const projection = [
    [1, 0, 0],
    [0, 1, 0],
];
//////////

//////////
// rainbow triangle
let startY = -300;
let endY = 100;
let num = 6;
let sharedX = -550;
let rainbowColor = null;
let waveAngle = 0;
let waveVel = 0.001;
/////////////

function setup() {
    createCanvas(windowWidth,windowHeight);
    video = createCapture(VIDEO);
    video.size(640, 480);


    // 备用于创建一个新的PoseNet的补充参数
    // 参数解释： https://github.com/tensorflow/tfjs-models/tree/master/posenet
    let options = {
        imageScaleFactor: 0.3,
        flipHorizontal: true, //如果想要镜像的效果
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

    // 跟彩虹三角形相关的点
    points[0] = createVector(-0.5, -0.5, -0.5);
    points[1] = createVector(0.5, -0.5, -0.5);
    points[2] = createVector(0.5, 0.5, -0.5);
    points[3] = createVector(-0.5, 0.5, -0.5);
    points[4] = createVector(-0.5, -0.5, 0.5);
    points[5] = createVector(0.5, -0.5, 0.5);
    points[6] = createVector(0.5, 0.5, 0.5);
    points[7] = createVector(-0.5, 0.5, 0.5);

    rainbowColor = [color(232, 26, 21),
    color(253, 121, 36),
    color(254, 253, 78),
    color(42, 245, 76),
    color(56, 89, 233),
    color(80, 16, 90)];

}

// 创建poseNet后调用的回调函数，没有实际用处，用于debug
function modelReady() {
    select('#status').html('Model Loaded');
}

function draw() {
    background(0);

    // 把画的骨骼等比缩放一下，而且位移一下
    push();
    translate(width / 2, height / 2);
    scale(0.5);
    drawKeypoints();
    drawSkeleton();
    pop();

    push();
    translate(width / 2, height / 2);
    scale(2);
    drawFloyd();
    pop();

}

// poseNet有个词叫keyPoint, 就代表着检测到的骨骼关节点
function drawKeypoints() {
    // 这里我们不用循环所有检测的骨骼，这个程序只检测一个骨骼
    if(poses.length>0){
    for (let i = 0; i <1; i++) {
        // 对于每一个当前帧检测到的骨骼
        // 都循环一遍里面的关节点

        let pose = poses[i].pose;

        // 以下3个节点用来画头
        let nose = pose.keypoints[0];
        let leftEar = pose.keypoints[3];
        let rightEar = pose.keypoints[4];

        // 直接通过关节序列号，找到左右手的序列号，得到左右手的坐标
        leftHand = {
            x: pose.keypoints[9].position.x, y: pose.keypoints[9].position.y
        }
        rightHand = {
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
        stroke(0,0,255);
        strokeWeight(1);
        noFill();
        triangle(nose.position.x,nose.position.y,leftEar.position.x,leftEar.position.y,rightEar.position.x,rightEar.position.y);
        pop();
    }
}
}

// 一个画骨骼的函数
function drawSkeleton() {
    // 循环所有检测到的骨骼
    for (let i = 0; i < poses.length; i++) {
        let skeleton = poses[i].skeleton;
           // 对于每个skeleton，都循环一遍它的关节连结处
        for (let j = 0; j < skeleton.length; j++) {
            let partA = skeleton[j][0];
            let partB = skeleton[j][1];
            strokeWeight(2);
            stroke(0, 0, 255);
            line(partA.position.x, partA.position.y, partB.position.x, partB.position.y);
        }
        
    }
}

///////////////////////////////

function drawFloyd(){
    // Cube旋转的角度，跟左右手之间的水平距离挂钩
    angle = map((leftHand.x-rightHand.x),0,480,0.,1.);

    // const代表一个常量
    const rotationZ = [
        [cos(angle), -sin(angle), 0],
        [sin(angle), cos(angle), 0],
        [0, 0, 1],
    ];

    const rotationX = [
        [1, 0, 0],
        [0, cos(angle), -sin(angle)],
        [0, sin(angle), cos(angle)],
    ];

    const rotationY = [
        [cos(angle), 0, sin(angle)],
        [0, 1, 0],
        [-sin(angle), 0, cos(angle)],
    ];

    let projected = [];

    for (let i = 0; i < points.length; i++) {
        let rotated = matmul(rotationY, points[i]);
        rotated = matmul(rotationX, rotated);
        rotated = matmul(rotationZ, rotated);
        let projected2d = matmul(projection, rotated);
        projected2d.mult(200);
        projected[i] = projected2d;
        //point(projected2d.x, projected2d.y);
    }

    // Connecting
    for (let i = 0; i < 4; i++) {
        connect(i, (i + 1) % 4, projected);
        drawRainbow();
        connect(i, i + 4, projected);
        connect(i + 4, ((i + 1) % 4) + 4, projected);
    }

    angle += speed;
}


function connect(i, j, points) {
    const a = points[i];
    const b = points[j];
    strokeWeight(1);
    stroke(255);
    line(a.x, a.y, b.x, b.y);
}

function drawRainbow() {
    let x1 = x2 = sharedX;
    let gap = sin(waveAngle) * (endY - startY) / num;
    let x3 = 0;
    let y3 = 0;
    //fill(255, 0, 0);
    //stroke(0,0,255);
    noStroke();
    for (let i = 0; i < num; i++) {
        let y1 = (i * gap + startY);
        let y2 = (i + 1) * gap + startY;
        fill(rainbowColor[i]);
        triangle(x1, y1, x2, y2, x3, y3);
    }
    waveAngle += waveVel;
}