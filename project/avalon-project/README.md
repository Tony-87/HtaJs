# avalon 工程化

基于**模块**和**通信**功能，avalon 已经可以轻松对项目实现工程化。

## 介绍

avalon 工程化主要包含三个部分：**项目组织架构**、**模板**和**通信**。

### 项目组织架构

avalon 工程化的项目组织架构建议将业务拆分成多个模块的形式，每个模块中包含各自视图和逻辑。文件的组装也由各模块独立完成。

```html
AVALON-PROJECT
├── fekit_modules           // fekit 模块依赖
├── src                     // 源码
│   ├── scripts             	// 脚本
│   │   ├── ui              		// ui组件
│   │   ├── util            		// 工具代码
│   │   ├── layout          		// 页面结构
│   │   └── pages           		// 业务代码
│   │       ├── page_1                  // 页面1
│   │       └── page_2           		// 页面2
│   │           ├── modules_A				// 模块A
│   │           │   ├── modules_a               // 模块a
│   │           │   │   ├── view 					//视图
│   │           │   │   │	├── view_1.string			//视图1
│   │           │   │   │	└── view_2.string			//视图2
│   │           │   │   ├── index.js
│   │           │   │   └── vmodel.js
│   │           │   ├── index.js
│   │           │   ├── view.string
│   │           │   └── vmodel.js
│   │           ├── modules_B				// 模块B
│   │           │   ├── index.js
│   │           │   ├── view.string
│   │           │   ├── vmodel.js
│   │           │   └── other.js
│   │           ├── index.js    			// 入口文件
│   │           ├── view.string             // 视图
│   │           └── vmodel.js               // 逻辑
│   └── styles              	//样式
├── fekit.config
├── environment.yaml
└── README.md
```

一个独立的模块应当包含以下文件：

- index.js - 入口文件
- view.string - 视图文件
- vmodel.js - vmodel 文件

#### 入口文件

**index.js** 作为入口文件引入模块所需的 view、vmodel、子模块及依赖模块。一个典型的入口文件如下所示：

```
// 引入工具代码
require('biz/avalon-param.js');
require('biz/util.ajax.js');

// 引入公用模块
require('ui/softphone');
require('ui/crumb');
require('ui/tab');
// 引入子模块
require('toolbar');
require('grid');

// 引入 view
avalon.templateCache['content'] = require('view.string');

// 页面逻辑入口
var vmodel = avalon.define({
    $id: 'content',
    content: 'content'
});
```

#### 视图文件

**view.string** 作为视图文件，存放模块所需的 html 模板。一个典型的视图文件如下所示：

```
<div class="l-main-header">
    <!-- 公用模块 -->
    <div ms-include-src="'ui.softphone'" data-include-replace="true"></div>
    <div ms-include-src="'ui.crumb'" data-include-replace="true"></div>
    <div ms-include-src="'ui.tab'" data-include-replace="true"></div>
    <!-- /公用模块 -->
</div>
<div class="m-roomcontrol">
    <!-- 子模块 -->
    <div ms-include-src="'toolbar'" data-include-replace="true"></div>
    <div ms-include-src="'grid'" data-include-replace="true"></div>
    <!-- /子模块 -->
</div>
```

如果模块中存在多个视图，可以使用 view 文件夹存放。

#### vmodel 文件

**vmodel.js** 声明模块的 vmodel。一个典型的vmodel文件如下所示：

```
var vmodel = avalon.define({
    $id: 'module',
    $skipArray: ['urls'],
    urls: {
        hotelInfoUrl: "/baseinfo/api/shotel/detail/",
        productSRoomInfoUrl: "/price/api/product/queryProductSRoomInfo/"
    },
    isOpen: false,
    onOpen: function(){
        vmodel.isOpen = true;
    }
});
```

在业务开发中，如何组织文件结构非常重要。组织得好，模块清晰，大家可以在各自的模块内独立开发，后期修改也很容易。组织得不好，整个工程将显得杂乱无章，很难定位，也非常不利于后期的维护。

### 模板

avalon 的模板系统分为**页内模板**和**外部模板**，分别由 `ms-include` 和 `ms-include-src` 实现。

### `ms-include`

`ms-include` 在实际业务开发中很少使用，此处不展开讲。

### `ms-include-src`

`ms-include-src` 在业务开发中大量使用，是 avalon 工程化模块加载的核心。

`ms-include-src` 用来引入独立于页面的外部模板。`ms-include-src` 要求对应要引入模板的路径。实现如下：

**index.html**：

```html
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>avalon 工程化实践</title>
</head>
<body ms-controller="test">

<h1>avalon 工程化实践</h1>

<div ms-include-src="'view/tpl_1.html'"></div>
<div ms-include-src="view/tpl_{{num}}.html"></div>
<div ms-include-src="url"></div>

<script>
var model = avalon.define({
    $id: "test",

    num: "2",
    url: "view/tpl_3.html",

    text_1: "通过字符串直接引用",
    text_2: "通过插值表达式直接引用",
    text_3: "通过vm属性间接引用"
})
</script>
</body>
</html>
```

**view/tpl_1.html**：
```
<p>{{text_1}}</p>
```

**view/tpl_2.html**：
```
<p>{{text_2}}</p>
```

**view/tpl_3.html**：
```
<p>{{text_3}}</p>
```

`ms-include-src` 所在标签上还可以绑以下属性：

- `data-include-loaded`：指定一个回调，该回调在模板加载后触发。**注意**：只是在模板加载后触发，此时和扫描结束与否无关。
- `data-include-rendered`：指定一个回调，该回调在模板扫描后触发。**注意**：只是在该模板扫描结束后触发，此时和该模板的子模板的扫描结束与否无关。
- `data-include-replace`：值为 `true` 时，加载模板后自动替代掉其原父容器节点。

#### `avalon.templateCache`

`avalon.templateCache` 是 avalon 模板的缓存池。所有 `ms-include-src` 加载的模板都会缓存在这里，从而有效地减少请求数。在实际业务开发中，我们通常会事先把模板加载过来，然后缓存在 `avalon.templateCache` 中。以公司 fekit 下开发为例：

上层 view：

```html
<div ms-controller="aaa">
    <div ms-include-src="content"></div>
</div>
```

index.js：

```
avalon.templateCache['tpl'] = require('tpl.string');

var vmodel = avalon.define({
    $id: 'aaa',
    content: 'tpl'
});
```

#### 注意

`ms-include` 和 `ms-include-src` 的属性值默认都是对应 VM 的一个属性，当作是一个变量，如果想直接使用字符串，那么需要使用双重引号。

### 通信

avalon 提供了 `$fire` 和 `$watch` 方法来解决模块间的通信问题，并提供了三种通信方式：
- 向模块上层通信（`up`）
- 向模块下层通信（`down`）
- 向全局模块通信（`all`）

avalon 中关于模块层级是由模块对应的 `ms-controller` 在 dom 中所处层级决定的。因此，在使用向上传播 `up` 和向下传播 `down` 时，要求对应的 vmodel 已经绑到 dom 上。因为 `up` 和 `down` 的意义是在 dom 树层级中的向上和向下。如果无法保证对应的 vmodel 已经绑到 dom 上，可以使用 `all` 向全局广播，`all` 会向已存在的所有 vmodel 广播，而并不关心它是否已绑定到 dom 上。

演示如下：

```html
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>avalon 工程化实践</title>
<link rel="stylesheet" href="prd/styles/pages/common.css">
</head>
<body class="ms-controller" ms-controller="ancestor">

    <h3>avalon vm.$fire的升级版 </h3>
    <button type="button" ms-click="click">capture</button>
    <div ms-controller="parent">
        <button type="button" ms-click="click">broadcast</button>
        <div ms-controller="son">
            <button type="button" ms-click="click">bubble</button>
        </div>
    </div>

    <script src="prd/scripts/pages/common.js"></script>
    <script>
        avalon.define("ancestor", function(vm) {
            vm.aaa = '1111111111'
            vm.$watch("aaa", function(v) {
                avalon.log(v)
                avalon.log("ancestor.aaa事件被触发了")
            })
            vm.click = function() {
                avalon.log("向下广播")
                vm.$fire("down!aaa", "capture")
            }
        })
        avalon.define("parent", function(vm) {
            vm.text = "222222222"
            vm.aaa = '3333333333'
            vm.$watch("aaa", function(v) {
                avalon.log(v)
                avalon.log("parent.aaa事件被触发了")
            })
            vm.click = function() {
                console.log("全局扩播")
                vm.$fire("all!aaa", "broadcast")
            }
        })
        avalon.define("son", function(vm) {
            vm.$watch("aaa", function(v) {
                avalon.log(v)
                avalon.log("son.aaa事件被触发了")
            })
            vm.click = function() {
                console.log("向上冒泡")
                vm.$fire("up!aaa", "bubble")
            }
        })
    </script>
</body>
</html>
```

在业务开发中，avalon 通信带来的好处显而易见，各模块可以在各自内部接受通知并完成后续操作。比如在公司 fekit 下开发，我们可以避免通过 `module.exports` 和 `require` 的方式操作模块，从而对模块解耦。

## 示例

以公司酒店 QTA 项目为例，提供一个用于展示的 demo，需要 fekit 环境。命令行运行：

```
fekit server -n
```

浏览器中访问 `127.0.0.1` 即可看到示例。

## 参考

**avalonApp**： http://gitlab.corp.qunar.com/jifeng.yao/avalonapp/tree/master

**模板引用 | avalon 系列教程**： http://www.html-js.com/article/Avalon-tutorial-13-template

**属性监听与模块通信 | avalon 系列教程**： http://www.html-js.com/article/Avalon-tutorial-15-property-monitoring-and-communication-module
