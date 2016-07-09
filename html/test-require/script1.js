require.config({//第一块，配置
    baseUrl: '../../',
    paths: {
        jquery: 'js/jquery/jquery-1.7.2.min',
        'jquery.ui.widget': 'js/jquery/jquery.ui.widget',//上传插件
        fileupload: 'js/jquery/jquery.fileupload',//上传插件
        layer:'js/layer/layer',
        jqcookie:'js/jquery/jquery.cookie',
        mock: 'js/jquery/mock',
        avalon: "js/avalon/avalon",//必须修改源码，禁用自带加载器，或直接删提AMD加载器模块
        mmHistory: 'js/avalon/mmHistory',
        mmRouter: 'js/avalon/mmRouter',
        mmState: 'js/avalon/mmState',
        domReady: 'js/require/domReady',
        text: 'js/require/text',
        css: 'js/require/css',
        base:'js/page/base'
    },
    priority: ['text', 'css'],
    shim: {
        jquery: {
            exports: "jQuery"
        },
        avalon: {
            exports: "avalon"
        },
        'jquery.ui.widget':{
            deps:['jquery'],
            exports:"jquery.ui.widget"
        },
        fileupload:{
            deps:[ 'jquery','jquery.ui.widget'],
            exports:"fileupload"
        },
        layer:['jquery'],
        base:{
            deps:['jquery','layer'],
            exports:"base"
        },
        mock:{
            exports:"Mock"
        }
    }
});

require([], function() {
    //全局变量
    window.GLOBAL={};
    GLOBAL.moduleDir="./"; //模块目录
    GLOBAL.ajaxUrl="http://localhost/social-web";   //Ajax请求地址根目录
    GLOBAL.token="";
    GLOBAL.curUserID="";
    GLOBAL.curUser={};
    GLOBAL.targetUser={};
    GLOBAL.pageSize=10;

    require(['js/page/mockdata']);
    require(['js/page/indexmockdata']);

    console.log("script 1 load completely");


});



require(["base"], function() {
    console.log("script 1.1 'base' load completely");
});

require(["jquery" ], function() {
    console.log("script 1.2 'jquery' load completely");
});


require(["jquery","base","jqcookie"], function() {
    console.log("script 1.3 'jquery,base' load completely");

    setTimeout(function () {
        console.log("script 1 init data");
        GLOBAL.token="token-"+Math.random();
        $.cookie("token",GLOBAL.token);
    },500)

});

require([ "jquery","base","jqcookie"], function() {
    console.log("script 1.6 '' load completely");
    console.log("script 1.6 == token cookie =="+$.cookie("token"));
});
require([ ], function() {
    console.log("script 1.5 '' load completely");
});

require([ ], function() {
    console.log("script 1.4 '' load completely");
});

