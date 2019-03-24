/*
// Simple Particle with PoseNet
// Developed By: Yuli Cai caiyuli.com
// 以下为相关文档
// https://ml5js.org/docs/PoseNet
// https://github.com/tensorflow/tfjs-models/tree/master/posenet
*/

// 在线体验： https://editor.p5js.org/yulicai/sketches/y1wd6wvXm

// 声明poseNet相关的变量
let video; // 如果要用到摄像头捕捉
let poseNet;
let poses = [];

let leftHand = { x: 0, y: 0 };
let rightHand = { x: 0, y: 0 };

let MAX_PARTICLES = 100;
let particles = [];
let particle_texture=null;

let controlPos; //用来替换之前控制粒子的鼠标控制点

function preload(){
    particle_texture = loadImage("assets/particle_texture2.png");
}

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
    poseNet = ml5.poseNet(video, options,modelReady);

      // 每当有一个新的身体被相机检测到，就会将results传递给poses这个变量
    // 这个results是一个包涵者所有检测到的body的骨骼信息的数组
    poseNet.on('pose', function (results) {
        poses = results;
    });
    // 将video html元素隐藏，仅用canvas来显示内容
    video.hide();

    // 随机一个2D向量作为初始值
    controlPos = p5.Vector.random2D();

    // 新建-声明所有的粒子
    for (let i = 0; i < MAX_PARTICLES; i++) {
        let particle = new Particle(random(0.5, 3), random(50, 100), random(height));
        particles.push(particle);
      }
      ellipseMode(CENTER);
}

// 创建poseNet后调用的回调函数，没有实际用处，用于debug
function modelReady() {
    select('#status').html('Model Loaded');
}

function draw() {
    background(232, 48, 21);

    drawKeypoints();
    drawSkeleton();

    for (let i = 0; i < particles.length; i++) {
        // 之前学的时候是用鼠标控制点，现在准备换成手的位置
        let controlForce = particles[i].seek(controlPos); //先通过每个mover自带的seek函数得出吸引力
        controlForce.mult(2.0);
        particles[i].applyForce(controlForce);
      }
     // 对每一个particle进行操控， 更新，显示
  for (let i = 0; i < particles.length; i++) {
    particles[i].run(particles);
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
            stroke(0, 0, 255);
            strokeWeight(1);
            noFill();
            triangle(nose.position.x, nose.position.y, leftEar.position.x, leftEar.position.y, rightEar.position.x, rightEar.position.y);
            pop();

            controlPos = createVector(leftHand.x, leftHand.y);
       
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
            stroke(0, 0, 255);
            line(partA.position.x, partA.position.y, partB.position.x, partB.position.y);
        }
        
    }
    pop();
}

