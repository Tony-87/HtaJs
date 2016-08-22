({
		//node r.js -o build.js
		appDir:   './', //项目根目录   bimt-mini
		dir:   './bimtpack', //输出目录，全部文件打包后要放入的文件夹（如果没有会自动新建的） bimt-mini/bimtpack


		baseUrl:   './', //相对于appDir，代表要查找js文件的起始文件夹，下文所有文件路径的定义都是基于这个baseUrl的

<<<<<<< HEAD
	modules :  [//要优化的模块
		{
			name : 'modules/index/main_index'
		}, {
			name : 'modules/people/main_people'
 }
		//说白了就是各页面的入口文件，相对baseUrl的路径，也是省略后缀“.js”
	],
=======
		modules:  [ //要优化的模块
			{
				name: 'modules/index/main_index'
			}, {
				name: 'modules/people/main_people'
			}  
			//说白了就是各页面的入口文件，相对baseUrl的路径，也是省略后缀“.js”
		],
>>>>>>> e117bf3e5bdf1fb6b4fe7b68f6be8d16b9d6207b

		fileExclusionRegExp:   / ^(r | build) \ .js | . *  \ .scss$ /, //过滤，匹配到的文件将不会被输出到输出目录去

		optimizeCss:   'standard',

		removeCombined:  true, //如果为true，将从输出目录中删除已合并的文件

		paths: {
			jquery: 'vendor/jquery/jquery-1.7.2.min',
			avalon: "vendor/avalon/avalon.shim", //无加载器版本
			domReady: 'vendor/require/domReady',
			text: 'vendor/require/text',
			css: 'vendor/require/css',
			base: 'vendor/bimt/base' //bimt 基本脚本库
		},
		shim: {
			jquery: {
				exports: "jQuery"
			},
			avalon: {
				exports: "avalon"
			},
			base: {
				deps: ['jquery', 'avalon'], //base依赖jquery,avalon,只引用一个就都有了
				exports: "base"
			}
		}
 
})