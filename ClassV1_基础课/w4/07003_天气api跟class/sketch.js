/*
 * Basic  Drawing with data 与数据结合的基础图形绘画
 * Yuli Cai 蔡雨利 2017
 */

// Example 7-3: api openweather with class
// 示例7-3:api 可视化天气和类一起运用
// Openweather api参考文档： http://openweathermap.org/current

// API内容的每一个元素，它们合起来是整个url
// let url = 'http://api.openweathermap.org/data/2.5/weather?APPID=93d33a8893531dd7645a20862f35d23c&';
let api = 'http://api.openweathermap.org/data/2.5/weather?q=';
let apiKey = '&APPID=001b0f58045147663b1ea518d34d88b4';
let units = '&units=metric';

// API调用回调的数据内容，本地存储全局变量
let cityname = "cityname";
let countryname = "countryname";
let description = "current weather"

// 输入框内容的值
let input;

let sound;
let movers = [];
let speed = 0;

function preload() {
    sound = loadSound('sound.wav');
}

function setup() {
    createCanvas(1000, 800);
    for (let i = 0; i < 4; i++) {
        movers[i] = new Mover(random(3, 6), width / 2, random(height));
    }
    // 以下为简单的html内容，跟index.html的文件相结合
    let button = select('#submit');
    //点击submit按钮，就调用函数weatherAsk
    button.mousePressed(weatherAsk);
    input = select('#city');

}

function draw() {
    background(200);
    for (let i = 0; i < movers.length; i++) {
        let wind = createVector(speed * 0.1, 0);
        movers[i].applyforce(wind);
        let gravity = createVector(0, 0.1 * movers[i].mass);
        movers[i].applyforce(gravity);
        movers[i].update();
        movers[i].display();
        movers[i].checkEdge();
    }

    text("country:   " + countryname, 50, 25)
    text("city:   " + cityname, 50, 45);
    text("current weather:   " + description, 50, 65);
    rect(50, 75, speed * 10, 20);

}


function weatherAsk() {
  //将前面的速度清零，这样更清楚显示当前城市风速
  for (let i = 0; i < movers.length; i++) {
        let zero = createVector(0, 0);
        movers[i].vel = zero;
    }
  //把所有零散的部件，string，连接起来编程一个完整的url
    let url = api + input.value() + apiKey + units;
    // call back function回调函数，每当成功load了当前的url后，调用函数handleWeather
    loadJSON(url, handleWeather);
}


function handleWeather(data) {
    speed = data.wind.speed;
    cityname = data.name;
    countryname = data.sys.country;
    description = data.weather[0].description;
}

