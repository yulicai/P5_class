# P5创意编程
###### 2017-2018
###### [蔡雨利](http://caiyuli.com/) x 最毕设


## 资源 / Resources
1. [p5官方网站](https://p5js.org/)
2. [p5线上编辑器](https://alpha.editor.p5js.org/)
3. [p5 Reference 指令参考](https://p5js.org/reference/)
4. yuli.cai@nyu.edu

#### 其他资源, other resources
1. [CMU Interactivity & Computation课程纲要](http://cmuems.com/2016/60212/)

2. [Dan Shiffman](http://shiffman.net/)

3. [Lauren Mccarthy](http://lauren-mccarthy.com/)

## 课程创意案例
1. [Constellation](https://www.openprocessing.org/sketch/434620)
2. [艺术家Reza](http://www.syedrezaali.com/)

## 商业案例/好玩的studio
1. [Art + Com](https://artcom.de/en/)
2. [Jason Bruges](http://www.jasonbruges.com/art/)
3. [avseoul](http://avseoul.net/)
4. [daily minimal](http://www.dailyminimal.com/)


## 课程教案 Syllabus
### 课程大纲

#### 基础课
1. 	创意编程简介和简单创意绘画
2. 	基于编程语言的创意互动视觉 － 01
3. 	基于编程语言的创意互动视觉 － 02
4. 	基于编程语言的创意互动视觉 － 03
5. 	基于编程语言的创意互动视觉 － 04
6. 	画布之外

#### 进阶课
7. 	数据的艺术(上) Intro to Data
8. 	数据的艺术(下) Intro to Data
9. 	视频与声音与图像 Video & Sound & Image
10. 	移动端（手机）创作
11. 让你的作品玩转朋友圈(HTML, P5 Dom)
12. p5之外更广的世界

<br>


***

<br>

<br>

### 1. 创意编程简介和简单创意绘画 

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


<br>

**作业事例**（绝对不局限于事例，发挥想象力）

[ 织线](http://alpha.editor.p5js.org/full/HkAxMZga-)

[城市](http://alpha.editor.p5js.org/bonder/sketches/SkXcZd7qZ)

[自画像](http://alpha.editor.p5js.org/YifanLiu/sketches/ByefCvxq-)

<br>

<br>

***

<br>

<br>

### 2. 基于编程语言的创意互动视觉 － 01 

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

涵盖以下特点：

1. 作品每一次重新渲染，都是不一样的效果。
2. 运用到鼠标的互动。
3. 作品中有一些动态的元素，用random,或者translation来实现。
4. 结合第一次作业肖像画一起做。



<br>

**例子**


[白日梦女孩](http://alpha.editor.p5js.org/Chelsea-chenchen/sketches/r1_z0kysb)

[随机画圈](http://alpha.editor.p5js.org/projects/HJg8jfcT3)

[实时画圈](http://alpha.editor.p5js.org/projects/r1JeQqa3)

[万花筒](https://alpha.editor.p5js.org/keerthanapareddy/sketches/B1VcoeujW)

<br>

<br>

***

<br>

<br>

### 3.基于编程语言的创意互动视觉 － 02

##### 课程目标：

##### 了解编程中循环语句与函数(function)

##### 创作内容层次更加丰富


<br>

**作业分享，分析与答疑**

**上次课程内容回顾**

**案例分享**

[John Maeda 12 clocks](http://cmuems.com/2016/60212/lectures/lecture-09-09b-clocks/maedas-clocks/)

[Dan Shiffman 时钟](https://alpha.editor.p5js.org/yulicai/sketches/BJX-QSj1z)

除了图形化的思考之外... <br>

[chino kim, Internet Interventions](https://ch1n00.tumblr.com/)

[chino kim](http://chino.kim/)

<br>

**编程内容教学**

- Loops 循环语句

- While and for loop

	[基本循环，从while到for](https://alpha.editor.p5js.org/yulicai/sketches/Hk8NOUs1f) <br>

	[10个列](http://alpha.editor.p5js.org/yulicai/sketches/B17AokeT-)

- Nested loops 叠加循环 （矩阵画图）

	[格子阵列](https://alpha.editor.p5js.org/yulicai/sketches/Byvza_NkG)<br>

	[点阵列霓虹灯](https://alpha.editor.p5js.org/)

- 函数的概念，Calling vs. defining 使用 vs. 定义一个函数

	ellipse(), setup(), draw()本身就是函数


- 模块化 Modularity

	[easing淡入淡出在函数中](https://alpha.editor.p5js.org/yulicai/sketches/S1RRdUoyf)

- 参数 arguments and parameters

	[Dice no functions example](http://alpha.editor.p5js.org/projects/ryx70m5tT)

	[Dice w/ functions example](http://alpha.editor.p5js.org/projects/S1R44qtT)


- 重复运用 re-usability

	[画不同的机器人](https://alpha.editor.p5js.org/yulicai/sketches/r1BwFUjJf)

<br>


**本次作业**

运用时间的概念，创作一个作品。时间可以是抽象化的线性时间，比如随着时间变化，作品会有不同的生长方向/变化，也可以是具体化的几分几秒体现在图形或者文字上，比如直接的文字图形化。满足以下两个要求之一。

1. 重复图案华，用if statement或者用for循环或者函数定义的方式实现。

2. 淡入淡出的效果。

<br>

**例子**

[10PRINT](http://alpha.editor.p5js.org/yulicai/sketches/B17AokeT-)

[你](http://alpha.editor.p5js.org/yulicai/sketches/HyShpklaZ)

[点光源](http://alpha.editor.p5js.org/yulicai/sketches/S1vPRJl6-)

[淡入绘画](https://alpha.editor.p5js.org/yulicai/sketches/S1RRdUoyf)

[鼠标点击递归绘画](http://alpha.editor.p5js.org/Simonmarqvard/sketches/BkLTb1OsW)

<br>

<br>

***

<br>

<br>

### 4.基于编程语言的创意互动视觉 － 03

##### 课程目标：

##### 了解编程中数组(array)，对象(object) 的作用

##### 创作内容更加自然

<br>


**作业分享，分析与答疑**

**编程内容教学**

- 数学的概念在编程中的作用
	%，斜线，10个列例子中的if statement（随机概率)

- 对象（object) 介绍

	[基本对象例子](https://alpha.editor.p5js.org/yulicai/sketches/HyYladj1z)

	[Bouncing ball with function & gravity](http://alpha.editor.p5js.org/projects/H1Oq4qta)


- 函数返回参数种类 return type

	[改进p5 distance函数功能示例](http://alpha.editor.p5js.org/yulicai/sketches/H12z0ojJf)

- 递归函数 recursive function

	[重复递归圆绘画](http://alpha.editor.p5js.org/projects/Hyevi8ct6)


－ 数组 (array）介绍

- 如何定义一个数组，数组的不同定义方法<br>
	1. 数组的序列
	2. [点名例子](http://alpha.editor.p5js.org/yulicai/sketches/Sk00FvCRZ)

- 数组的基本元素，length


- .push()

	点击鼠标，为数组增加一个新的元素

	[例子push](https://alpha.editor.p5js.org/yulicai/sketches/Hy9CP2sJG)

	数组超过一定元素数量，就去掉一个，保证运行速度

- .splice()

	[例子生命周期](https://alpha.editor.p5js.org/yulicai/sketches/Hydln3jJz)

- 数组和for循环一起运用

<br>

**案例分享**

[3d点阵纪录片](https://www.kickstarter.com/projects/668998823/asad-and-assad)

[Current Time 前卫橱窗概念](http://www.angelaitp.com/2016/12/02/pop-up-window-display/)

<br>

**本次作业**

一个有生命的**物种**<br>
根据我们这两天学的知识，object, function, for循环，创造一个有生命的物种，同属于这个物种的东西同源同属性，但是有着稍微不同的形态或者状态。<br>

作业目的与思考：
- 目的：

	1. 思考为什么有这么多种不同的方式写同一个效果的代码。
	2. 熟练掌握object, function, for, 为了衔接下一节课的内容
	3. 思考其中可以改变的变量，如何在屏幕之外交互，为最后的作品做准备。


<br>

**例子**

[水墨画笔](http://alpha.editor.p5js.org/yulicai/sketches/rJd3C1xpW)

[随机线笔触](http://alpha.editor.p5js.org/xmhany/sketches/rkOmxSKnW)

<br>

<br>

***

<br>

<br>


### 5.基于编程语言的创意互动视觉 － 04

##### 课程目标：

##### 了解类与类的构造( Class & Constructor)

##### 追求创作视觉层次与效果

##### 基础编程语句教学最后一个课时

<br>



**编程内容教学**

- 类的基础概念，有什么左右，如何写一个类，es6

	[基础类的声明例子](https://alpha.editor.p5js.org/yulicai/sketches/SJ72Zv7eG)

	[类的声明-参数-单独文件](https://alpha.editor.p5js.org/yulicai/sketches/HkRhrDmlz)

	[两个重力球，共用同一个类](http://alpha.editor.p5js.org/icm/sketches/BkyUQp1nb)

- 粒子系统，particle system

- Nature of Code, 速度，加速度，力的作用

	[Nature of Code官方网站](http://natureofcode.com/book/introduction/)

- Vector 向量的基本讲解，为什么有用

	1. createVector([x],[y],[z]) <br>
	2. p5.Vector是一个单独的类，内部有向量的基本运算，加减乘除标准化等等。<br>

	基本速度与加速度运用在粒子系统中

	[p5 vector参考](https://p5js.org/reference/#/p5.Vector)

	[鼠标作用力-mover](https://alpha.editor.p5js.org/yulicai/sketches/HyF9-OXlf)


- 力的运用

	基础的力(force)

	转向力(steering force)

	力的叠加 (weighting )

**案例分享**

[avseoul视觉](http://avseoul.net/#030)

[av fb ar](https://www.facebook.com/av.seoul)

[daily minimal](http://www.dailyminimal.com/)

<br>

**本次作业**

从课堂案例daily minimal中获取灵感，创作一个极简主义的的动态图案。<br>
- 要求：
	1. 运用到类的概念。
	2. 运用到某种生活中的力的概念
		1. 简单的加速度的力
		2. 弹簧的弹力
		3. 摩擦力
		4. 重力




<br>

**例子**

[圆-类](http://alpha.editor.p5js.org/mimi/sketches/SyRmnrWo-)

[好多红色的圆！](http://alpha.editor.p5js.org/mimi/sketches/rJKyIvZ3W)

[好多红色的圆2！](http://alpha.editor.p5js.org/ChaoChris/sketches/B1ypXvd3b)

[互动条纹](http://alpha.editor.p5js.org/icm/sketches/B1ja76khW)

[软体](https://p5js.org/examples/simulate-soft-body.html)

<br>

<br>

***

<br>

<br>

### 6.画布之外

##### 课程目标：

##### 前期内容整理回顾

##### 理解运用回调函数（call back function)

- 线下编辑器
	1. sublime
	2. atom
	3. brackets
	4. ...

	[本地服务器 设置指南](https://github.com/processing/p5.js/wiki/Local-server)


在终端中输入:

```
cd 当前文件夹路径（鼠标拖入文件夹）

```

```
python -m SimpleHTTPServer
```

如果你是python 3
```
python -m http.server
```

在浏览器中输入地址 `http://localhost:8000` .


- 如何应用，嵌入网站，服务器端与本地端的基本区别
```
<iframe src="http://your_code_url" width="100%" height="700" frameborder="0" allowfullscreen="allowfullscreen"></iframe>
```

<br>

##### 比网页更广阔的创作空间（projection mapping 简介）

<br>



**编程内容教学**

- 回调函数（callback function)

	button.mousePressed(callback);

- 画布之外的运用渠道

	Projection Mapping 简介

- 商业案例

	[portal-projection mapping](https://vimeo.com/93108457)

	[全新字体设计方法](https://vimeo.com/16519944)

	[Second Story Particle System](https://secondstory.com/work/cox-media-group-cox-discovery-center)


<br>

**本次作业**

基础课课程考核。

<br>

**例子**

- 基于同一个构造的三个不同例子

	[圆-变色（不可逆）](http://alpha.editor.p5js.org/mimi/sketches/rJKyIvZ3W)

	[圆-替换颜色（可逆）](http://alpha.editor.p5js.org/mimi/sketches/BkZTgUKjW)

	[圆-消失](http://alpha.editor.p5js.org/mimi/sketches/HJzO3uq2Z)

	[自然画线](https://p5js.org/examples/hello-p5-drawing.html)


<br>


<br>

***

<br>

<br>

### 7. 数据的艺术-上(进阶课）
1. 数据的艺术 Intro to Data
2. 初识API

##### 课程目标：

##### 对数据有基本的了解

##### 了解如何使用API

##### 用数据进行创作

<br>


**数据艺术作品分享**

[wipawe call me adele](https://medium.com/@wipaweeeeee/call-me-adele-f37162b6ffe5)

[windmap](http://hint.fm/wind/)

[Ying He数据可视化](http://heyinging.com/DATAVIZ)

[非数据例子-by yifan chen](http://alpha.editor.p5js.org/yulicai/sketches/SJdQurhxG)


**编程内容教学**

- 不同数据文件类型

	JSON, XML, CSV, TEXT FILE, PDF, API..

	[JSON 格式化](https://jsonformatter.curiousconcept.com/)

	[Loading external data with p5.js](https://github.com/processing/p5.js/wiki/Loading-external-files:-AJAX,-XML,-JSON)

- 简单json格式调用

	[花的示例_基础json](https://alpha.editor.p5js.org/yulicai/sketches/BJ0-vV0ez)

- 什么是API， 有什么用

	[giphy api示例](https://alpha.editor.p5js.org/yulicai/sketches/SkFAPEReG)

- 个人数据的记录，自己的api

- 格式化json 工具

	**JSON Formatter** chrome extension

- 一些有用的api网站

**中文**

- [知乎 -想写个 App 练手，有什么有趣的 API 接口推荐吗？](https://www.zhihu.com/question/39479153)

- 百度音乐

	[百度音乐使用介绍](https://fddcn.cn/music-api-wang-yi-bai-du.html)

	[百度音乐api返回示例](http://tingapi.ting.baidu.com/v1/restserver/ting?method=baidu.ting.song.play&songid=289109745)

	[使用例子cnblogs](http://www.cnblogs.com/youlixishi/p/6132025.html)


- [新浪微博api](http://open.weibo.com/wiki/API)

- [红楼梦api](http://47.100.22.113:25555/api/cndbpedia/ment2ent?q=%E7%BA%A2%E6%A5%BC%E6%A2%A6)


**英语**

- [英语词汇数据大全github corpora](https://github.com/dariusk/corpora)

- OpenWeatherMap - [http://openweathermap.org/API](http://openweathermap.org/API)
- NYTimes - [http://developer.nytimes.com/](http://developer.nytimes.com/)
- The Guardian - [http://www.theguardian.com/open-platform](http://www.theguardian.com/open-platform)
- flickr - [https://www.flickr.com/services/api/](https://www.flickr.com/services/api/)
- MTA - [http://web.mta.info/developers/developer-data-terms.html#data](http://web.mta.info/developers/developer-data-terms.html#data)
- Foursquare - [https://developer.foursquare.com/](https://developer.foursquare.com/)
- Sunlight Foundation - [http://sunlightfoundation.com/api/](http://sunlightfoundation.com/api/)
- [http://en.wikipedia.org/wiki/List_of_open_APIs](http://en.wikipedia.org/wiki/List_of_open_APIs)
- [https://gist.github.com/afeld/4952991](https://gist.github.com/afeld/4952991)

<br>

**本次作业**

运用数据，做一个可视化作品。<br>
	要求： 至少用到以下其中之一<br>
	1. 用现成的api<br>
	2. 用自己的数据，自己手动创造json文件，在此基础上再进行创作

<br>

<br>

***

<br>

<br>

### 8. 数据的艺术-下(进阶课）
1. 类的概念补充
2. 如何结合类和数据api做一个实时的风速模拟系统。

##### 课程目标：

##### 在拥有了上一节（第七节）对数据的基本了解下，这节课结合基础课类的概念，做实战。



<br>

<br>

***

<br>

<br>

### 9. 视频与声音+移动端创作+粒子系统进阶 - 1.摄像头捕捉与艺术性创作, 面部识别艺术创作 （进阶课）


##### 课程目标：

##### 用视频和实时图像捕捉还有声音进行创造

<br>  



**编程内容教学**

- loadImage()功能结合之前学过的编程内容

- 视频和实施捕捉

- 课堂例子
	
	[09004_点式绘画_实时捕捉](https://alpha.editor.p5js.org/yulicai/sketches/BJWYjZObG)

	[09005_追踪画笔_实时捕捉](https://alpha.editor.p5js.org/yulicai/sketches/rJqRcb_bG)

	[09006_黑白镜子_实时捕捉](https://alpha.editor.p5js.org/yulicai/sketches/SJ4Bi-_bf)

	[09003_情绪识别_clmtrackr](https://alpha.editor.p5js.org/yulicai/sketches/BJG8nbO-M)

- 其他library 的运用

	如何嵌入其他library

	Clmtrackr 面部识别

	[clmtrackr更多信息](https://github.com/auduno/clmtrackr)

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



**本次作业**

以下内容3选一：
1. 运用实时视频做一个故障视觉影像。
2. 结合某一种绘画/设计特征，做一个计算机的绘画。比如印象派，用相机的笔触画出印象派的感觉的计算机艺术。
3. 为进阶课考核做一个小元素。

<br>

<br>

***

<br>

<br>


### 10. 视频与声音+移动端创作+粒子系统进阶 - 2. 移动端（手机）创作，粒子系统 (进阶课)

##### 课程目标：

##### 了解基本用移动端打开前期创作成果的方法

##### 针对移动端进行具体创作

<br>



**编程内容教学**

- Index.html内容也上做了一些改变，方便手机浏览

	[Using viewport meta tag to control layout on mobile browsers](https://developer.mozilla.org/en-US/docs/Mozilla/Mobile/Viewport_meta_tag)<br>

	index.html 里需要加入的几行代码，上面的这个链接解释了为什么
	```
	<meta name="format-detection" content="telephone=no">
	<meta name="msapplication-tap-highlight" content="no">
	<meta name="viewport" content="user-scalable=no, initial-scale=1, maximum-scale=1, minimum-scale=1, width=device-width">
	<meta name="HandheldFriendly" content="True" />
	```

- 课堂例子

	[10001_手机端_绘画](https://alpha.editor.p5js.org/yulicai/sketches/B1cISA_Zf)
	
	[10002_手机端_多指绘画](https://alpha.editor.p5js.org/yulicai/sketches/B1MRkCOZf)

	[10003_手机端_重力](http://alpha.editor.p5js.org/yulicai/sketches/rkK8QAdWG)

	[10004_手机端_摇晃](http://alpha.editor.p5js.org/yulicai/sketches/BkbsNCObM)

	[10005_力_natureOfCode与类](https://alpha.editor.p5js.org/yulicai/sketches/Bk2QKUF-z)

**本次作业**

1. 结合手机自带的传感器（重力传感器），做一个简单的小游戏。

**例子**

以下例子用手机打开链接

单点[触摸](http://alpha.editor.p5js.org/projects/H1a1YWOgl)

[多点触摸](http://alpha.editor.p5js.org/projects/HkDY43yxl)

[设备移动](http://alpha.editor.p5js.org/projects/BysXo-dgx)

[设备翻身](http://alpha.editor.p5js.org/projects/ryMwSnyxx)

[设备摇晃](http://alpha.editor.p5js.org/projects/rkmqU2Jee)

[加速度盒子](http://alpha.editor.p5js.org/projects/BJxoCbdxx)

[左滑右滑](http://alpha.editor.p5js.org/projects/HyEDRsPel)

[手指滑动速度控制小球](http://alpha.editor.p5js.org/projects/rkOj4bueg)

[双手放大缩小](http://alpha.editor.p5js.org/projects/SJpBDW_gg)

<br>

<br>

***

<br>

<br>

### 11. 让你的作品玩转朋友圈 （p5 Dom & 基本HTML5）

##### 课程目标：

##### 进一步理解HTML5以及其中的元素

##### 运用p5 Dom元素为之前的作品创作GUI图形界面

- 基础HTML5
	1. 框架简介
	2. 基本tags (element元素)以及其含义
	3. 基本CSS， 三种控制css的方式
	4. 简单个人作品主页
	
- p5 DOM
	1. p5与HTML的关系
	2. createCanvas
	3. slider滑条
	4. button按钮
	5. videoCapture 视频捕捉



<br>

**本次作业**

1. 结合p5,DOM， 为之前的作品创作一个图形界面去控制不同的数值。

<br>

**例子**

- 基于同一个构造的三个不同例子

	[Dom 1 - 静态](https://alpha.editor.p5js.org/yulicai/sketches/S1wyOoRnM)

	[Dom 2 - 按钮](https://alpha.editor.p5js.org/yulicai/sketches/HyMqdiA2z)

	[Dom 3 - 滑条](https://alpha.editor.p5js.org/yulicai/sketches/rJjyKo03f)

	[Dom 4 -特殊事件](https://alpha.editor.p5js.org/yulicai/sketches/By7EtoR2z)

	[Dom 5 - 实时视频捕捉](https://alpha.editor.p5js.org/yulicai/sketches/SJq5tiA2f)

<br>

<br>

***

<br>

<br>

### 12.P5之外更广的世界

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


**进阶课考核作业分享**



<br>

***

<br>
