/*
 * Filter图片滤镜
 * p5js.org官方案例
 * 中文注释：Yuli Cai /caiyuli.com
 */


// 线上案例： https://editor.p5js.org/yulicai/sketches/XLQGGU1wL

let img;
function preload() {
    img = loadImage('assets/marvel.png');
}
function setup() {
    createCanvas(img.width,img.height);
    image(img, 0, 0);

    // 以下为各种滤镜
    filter(THRESHOLD);
    // filter(GRAY);
    // filter(OPAQUE);
    // filter(INVERT);
    // filter(POSTERIZE, 3); // 2-255间的值， 越小效果越明显
    // filter(DILATE);
    // filter(BLUR, 3); // 比较慢
    // filter(ERODE);
}