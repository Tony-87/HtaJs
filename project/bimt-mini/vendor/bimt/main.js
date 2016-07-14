/**
 * Created by wxb on 2016/7/14.
 */
require.config({//require 配置
    baseUrl: '',
    paths: {
        jquery: 'vendor/jquery/jquery-1.7.2.min',
        avalon: "vendor/avalon/avalon.shim",//无加载器版本
        domReady: 'vendor/require/domReady',
        text: 'vendor/require/text',
        css: 'vendor/require/css',
        base: 'vendor/bimt/base' //bimt 基本脚本库
    },

    shim: {
        jquery: {exports: "jQuery"},
        avalon: {exports: "avalon"},
        base: {
            deps: ['jquery', 'avalon'],//base依赖jquery,avalon,只引用一个就都有了
            exports: "base"
        }
    }
});