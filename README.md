# TryWeexAndMVVM
Learn Weex and MVVM

一、前端相关；

二、MVVM设计模式相关；

三、Vue和Node相关；

四、Weex相关。

## 一、整理一点点简单的前端
主要参考：《HTML、XHTML和CSS宝典（第5版）》、《JavaScript DOM编程艺术》

### HTML、 CSS

#### 标准的HTML的设计目的是提供静态的、纯文本的文档，脚本编程语言能够帮助HTML实现交互功能

#### 所有的HTML文件都有3个文档级标签：\<html>,\<head>,\<body>


* \<head>标签界定HTML文档的头部区域。文档的标题、元信息以及文档的脚本在多数情况下均包含在\<head>节。
* \<body>HTML文档中主要的可视部分包含在\<body>标签内。


#### MIME类型：
多用途互联网邮件扩展类型，即传输内容的分类类型

#### 分区（division）：
与段落有类似之处，用来将相关对象（段落、图片等）组织在一起，通过在分区上应用格式，还可以是组合在一起的对象继承大多数相同的格式，这样就省略了在其中每个对象上分别应用格式的需求

#### 有两类脚本：客户端脚本和服务端脚本

客户端脚本由客户端软件运行，即由用户代理运行。（JavaScript等）

服务端脚本由web服务器运行，通常被称为CGI(Common Gateway Interface)，是服务器端web脚本的第一个接口。（Perl, Python, PHP, Java等）

1、 在文档中包含脚本

要在文档中包含脚本，可将脚本代码写在\<script>标签中。可以在这个标签内包含任意数量的脚本代码，脚本可以包含在文档头或者文档体内，而且可以包含任意多个脚本区，但是在HTML内不能嵌套\<script>标签。

一般来说，应该讲脚本放在文档的头部区域，以便在后面加载的页面内容上使用脚本。

2、 调用外部脚本
如果希望多个文档内使用某些脚本，可以将脚本放在外部文件中，然后使用\<script>标签的src特性指定脚本内容再次文件内查找到。

#### CSS:Cascading Style Sheet 层级样式表

CSS级别1、2、3

* CSS1:定义了基本样式功能、有限的文字支持和有限的定位支持；
* CSS2:添加了声音属性、分页媒介、更好的字体支持和定位支持；
* CSS3:添加了演示样式属性，能够有效的用Web文档形成演示效果。

CSS按照一下方式引用声明的位置：

* 作者来源：文档作者通过\<style>区或者链接表（通过\<link>）包含样式；
* 用户来源：用户（文档的查看者）指定文本样式表；
* 用户代理来源：用户代理制定默认样式表（在不存在其他样式表的时候）。

当一个元素上存在多个样式的时候，CSS标准根据以下规则决定使用哪个样式： 
元素内嵌样式的优先级比前面声明的所有样式都高。

1. 找到对应在此元素上的来自所有来源的所有样式声明；
2. 对于普通声明，作者样式表覆盖用户样式表，后者又覆盖默认样式表。对于！important样式声明，用户样式表覆盖作者样式表，后者又覆盖默认样式表；
3. 较具体的声明比不太具体的声明优先；
4. 最后指定的样式比其他同级样式优先。


#### CSS基本格式：
```
selector {
	property: value(s);
	property: value(s);
	...
}
```
selector是可以用来与HTML文档中的特定元素进行匹配的表达式；

property指定此定义影响的元素属性；

value为属性分配值。



* 按类型匹配元素：普通元素选择器，所有对应对象都适用该定义中的属性-值进行格式化；
* 通用选择器匹配：可以用来和文档中的任意元素匹配，用*表示；
* 按类匹配元素：在样式选择器和对应的元素中使用不同的类，需要在选择器后加.类名，将一个给定的类与多个元素匹配；
* 按标识符匹配元素：根据id特性匹配，使用#+id作为选择器前缀；
* 按特定特性匹配元素：选择器与元素中的任意特性匹配，在选择器的末尾方括号中指定要匹配的特性和值；
* 匹配子元素、后代元素和相邻兄弟元素：根据与其他元素的关系进行匹配。

#### CSS样式继承：
在CSS中所有的前景属性都会被后代元素继承，但是背景属性（背景色、背景图片等）不会被后代元素自动继承。

想要覆盖继承，可以为元素定义一个样式，并指定与继承属性不同的属性值。

彼此不相冲突的特性会被后代元素累计继承。

#### 伪类：

伪类就是用户代理能够理解的标识符，不需要明确的指定元素的样式就能够在特定的类型元素上应用。这样的类是实质上是动态的，所以要使用其他机制而不是静态的class特性来进行跟踪。
例如，有一些伪类用于修改文档中已经访问的锚链和违背访问的锚链。如果使用伪类，就不必在每个锚链的标签中指定类，用户代理回判断哪些锚链属于那些类，并在用户浏览网页的时候实时地应用合适的判断。

* 锚链样式：未被访问的链接、已经访问过的链接、鼠标在浏览器中正在经过的链接等；
* `：first-child`伪类：用于将样式定义分配给特定元素的第一个子元素，可以用这个伪类为第一个子元素增加更多的空间或者修改第一个子元素格式化；
* `：lang`伪类：用于根据文档使用的语言修改元素。

#### 伪元素：

伪元素是另一种虚拟构造，有助于将样式动态的应用到文档的元素上。例如元素文本的第一行，元素前面的空间，元素后面的空间等。

#### 层级：

层级指样式在文档上的关联效果是层级的。在文档上应用的样式可以有多个来源：

1. 作者样式：文档作者包含的样式，或者是直接嵌在文档头部、链接在单独的样式表中（使用\<link>标签或者CSS的`@import`规则）、或者在单个元素内。这些样式代表作者期望文档显示的样式。
2. 用户样式：最终用户为文档指定采用的样式。这些样式由最终用户从本地样式表中选择，可以用来修改文档的默认外观。
3. 用户代理样式：在特定元素或者文档上没有指定其他样式时，用户代理默认使用的样式。

来自以上3个来源的每个样式都被分配以权重，当3个来源的样式相互冲突时，就会根据他们分配的权重来决定应该应用哪个样式。默认情况下作者样式比用户样式优先，用户样式比用户代理样式优先。使用！important规则可以强制执行例外。

确定层级排序顺序的实际机制：

1. 取出应用到元素和属性的所有定义；
2. 按权重和来源对定义排序：作者样式》用户样式》用户代理样式。对于`!important`定义，用户样式比作者样式优先。所有`!important`定义比普通定义优先。导入的定义被认为与导入它们的样式表同源；
3. 按选择器的具体程度对定义排序：具体选择器比通用选择器优先；
4. 按定义的指定顺序排序：如果连个定义有相同的权重、来源和具体程度，那么最后一个指定的定义优先。导入的样式表中的规则比样式表本省的规则优先。

### JavaScript

#### DOM:Document Object Model 一套对文档内容进行抽象和概念化的方法
W3C的定义：一个与系统平台和编程语言无关的接口，程序和脚本可以通过这个接口动态对文档的内容和样式进行访问和修改。

#### DHTML:
1. 利用HTML把网页标记为各种元素；
2. 利用CSS设计各元素的排版样式并确定它们在窗口中的显示位置；
3. 利用JavaScript实时地操控和改变各有关样式。

#### Tips：
程序设计语言分为解释型和编译型两大类。Java和C++等语言需要一个编译器，将高级语言编写出来的源代码翻译为直接在计算机上执行的二进制可执行文件。

解释性程序设计语言不需要编译器，只需要解释器，解释器将直接读入源代码进行执行。

如果用编译型程序设计语言编写的代码包含错误，错误代码将在代码编译阶段被发现并报告；对于解释型程序设计语言，代码中的错误只有都等到解释器实际执行到有关代码时才会被发现。

与解释型程序设计语言相比，编译型程序设计语言往往速度更快，可移植性也更好，但是学习曲线往往更陡峭。

#### 弱类型：
JavaScript不要求编程时进行类型声明，被称为弱类型。（反之为强类型）

#### JavaScript中的对象：
1. 用户定义对象：由程序员自行创建的对象；
2. 内建对象：内建在JavaScript语言中的对象，例如Array, Math, Data等；
3. 宿主对象：由浏览器提供的对象。

#### JavaScript中声明函数的几种方法
[JavaScript标准参考教程](http://javascript.ruanyifeng.com/grammar/function.html)

JavaScript 语言将函数看作一种值，与其它值（数值、字符串、布尔值等等）地位相同。凡是可以使用值的地方，就能使用函数。比如，可以把函数赋值给变量和对象的属性，也可以当作参数传入其他函数，或者作为函数的结果返回。函数只是一个可以执行的值，此外并无特殊之处。

1. `function()`命令


```JavaScript
function print(s) {
	console.log(s);
}
```
`function`命令声明的代码区块就是一个函数，`function`命令后面是函数名。以后使用`print()`这种形式，就可以调用相应的代码，这种叫做函数的声明。<br>
2. 函数表达式

采用变量赋值的写法

```
var print = function(s) {
	console.log(s);
};
```

这种写法将一个匿名函数赋值给变量，这是，这个匿名函数又称为函数表达式。采用函数表达式声明函数时，function命令后面不带有函数名，如果加上函数名，该函数名只在函数体内部有效，在函数体外部无效。

```
var print = function x() {
	console.log(typeod x);
};

x;
// ReferenceError: x is not defined

print();
// function
 
```

在上面的到面的函数表达式中，加上了函数名x，这个函数名只有在函数体内部中可以使用，知道函数表达式本身，其他地方都不可用。这种写法有两种用处，第一，可以在函数体内部调用自身，第二，可以方便debug。debug工具显示函数调用栈时，将显示函数名，而不再显示这里是一个匿名函数。<br>
3. Function构造函数

```
var add = new Function(
	'x',
	'y',
	'return x + y'
);

// 等同于
function add(x, y) {
	return x + y;
}
```
上述代码中，Function构造函数接受三个参数，除了最后一个参数时add函数的“函数体”，其他参数都是函数的参数。

可以传递任意数量的参数给Function构造函数，只有最后一个参数会被当作函数体，如果只有一个参数，该参数就是函数体。



#### 节点：

1. 元素节点：nodeType属性值是1；
2. 文本节点：nodeType属性值是3；
3. 属性节点：nodeType属性值是2，属性节点总是被包含在元素节点中。

#### DOM Core几个关键函数：
* `getElementById()`
* `getElementsByTagName()`
* `getAttribute()`
* `setAttribute()`

#### 包含在\<p>中的子节点：

包含在\<p>元素里的文本是另一种节点，它在DOM里是\<p>元素的第一个子节点。如果想获得\<p>元素的文本内容，必须检索它的第一个子节点的nodeValue属性值。

e.g. `description.childNodes[0].nodeValue`

#### JavaScript几个编程原则：

1. 预留后路：确保网页在没有JaveScript的情况下也能正常工作；
2. 分离JaveScript：把网页的结构和内容与JaveScript脚本的动作行为分开；
3. 向后兼容性：确保老版本的浏览器不会因为你的JaveScript而死机。

#### 动态创建HTML内容:DOM提供的方法

1. `createElement()`：创建元素节点
2. `appendChild()`：使新节点称为已有节点的子节点
3. `createTextNode()`：创建文本节点
4. `insertBefore()`：把一个新元素插入到现有元素前面，两个元素有相同父元素


## 二、什么是MVVM设计模式

[MVVM With ReactiveCocoa-雷纯锋的技术博客](http://blog.leichunfeng.com/blog/2016/02/27/mvvm-with-reactivecocoa/)

[被误解的 MVC 和被神化的 MVVM-唐巧的博客](https://blog.devtang.com/2015/11/02/mvc-and-mvvm/)

MVVM:Model-View-ViewModel

在 iOS 开发中实践MVVM，通常会把大量原来放在 ViewController 里的视图逻辑和数据逻辑移到 ViewModel 里，从而有效的减轻了 ViewController 的负担。MVVM 通常还会和一个强大的绑定机制一同工作，一旦 ViewModel 所对应的 Model 发生变化时，ViewModel 的属性也会发生变化，而相对应的 View 也随即产生变化。

除了 view 、viewModel 和 model 之外，MVVM 中还有一个非常重要的隐含组件 binder：

* view ：由 MVC 中的 view 和 controller 组成，负责 UI 的展示，绑定 viewModel 中的属性，触发 viewModel 中的命令；
* viewModel ：从 MVC 的 controller 中抽取出来的展示逻辑，负责从 model 中获取 view 所需的数据，转换成 view 可以展示的数据，并暴露公开的属性和命令供 view 进行绑定；
* model ：与 MVC 中的 model 一致，包括数据模型、访问数据库的操作和网络请求等；
* binder ：在 MVVM 中，声明式的数据和命令绑定是一个隐含的约定，它可以让开发者非常方便地实现 view 和 viewModel 的同步，避免编写大量繁杂的样板化代码。

## 三、Vue和Node

#### What is Node.js?
[Node.js v10.8.0 文档](http://nodejs.cn/api/)<br>
> Node.js 是一个基于 Chrome V8 引擎的 JavaScript 运行环境。 
<br>Node.js 使用了一个事件驱动、非阻塞式 I/O 的模型，使其轻量又高效。 
<br>Node.js 的包管理器 npm，是全球最大的开源库生态系统。

#### What is Vue?  

[Vue.js](https://cn.vuejs.org/)
> Vue (读音 /vjuː/，类似于 view) 是一套用于构建用户界面的渐进式框架。与其它大型框架不同的是，Vue 被设计为可以自底向上逐层应用。Vue 的核心库只关注视图层，不仅易于上手，还便于与第三方库或既有项目整合。另一方面，当与现代化的工具链以及各种支持类库结合使用时，Vue 也完全能够为复杂的单页应用提供驱动。

#### 环境搭建
[在Mac环境下搭建Vue.js开发环境](https://www.jianshu.com/p/918314e9f757)

1. 安装homebrew
<br>`/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"`<br/>
<br>注：在Max OS X 10.11（El Capitan)版本中，homebrew在安装软件时可能会碰到/usr/local目录不可写的权限问题。可以使用下面的命令修复：<br/>
<br>`sudo chown -R `whoami` /usr/local`<br/>
<br>在终端输入brew -v,如果能查询到brew的版本信息，那么恭喜你安装成功。可以继续往下撸了<br/>

2. 使用homebrew安装node.js
<br>`brew install node`<br/>
<br>同上，如果在终端输入node -v 能够查询到版本信息，就说明安装成功。<br/>

3. 获取nodejs模块安装目录访问权限
<br>`sudo chmod -R 777 /usr/local/lib/node_modules/`<br/>

4. 安装全局的webpack
<br>`npm install webpack -g`<br/>

5. 安装vue脚手架vue-cli
<br>`npm install vue-cli -g`<br/>

6. 找一个合适的位置存放你的vue工程
<br>`cd 目录路径 `<br/>
<br>注：目录路径直接把创建好的文件夹拖拽到终端里就可以<br/>

7. 创建项目
<br>`vue init webpack-simple 项目名`<br/>
<br>如：`vue init webpack-simple vue2demo`<br/>
<br>注：项目名不可以使用中文，也不能使用大写字母<br/>
<br>创建项目之后会出现一系列的参数配置，根据自己的情况 进行选择，因为最后2个的配置具体是啥意思我也没搞懂呢<br/>

8. 将根目录切换到项目
<br>`cd 项目名`<br/>
<br>如：`cd vue2demo`

9. 安装项目依赖
<br>`npm install`<br/>

10. 安装 vue 路由模块vue-router和网络请求模块vue-resource
<br>`npm install vue-router vue-resource --save`<br/>

11. 启动项目
<br>`npm run dev`<br/>

#### 搭建Vue遇到的坑：
1. localhost:8080无法打开<br>两个原因：一个是Chrome浏览器的vue插件中访问本地文件开关未打开，二是设置了代理
2. 使用vscode的debugger for Chrome插件时不能连接到Chrome浏览器：<br>很玄幻，将浏览器进程杀掉或者是关机重启之后成功了

[Vue.js 教程-菜鸟教程](http://www.runoob.com/vue2/vue-tutorial.html)
菜鸟教程里面有基本的vue方法，可以简单借鉴

## 四、Weex

#### What is Weex?
> Weex 是一个使用 Web 开发体验来开发高性能原生应用的框架。
<br><br>Weex 致力于使开发者能基于当代先进的 Web 开发技术，使用同一套代码来构建 Android、iOS 和 Web 应用。具体来讲，在集成了 WeexSDK 之后，你可以使用 JavaScript 和现代流行的前端框架来开发移动应用。
<br>Weex 的结构是解耦的，渲染引擎与语法层是分开的，也不依赖任何特定的前端框架，目前主要支持 Vue.js 和 Rax 这两个前端框架。
<br>Weex 的另一个主要目标是跟进当代先进的 Web 开发和原生开发的技术，使生产力和性能共存。在开发 Weex 页面就像开发普通网页一样；在渲染 Weex 页面时和渲染原生页面一样。

[网易严选App感受Weex开发（已完结）](https://segmentfault.com/a/1190000011027225)

[Weex Demo](https://github.com/CarGuo/GSYGithubAppWeex)

[Weex从入门到超神](https://www.gaoshilei.com/2017/05/26/weex-1/)

#### 几个关键的命令行
1. `npm run dev` 进行打包（需要在项目文件夹中）
2. `npm run serve` 运行服务
2. `weexpack run ios` 打包iOS项目并模拟器运行
3.  `weexpack build ios` 构建ipa包

#### 几点小规范
1. 方法和css{}前要有空格；
2. 行末不要有多余的空格；
3. 方法行末位不需要分号；

#### weex常规组件渲染流程
[长列表的复用方案](https://github.com/Hanks10100/weex-native-directive/blob/master/Design.md)

在 Weex 的架构中，可以简略的分成三层：【DSL】->【JS Framework】->【原生渲染引擎】。其中 DSL (Domain Specific Language) 指的是 Weex 里支持的上层前端框架，即 Vue 和 Rax。原生渲染引擎就是在 Weex 支持的平台上（Android 或 iOS）绘制原生 UI 的引擎。JS Framework 是桥接并适配 DSL 和原生渲染引擎的一层。

常规组件的渲染过程可以分为如下这几个步骤：

1. 创建前端组件
2. 构建 Virtual DOM
3. 生成“真实” DOM
4. 发送渲染指令
5. 绘制原生 UI

![常规组件渲染过程](./img/常规组件渲染过程.png)

#### Weex原理
[Weex 中别具匠心的 JS Framework](https://github.com/halfrost/Halfrost-Field/blob/master/contents/iOS/Weex/Weex_ingenuity_JS_framework.md)

这一篇解读比较详细，暂时还理解不了，存在以后看...

#### 踩坑记录
挖坑1分钟，踩坑200小时...

1、无法build iOS包，无论是用哪种命令行方式都构建失败，并且日志提示的内容完全不明确。日志如下：

```
18 verbose node v8.12.0
19 verbose npm  v6.4.1
20 error code ELIFECYCLE
21 error errno 2
22 error first-app@1.0.0 build: `webpack --env.NODE_ENV=common`
22 error Exit status 2
23 error Failed at the first-app@1.0.0 build script.
23 error This is probably not a problem with npm. There is likely additional logging output above.
24 verbose exit [ 2, true ]
```

构建错误大概是在升级电脑系统之后产生的，因此重新添加iOS platform或者升级可解决

`weex platform update ios`

或者

`week platform add ios`

2、Xcode真机运行的时候，build成功，但是运行不起来，报错：

`App installation failed. No code signature found.`

看起来是证书的问题...模拟器跑起来没有问题，但是真机调试就会运行不起来，测试了各种方法无果，所以放弃了...以后找到解决办法再来填坑。

3、发现网页版的调试和手机上的调试显示出来的东西是不一样的，不知道是不是weex的bug，所以还是要实际上用真机来做一下测试。

debug模式下发现输出log

`No component config for name:router-view, use default config`

4、作用域问题

``` js
 //在function里this的作用域是当前的函数
 module.openWindow(obj, function (e) {});
 //在箭头函数里，this的作用域是全局的
 module.openWindow(obj, (e) => {});
```

在回调的内部函数内调用外部函数或者变量，最好把回调写为箭头函数，在箭头函数内的作用域是全局的，可以用this直接调用外部的函数或者属性。

使用计算属性时注意
computed 计算属性下调用data里的值或者methods里的方法都需要用this，这里也是一个作用域问题。

5、 在学习的过程中发现weex和mvvm设计模式并没有什么关系...所以这个repo大概是用来搞笑的QAQ

6、 list里面的cell宽度和list宽度一致，并且其高度是自适应的，制定margin也不起作用。

7、 使用内置模块navigator实现导航/使用vue-router实现导航

发现构建之后不能生成跳转页面的js文件，可能是在bottombar的跳转中已使用router导致文件编译方式不一样了？ 最终选择使用vue-router的方式实现，但是又遇到navigation bar不显示的情况。

[使用navigator内置模块实现导航](https://segmentfault.com/a/1190000012629351)

[Weex NavigationBar 设置](https://www.jianshu.com/p/3a15706bd430)

看了很多文档，发现自己执行打包命令之后，在dist文件夹中并没有生成.vue文件所对应的.js文件，应该是我的config文件配置的不对。后来修改了config文件中的`WeexEntry`，再次执行打包，生成了对应的.js文件，代码如下：

```js
const weexEntry = {
  'index': helper.root('entry.js'),
  'CellPage': helper.root('views/HomeView/CellPage.vue')
}
```
问题在于：每一次想要生成对应的.js文件都要手动添加对应的`WeexEntry`吗？应该对应的配置还是不太对，继续研究中...

8、打包相关需要理解的地方：
[webpack中文文档](http://webpack.css88.com/)

9、 这个踩坑教程还挺详细的，也贴在这里...

[WEEX从入门到放肆](https://juejin.im/entry/599d2a06518825243d1efbad)

[iOS 开发者的 Weex 伪最佳实践指北](https://www.jianshu.com/p/43adc80ab60b)

10、 使用`weexpack build ios`命令打包iOS总是会报错，报错信息也很诡异

```
Command failed: xcodebuild -workspace WeexDemo.xcworkspace -scheme WeexDemo -configuration PROD -sdk iphoneos -derivedDataPath build clean build
2018-10-16 20:45:50.314 xcodebuild[2146:684549] [MT] PluginLoading: Required plug-in compatibility UUID ************* for plug-in at path '~/Library/Application Support/Developer/Shared/Xcode/Plug-ins/FuzzyAutocomplete.xcplugin' not present in DVTPlugInCompatibilityUUIDs
2018-10-16 20:45:50.314 xcodebuild[2146:684549] [MT] PluginLoading: Required plug-in compatibility UUID ************* for plug-in at path '~/Library/Application Support/Developer/Shared/Xcode/Plug-ins/Alcatraz.xcplugin' not present in DVTPlugInCompatibilityUUIDs
** BUILD FAILED **
```

看不懂这个报错信息的问题在哪，感觉像是缺少插件之类的，折腾了两天最后该用`npm run ios`的方式跑iOS了并且可以跑起来...

