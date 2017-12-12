
/*
 * Basic  Drawing with data 与数据结合的基础图形绘画
 * Yuli Cai 蔡雨利 2017
 */

// Example 7-2: basic api 
// 示例7-2:基本api
// giphy api参考文档： https://developers.giphy.com/docs/
// 翻译自Dan Shiffman的代码

let api = "http://api.giphy.com/v1/gifs/search?";
let apiKey = "&api_key=dc6zaTOxFJmzC";
let myKey = "hgdTuJLx2onIwW9k7KTTPu8nFqEViQrK";
let query = "&q=china";


function setup() {
  noCanvas();
  let url = api + apiKey + query;
  loadJSON(url, gotData);
}

function gotData(giphy) {
  for (let i = 0; i < giphy.data.length; i++) {
    createImg(giphy.data[i].images.original.url);
  }

}