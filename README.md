# P5创意编程
###### 2017
###### [蔡雨利](http://caiyuli.com/) x 最毕设


## 资源 / Resources
1. [p5官方网站](https://p5js.org/)
2. [p5线上编辑器](https://alpha.editor.p5js.org/)
3. [p5 Reference 指令参考](https://p5js.org/reference/)
4. yuli.cai@nyu.edu


***


[Dan Shiffman](http://shiffman.net/)

[Lauren Mccarthy](http://lauren-mccarthy.com/)

## 课程创意案例
1. [Constellation](https://www.openprocessing.org/sketch/434620)
2. [艺术家Reza](http://www.syedrezaali.com/)

## 商业案例/好玩的studio
1. [Art + Com](https://artcom.de/en/)
2. [Jason Bruges](http://www.jasonbruges.com/art/)


## 课程教案 Syllabus
### 课程大纲
1. 	创意编程简介和简单创意绘画
2. 	基于编程语言的创意互动视觉 － 01
3. 	基于编程语言的创意互动视觉 － 02
4. 	基于编程语言的创意互动视觉 － 03
5. 	基于编程语言的创意互动视觉 － 04
6. 	画布之外
7. 	数据的艺术 Intro to Data
8. 	视频与声音与图像 Video & Sound & Image
9. 	移动端（手机）创作
10. p5之外更广的世界
11. 作品showcase

<br>

#### 作业上交形式

[点击此处进入作业页面](https://github.com/yulicai/P5_class/wiki/p5创意编程---作业区域/)，查看作业描述，上交作业

***

<br>

### 1. 创意编程简介和简单创意绘画 NOV 10

##### 本次课程目标：

##### 首个基于JavaScript的网页静态创作

##### 熟悉p5编程基本环境

##### 结合自身背景，想做的项目，创作可能性

<br>

**互动编程基本介绍**

- 互动编程应用领域，实际案例<br>
  [BlueCadet 博物馆触屏设计](http://www.bluecadet.com/work/museum-of-the-american-revolution/) <br>
  [Reza VJ 后台操控](http://www.syedrezaali.com/#/ccrmamodulations/)<br>
  [Boundary Functions by Scott Snibbe](https://www.snibbe.com/digital-art#/projects/interactive/boundaryfunctions/)<br>

- 不同互动编程软件架构

  Processing & p5.js

  [openFrameworks](http://openframeworks.cc/), [Cinder](https://libcinder.org/)

  Max/msp 数据流互动媒体编程

- 硬件编程， Arduino， 与互动编程如何结合与创造


**P5.js, 本课程教学语言与应用框架介绍**

- P5.js, 与广泛HTML, CSS,和 JavaScript的关系<br>
  [a short journey 动态编程 threejs](http://www.ashortjourney.com/)

- P5 online editor vs 本地端

1. 线上编辑器操作示范

2. 线下编辑器是什么，其他text editor，日后可能会用到<br>
  [英语版如何运行一个本地服务器](https://github.com/lmccart/itp-creative-js/wiki/SimpleHTTPServer)




**编程内容教学**

- 第一个程序！

- 代码注释 comment //

- Setup () 和 draw（）

- js文件链接到html文件以及两者关系

- 变量 variable, var 和 let

- 基本绘画指令
  - color and background 颜色和背景<br>
    background() 背景<br>
    fill() 填充<br> 
    stroke() 描边<br>

    [stroke fill 描边和填充](http://alpha.editor.p5js.org/yulicai/sketches/B1qlERbkM) <br>

  - shaping 形状<br>
    ellipse, line, point, rect<br>

    [画多个圆](http://alpha.editor.p5js.org/yulicai/sketches/H1DtV0b1f)<br>

    bezier, curve<br>
    beginShape, endShape, vertex<br>

    [其他形状示例](http://alpha.editor.p5js.org/yulicai/sketches/rkQ2NCbkz)<br>


- 更多参见，P5.js reference page

<br>

**本次作业**

1. 肖像画<br>
	运用所学的基本绘画编程指令，画一个肖像画，自画像或者是他人肖像画<br>
	要求： 有创意，追求视觉效果<br>
	发散思维： 后期学更多的内容后，比如可以用projection mapping把肖像投影到雕塑上，比如可以用家里植物的生长速度控制画像中头发的增长速度...开脑洞
2. 未来的畅想<br>
	形式： 一段200字以内的文字或者一幅小画<br>
	内容： 上完本次课程后，在现有的知识的基础上，觉得之后能把这个跟什么结合起来做一些什么创作,作为第一次博客/文字/图文的记录，在石墨文档中编辑。

<br>

**作业事例**（绝对不局限于事例，发挥想象力）

[ 织线](http://alpha.editor.p5js.org/full/HkAxMZga-)

[城市](http://alpha.editor.p5js.org/bonder/sketches/SkXcZd7qZ)

[自画像](http://alpha.editor.p5js.org/YifanLiu/sketches/ByefCvxq-)


<br>

***

<br>

### 2. 基于编程语言的创意互动视觉 － 01 NOV 11

##### 本次课程目标：

##### 基于更多功能的多层次视觉创造

##### 第一个互动动态创作

<br>

**回顾**

**编程内容教学**

- random()， 随机

	[随机圆](http://alpha.editor.p5js.org/yulicai/sketches/Bk3N8RZJM)

- map(), 映射

	[鼠标互动映射](http://alpha.editor.p5js.org/yulicai/sketches/S1VOURW1G)


- 互动元素 mouseX, mouseY

- translate() 位移

	[translate 位移](http://alpha.editor.p5js.org/yulicai/sketches/HydB8kMkz)

- rotate(), scale()

- push(), pop() 压弹

	[push pop](http://alpha.editor.p5js.org/yulicai/sketches/rJUzwyGkG)


- Conditional Statement 条件语句

	[Circle rollover](http://alpha.editor.p5js.org/yulicai/sketches/r1hwDyG1f)

-  keyPressed()按键盘
	
	[keyPressed 示例](http://alpha.editor.p5js.org/yulicai/sketches/rJ394nX1M)

- Boolean expressions, 布尔数值


- Else, else if, AND, OR

	[Button Holddown](http://alpha.editor.p5js.org/projects/S16-H9pn)(live vj) (AND)

	[Roll Over With Fade](http://alpha.editor.p5js.org/projects/SkPsHcph) (else if)

	[Bouncing ball](http://alpha.editor.p5js.org/projects/BJKWv5Tn)

<br>

**好玩的示例 inspiration**

[true/false by onformative](http://www.onformative.com/work/true-false)<br>

[As we are](https://www.matthewmohr.com/as-we-are/a9welr27zmvxadzbash88who4p378v) -
[video as we are](https://vimeo.com/237119645)

**本次作业**

1. 作品每一次重新渲染，都是不一样的效果。
2. 运用到鼠标的互动。
3. 作品中有一些动态的元素，用random,或者translation来实现。
4. 结合第一次作业肖像画一起做。


__两次作业提交成一个，week1作业，包括代码和图文两种形式。__

<br>

**例子**



[白日梦女孩](http://alpha.editor.p5js.org/Chelsea-chenchen/sketches/r1_z0kysb)

[随机画圈](http://alpha.editor.p5js.org/projects/HJg8jfcT3)

[实时画圈](http://alpha.editor.p5js.org/projects/r1JeQqa3)

[万花筒](https://alpha.editor.p5js.org/keerthanapareddy/sketches/B1VcoeujW)

<br>

***

<br>



### 3.基于编程语言的创意互动视觉 － 02

##### 课程目标：

##### 了解编程中循环语句与函数(function)

##### 创作内容层次更加丰富


<br>

**作业分享，分析与答疑**

**编程内容教学**

- Loops 循环语句

- While and for loop

	[10个列](http://alpha.editor.p5js.org/mimi/sketches/BJG29y1sb)

- Nested loops 叠加循环 （矩阵画图）

- 函数的概念，Calling vs. defining 定义一个函数

	setup(), draw()本身就是函数

- 模块化 Modularity

	[Bouncing ball with function & gravity](http://alpha.editor.p5js.org/projects/H1Oq4qta)

- 参数 arguments and parameters

	[Dice no functions example](http://alpha.editor.p5js.org/projects/ryx70m5tT)

	[Dice w/ functions example](http://alpha.editor.p5js.org/projects/S1R44qtT)

- 重复运用 re-usability

	[画不同的机器人](http://alpha.editor.p5js.org/projects/rylf4S5K6)

- 函数返回参数种类 return type

	[改进p5 distance函数功能示例](http://alpha.editor.p5js.org/projects/HJgR7UcKa)

- 递归函数 recursive function

	[重复递归圆绘画](http://alpha.editor.p5js.org/projects/Hyevi8ct6)

- 如何应用，嵌入网站，服务器端与本地端的基本区别
```
<iframe src="http://your_code_url" width="100%" height="700" frameborder="0" allowfullscreen="allowfullscreen"></iframe>
```

<br>

**本次作业**

**例子**

[10PRINT](http://alpha.editor.p5js.org/yulicai/sketches/B17AokeT-)

[你](http://alpha.editor.p5js.org/yulicai/sketches/HyShpklaZ)

[点光源](http://alpha.editor.p5js.org/yulicai/sketches/S1vPRJl6-)

[淡入绘画](http://alpha.editor.p5js.org/haiyiii/sketches/SkJlXK7i-)

[鼠标点击递归绘画](http://alpha.editor.p5js.org/Simonmarqvard/sketches/BkLTb1OsW)


<br>

***

<br>


### 4.基于编程语言的创意互动视觉 － 03

##### 课程目标：

##### 了解编程中数组(array)，对象(object) 的作用

##### 创作内容更加自然

<br>


**作业分享，分析与答疑**

**编程内容教学**

－ 对象（object) 介绍

－ 数组 (array）介绍

- 如何定义一个数组，数组的不同定义方法

- 数组的基本元素，length

- 一个数组的objects

	.push() .splice()

	点击鼠标，为数组增加一个新的元素

	数组超过一定元素数量，就去掉一个，保证运行速度

- 数组和for循环一起运用

**例子**

[水墨画笔](http://alpha.editor.p5js.org/yulicai/sketches/rJd3C1xpW)

[随机线笔触](http://alpha.editor.p5js.org/xmhany/sketches/rkOmxSKnW)



<br>

***

<br>




### 5.基于编程语言的创意互动视觉 － 04

##### 课程目标：

##### 了解类与类的构造( Class & Constructor)

##### 追求创作视觉层次与效果

##### 基础编程语句教学最后一个课时

<br>


**作业分享，分析与答疑**

**编程内容教学**

- 类的基础概念，有什么左右，如何写一个类，es6

	[两个重力球，共用同一个类](http://alpha.editor.p5js.org/icm/sketches/BkyUQp1nb)

- 粒子系统，particle system

- Nature of Code, 速度，加速度，力的作用

- Vector 向量的基本讲解，为什么有用

	基本速度与加速度运用在粒子系统中

- 力的运用

	基础的力(force)

	转向力(steering force)

	力的叠加 (weighting )

**本次作业**

**例子**

[圆-类](http://alpha.editor.p5js.org/mimi/sketches/SyRmnrWo-)

[好多红色的圆！](http://alpha.editor.p5js.org/mimi/sketches/rJKyIvZ3W)

[好多红色的圆2！](http://alpha.editor.p5js.org/ChaoChris/sketches/B1ypXvd3b)

[互动条纹](http://alpha.editor.p5js.org/icm/sketches/B1ja76khW)

[软体](https://p5js.org/examples/simulate-soft-body.html)


<br>

***

<br>


### 6.画布之外

##### 课程目标：

##### 前期内容整理回顾

##### 理解运用回调函数（call back function)

##### 比网页更广阔的创作空间（projection mapping 简介）

<br>


**前期基础编程概念回顾**

**作业分享，分析与答疑**

**编程内容教学**

- 回调函数（callback function)

	button.mousePressed(callback);

- 画布之外的运用渠道

	Projection Mapping 简介

**本次作业**

**例子**

- 基于同一个构造的三个不同例子

	[圆-变色（不可逆）](http://alpha.editor.p5js.org/mimi/sketches/rJKyIvZ3W)

	[圆-替换颜色（可逆）](http://alpha.editor.p5js.org/mimi/sketches/BkZTgUKjW)

	[圆-消失](http://alpha.editor.p5js.org/mimi/sketches/HJzO3uq2Z)

	[自然画线](https://p5js.org/examples/hello-p5-drawing.html)

- 商业案例

	[portal-projection mapping](https://vimeo.com/93108457)

	[全新字体设计方法](https://vimeo.com/16519944)

	[Second Story Particle System](https://secondstory.com/work/cox-media-group-cox-discovery-center)


<br>

***

<br>


### 7. 数据的艺术 Intro to Data

##### 课程目标：

##### 对数据有基本的了解

##### 了解如何使用API

##### 用数据进行创作

<br>


**数据艺术作品分享**

**编程内容教学**

- 不同数据文件类型

	JSON, AJAX, XML

	[JSON 格式化](https://jsonformatter.curiousconcept.com/)

	[Loading external data with p5.js](https://github.com/processing/p5.js/wiki/Loading-external-files:-AJAX,-XML,-JSON)

- 什么是API， 有什么用

	Openweather 做示例

- 个人数据的记录，自己的api

- 一些有用的api网站

- OpenWeatherMap - [http://openweathermap.org/API](http://openweathermap.org/API)
- NYTimes - [http://developer.nytimes.com/](http://developer.nytimes.com/)
- The Guardian - [http://www.theguardian.com/open-platform](http://www.theguardian.com/open-platform)
- flickr - [https://www.flickr.com/services/api/](https://www.flickr.com/services/api/)
- MTA - [http://web.mta.info/developers/developer-data-terms.html#data](http://web.mta.info/developers/developer-data-terms.html#data)
- Foursquare - [https://developer.foursquare.com/](https://developer.foursquare.com/)
- Sunlight Foundation - [http://sunlightfoundation.com/api/](http://sunlightfoundation.com/api/)
- [http://en.wikipedia.org/wiki/List_of_open_APIs](http://en.wikipedia.org/wiki/List_of_open_APIs)
- [https://gist.github.com/afeld/4952991](https://gist.github.com/afeld/4952991)

**本次作业**
**例子**


<br>

***

<br>


### 8. 视频与声音 Video and Sound and Image

##### 课程目标：

##### 用视频和实时图像捕捉还有声音进行创造

<br>  


**作业分享，分析与答疑**

**编程内容教学**

- 视频和实施捕捉

	[github例子链接](https://github.com/ITPNYU/ICM-2015/tree/master/09_video_sound)

- 其他library 的运用

	如何嵌入其他library

	Clmtrackr 面部识别

	(用本地的方式展示）需要测试online editor与video capture的兼容性

	[基础视频捕捉](http://alpha.editor.p5js.org/projects/SyOh8YAye)

	[视频错位](http://alpha.editor.p5js.org/projects/rJjgsFAJg)

	[照相亭](http://alpha.editor.p5js.org/projects/rytSuKAke)

- 声音

	[播放和暂停声音](http://alpha.editor.p5js.org/projects/Sy_UotCye)

	[改变声音频率](http://alpha.editor.p5js.org/projects/BJpSZ9Cyg)

	[用麦克风来控制](http://alpha.editor.p5js.org/projects/Hy5Ob90Jl)

	[Sound panning](https://p5js.org/examples/sound-pan-sound.html)

	[dot piano by Yotam Mann and Alexander Chen ](https://dotpiano.com/)

- 图像

	[Pointilism](https://p5js.org/examples/image-pointillism.html) 实际案例

- 视频艺术作品分享

	Glitch art 故障艺术

- 简介max/msp

**本次作业**

**例子**

Final project idea， 最终作品概念



<br>

***

<br>


### 9. 移动端（手机）创作

##### 课程目标：

##### 了解基本用移动端打开前期创作成果的方法

##### 针对移动端进行具体创作

<br>


**作业分享，分析与答疑**

**编程内容教学**

- Index.html内容也上做了一些改变，方便手机浏览

	[Using viewport meta tag to control layout on mobile browsers](https://developer.mozilla.org/en-US/docs/Mozilla/Mobile/Viewport_meta_tag)

**本次作业**
**例子**

以下例子用手机打开链接

单点[触摸](http://alpha.editor.p5js.org/projects/H1a1YWOgl)

[多点触摸](http://alpha.editor.p5js.org/projects/HkDY43yxl)

[设备移动](http://alpha.editor.p5js.org/projects/BysXo-dgx)

[设备翻身](http://alpha.editor.p5js.org/projects/ryMwSnyxx)

[设备摇晃](http://alpha.editor.p5js.org/projects/rkmqU2Jee)



[重力球](http://alpha.editor.p5js.org/projects/Hylv2b_xl)

[加速度盒子](http://alpha.editor.p5js.org/projects/BJxoCbdxx)

[左滑右滑](http://alpha.editor.p5js.org/projects/HyEDRsPel)

[手指滑动速度控制小球](http://alpha.editor.p5js.org/projects/rkOj4bueg)

[双手放大缩小](http://alpha.editor.p5js.org/projects/SJpBDW_gg)

<br>

**Final Project 过程讨论**

开始创作的过程遇到的问题



<br>

***

<br>


### 10.P5之外更广的世界

##### 课程目标：

##### 浅浅了解其他新媒体创作工具

##### 对以后的创作有更多种类的想法与选择

<br>  


- Pixel

	实例，博物馆体验

	Danny Rozin作品

- 硬件编程 Physical Computing

	Arduino

	作品分享

- Kinect 基本介绍，kinectron

- 其他JS Libraries

	Three.js

	与3d世界结合

- 网站运用

- VR AR 运用，Chrome Extensions


**Final Project 过程讨论**


**Final Project例子**

[手机端煎鸡蛋](http://alpha.editor.p5js.org/full/BJc8V3QQx)

[手机端挤蕃茄酱](http://alpha.editor.p5js.org/full/Hym-8c7mg)

以上两个用手机打开，然后在屏幕上滑动

[个人肖像](http://chan.dreamhosters.com/2016/12/06/final-project/)

[自然月球互动](http://www.caiyuli.com/work/nature-geometry/)


<br>

***

<br>
