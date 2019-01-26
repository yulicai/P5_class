/*
 * Yuli Cai/ caiyuli.com  翻译自 Dan Shiffman 示例
 */

// Example: push and pop
// 示例：压弹式



function setup() {
    createCanvas(600, 400);
    fill(100, 102);

}

function draw() {
	background(255);
    ellipse(0, 50, 33, 33); // 左边的圆

    push(); // 启动一个新的画画模式
    strokeWeight(10);
    fill(204, 153, 0);
    ellipse(33, 50, 33, 33); // 中间偏左的圆

    push(); // 再启动一个新的画画模式
    stroke(0, 102, 153);
    ellipse(66, 50, 33, 33); // 中间偏右的圆
    pop(); // 恢复到原来的设置，位置和颜色同时

    pop(); // 恢复到原来的设置， push完了一定要pop复原

    ellipse(100, 50, 33, 33); // 右边的圆
}