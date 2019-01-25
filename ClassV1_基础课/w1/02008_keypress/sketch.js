/*
 * Yuli Cai 蔡雨利 2017   
 */

// Example 2-8: keyPressed statement
// 示例2-8：键盘基础互动


var value = 0;
var sizeY = 50;

// 有些代码可以没有setup
// p5会默认帮你生成一个画布

function draw() {
    background(255);
    fill(value);
    rect(25, 25, 50, sizeY);
    value++; //每一帧都增加一个数值
    if (value >= 255) {
        value = 0;
    }
    sizeY = 50; //放在draw的末尾和放在draw的开头有很大区别
}

function keyPressed() {
	sizeY = 100;
    value = 0;
}