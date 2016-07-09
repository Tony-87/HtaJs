require.config({//第一块，配置
    baseUrl: '',
    paths: {
        jquery: 'js/jquery/jquery-1.7.2.min',
        'jquery.ui.widget': 'js/jquery/jquery.ui.widget',//上传插件222
        fileupload: 'js/jquery/jquery.fileupload',//上传插件
        layer: 'js/layer/layer',
        jqcookie: 'js/jquery/jquery.cookie',
        mock: 'js/jquery/mock',
        jqform:'js/jquery/jquery.form',
        jqpage: 'js/jquery/jquery.page',
        avalon: "js/avalon/avalon.shim",//必须修改源码，禁用自带加载器，或直接删提AMD加载器模块
        mmHistory: 'js/avalon/mmHistory',
        mmRouter: 'js/avalon/mmRouter',
        mmState: 'js/avalon/mmState',
        domReady: 'js/require/domReady',
        text: 'js/require/text',
        css: 'js/require/css',
        base: 'js/page/base'
    },
    priority: ['text', 'css'],
    shim: {
        jquery: {
            exports: "jQuery"
        },
        avalon: {
            exports: "avalon"
        },
        'jquery.ui.widget': {
            deps: ['jquery'],
            exports: "jquery.ui.widget"
        },
        fileupload: {
            deps: ['jquery', 'jquery.ui.widget'],
            exports: "fileupload"
        },
        jqpage: {
            deps: ['jquery'],
            exports: "jqpage"
        },
        base: {
            deps: ['jquery'],
            exports: "base"
        },
        layer: ['jquery'],
        mock: {
            exports: "Mock"
        }
    }
});


require([], function () {
    //全局变量
    window.GLOBAL = {};
    GLOBAL.moduleDir = "./"; //模块目录
    GLOBAL.ajaxUrl = "http://localhost:8082/test_api";   //Ajax请求地址根目录
    GLOBAL.token = "abc";
    GLOBAL.curUserID = "";

    require(['js/page/mockdata']);
    require(['js/page/indexmockdata']);
});


