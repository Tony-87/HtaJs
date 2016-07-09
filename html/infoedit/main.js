require.config({//第一块，配置
    baseUrl: '../../',
    paths: {
        jquery: 'js/jquery/jquery-1.7.2.min',
        //avalon: "js/avalon/avalon-2.10",//必须修改源码，禁用自带加载器，或直接删提AMD加载器模块
        avalon: "js/avalon/avalon-1.46",//必须修改源码，禁用自带加载器，或直接删提AMD加载器模块
        text: 'js/require/text',
        "kindeditor": "js/jquery/kindeditor-all-min",
        domReady: 'js/require/domReady',
        css: 'js/require/css'
    },
    priority: ['text', 'css'],
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
    avalon.log("加载avalon完毕，开始构建根VM与加载其他模块")
    avalon.templateCache["empty"] = "&nbsp;"
    var model = avalon.define({
        $id: "root",
        header: "这是根模块，用于放置其他模块都共用的东西，比如<b>用户名</b>什么的",
        footer: "页脚消息",
        data_list: [{degree: 1, id: 1, beginDate: "2014-08"}, {degree: 2, id: 2, beginDate: "2017-05"}],
        year_list:[]
    })
    //avalon.scan(document.body)

    model.data_list.forEach(function (el) {
//        el.beginYear = 2017;
el.beginYear=el.beginDate.substr(0,4);
        el.beginMonth=el.beginDate.substr(5,2);
    })


    for(var i=1990;i<2018;i++)
    {
        model.year_list.push(i);
    }

    avalon.scan(document.body);

});