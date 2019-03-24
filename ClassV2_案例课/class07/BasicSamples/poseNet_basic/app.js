/*
// Basic PoseNet, PoseNet最基础用法
// 根据源码改动+注释： Yuli Cai caiyuli.com
// 以下为相关文档
// https://ml5js.org/docs/PoseNet
// https://github.com/tensorflow/tfjs-models/tree/master/posenet
*/

// 在线体验： https://editor.p5js.org/yulicai/sketches/nFAHY3Ecj


// 声明poseNet相关的变量
let video; // 如果要用到摄像头捕捉
let poseNet;
let poses = [];


function setup() {
    createCanvas(640, 480);
    video = createCapture(VIDEO);
    video.size(width, height);

    // 备用于创建一个新的PoseNet的补充参数
    // 参数解释： https://github.com/tensorflow/tfjs-models/tree/master/posenet
    let options ={
        imageScaleFactor: 0.3,
        flipHorizontal: true,
        minConfidence: 0.5,
        maxPoseDetections: 1,
        scoreThreshold: 0.5,
        detectionType: 'single',
    }
    // 从ml5 library中创建一个新的PoseNet
    // 相关的3参数：input, 补充参数，创建成功后的回调函数
    poseNet = ml5.poseNet(video,options, modelReady);
 
    // 每当有一个新的身体被相机检测到，就会将results传递给poses这个变量
    // 这个results是一个包涵者所有检测到的body的骨骼信息的数组
    poseNet.on('pose', function (results) {
        poses = results;
    });
    // 将video html元素隐藏，仅用canvas来显示内容
    video.hide();
}

// 创建poseNet后调用的回调函数，没有实际用处，用于debug
function modelReady() {
    select('#status').html('Model Loaded');
}


function draw() {
    // 通过image的方式一帧一帧的画video到canvas上
//    image(video, 0, 0, width, height);
    background(255);
    // 分别画出骨骼点和连结骨骼点的线
    drawKeypoints();
    drawSkeleton();
}

// poseNet有个词叫keyPoint, 就代表着检测到的骨骼关节点
function drawKeypoints() {
    // 循环所有检测到的骨骼
    for (let i = 0; i < poses.length; i++) {
        // 对于每一个当前帧检测到的骨骼
        let pose = poses[i].pose;
        // 都循环一遍里面的关节点
        for (let j = 0; j < pose.keypoints.length; j++) {
            // keypoints中的index序列号是有意义的，每一个序列号代表一个特定的关节，比如说左手肘
            let keypoint = pose.keypoints[j];
            // keypoint的score等于是机器的准确程度，比如说：有多大把握这个是
            if (keypoint.score > 0.5) {
                fill(255, 0, 0);
                noStroke();
                ellipse(keypoint.position.x, keypoint.position.y, 10, 10);
            }
        }
    }
}

// 一个画骨骼的函数
function drawSkeleton() {
    // 循环所有检测到的骨骼
    for (let i = 0; i < poses.length; i++) {
        let skeleton = poses[i].skeleton; //这个.skeleton是poseNet自带的
        // 对于每个skeleton，都循环一遍它的关节连结处
        for (let j = 0; j < skeleton.length; j++) {
            let partA = skeleton[j][0];
            let partB = skeleton[j][1];
            stroke(255, 0, 0);
            line(partA.position.x, partA.position.y, partB.position.x, partB.position.y);
        }
    }
}