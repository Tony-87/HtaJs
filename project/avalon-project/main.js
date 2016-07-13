/**
 * Created by wxb on 2016/7/13.
 */
require.config({//第一块，配置
    baseUrl: '',
    paths: {
        jquery: 'js/jquery/jquery-1.7.2.min',
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

