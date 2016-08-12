require.config({//第一块，配置
    baseUrl: '../../',
    paths: {
        jquery: 'js/jquery/jquery-1.7.2.min',
        avalon: "js/avalon/avalon.shim",//必须修改源码，禁用自带加载器，或直接删提AMD加载器模块
        text: 'js/require/text',
        "kindeditor": "js/jquery/kindeditor-all-min",
        domReady: 'js/require/domReady',
        css: 'js/require/css'
    },

    shim: {
        jquery: {
            exports: "jQuery"
        },
        avalon: {
            exports: "avalon"
        },
        kindeditor: {
            exports: "kindeditor"
        }
    }
});


require(['avalon', "domReady"], function () {//第二块，添加根VM（处理共用部分）

    var model = avalon.define({
        $id: "root",
        tpl_content: "",
        tpl_themeword: "",
        username:"root name"
    })


    require(['modules/people/page/people_all',
        'modules/people/right_list/themeword'
    ], function () {//第三块，加载其他模块
        model.tpl_content = "people_all";
        model.tpl_themeword = "themeword";
    });

    avalon.scan(document.body);

});