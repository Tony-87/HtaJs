require.config({//第一块，配置
    baseUrl: '../../',
    paths: {
        jquery: 'js/jquery/jquery-1.7.2.min',
        validform: 'js/jquery/Validform_v5.3.2_min',
        jqform: 'js/jquery/jquery.form',
        //avalon: "js/avalon/avalon-2.10",//必须修改源码，禁用自带加载器，或直接删提AMD加载器模块
        avalon: "js/avalon/avalon.shim",//必须修改源码，禁用自带加载器，或直接删提AMD加载器模块
        text: 'js/require/text',
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
        validform: ['jquery'],
    }
});


require(['avalon', "domReady", "jquery", "validform", "jqform"], function () {//第二块，添加根VM（处理共用部分）

    avalon.templateCache["empty"] = "&nbsp;"
    var model = avalon.define({
        $id: "root",
        data_list: [],
        fill_data1: function () {
           // model.data_list=[];
            model.data_list = [{"dynamicData": {"id": 1, "title": "感冒喝水好不好"}, "id": 4, "type": 12},
                {"dynamicData": {"id": 1, "title": "请你回答我的问题好不好?"}, "id": 7, "type": 22},
                {"dynamicData": {"id": 2, "title": "我是论文二?"}, "id": 44, "type": 13}];
        },
        fill_data2: function () {
           // model.data_list=[];
            model.data_list = [{"dynamicData": {"id": 2, "title": "我是论文一"}, "id": 4, "type": 13},
                {"dynamicData": {"id": 2, "title": "我是问题一?"}, "id": 7, "type": 23},
                {"dynamicData": {"id":96, "title": "我是论文二"}, "id": 78, "type": 13},
                {"dynamicData": {"id": 22, "title": "我是问题二?"}, "id": 77, "type": 23}];
        },
        commentThesis:function(el){
            $("#comment_"+el.id).text("我是加载出来的论文评论,动态ID:"+el.id+",论文ID:"+el.dynamicData.id);
        },
        commentQuestion:function(el){
            $("#comment_"+el.id).text("我是加载出来的问题评论,动态ID:"+el.id+",问题ID:"+el.dynamicData.id);
        }

    })

    model.data_list = [{"dynamicData": {"id": 3, "title": "感冒喝水好不好"}, "id": 4, "type": 12},
        {"dynamicData": {"id": 3, "title": "请你回答我的问题好不好?"}, "id": 7, "type": 22}];
    avalon.scan(document.body);

});