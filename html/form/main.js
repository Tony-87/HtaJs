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
        register:register,
        sendCode:sendCode

    })
    var formObj=$("#regForm");
    var  formValid=formObj.Validform();

    function register()
    {

        if(formValid.check())
        {
            formObj.ajaxSubmit(function (strData) {

                var jsonData = JSON.parse(strData);
                if (jsonData.code == 200) {
                    //完成后执行
                }
                else
                {
                    layer.msg(jsonData.message);
                }
            });
        }
    }

    function sendCode()
    {

        if(formValid.check(false,$("[name='loginName']")))
        {
            formObj.ajaxSubmit(function (strData) {

                var jsonData = JSON.parse(strData);
                if (jsonData.code == 200) {
                    //完成后执行
                }
                else
                {
                    layer.msg(jsonData.message);
                }
            });
        }
    }

    avalon.scan(document.body);

});