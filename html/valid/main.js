require.config({//第一块，配置
    baseUrl: '../../',
    paths: {
        jquery: 'js/jquery/jquery-1.7.2.min',
        validform: 'js/jquery/Validform_v5.3.2_min',
        jqform: 'js/jquery/jquery.form',
        //avalon: "js/avalon/avalon-2.10",//必须修改源码，禁用自带加载器，或直接删提AMD加载器模块
        avalon: "js/avalon/avalon-1.46",//必须修改源码，禁用自带加载器，或直接删提AMD加载器模块
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

        modulec_render: function () {
            console.log("c render====" + rootModel.moduleC1);
            if (avalon.vmodels.c2)
                getPageC(avalon.vmodels.c2, undefined, 22, "c2_page")
        },
        submitForm: function (e) {
            console.log("======jquery form submitForm======");
            if (modelForm.check())
            {
                /*$(this).parents("form").ajaxSubmit(function (data) {
                console.log(JSON.stringify(data));
            });*/

            }
           // e.preventDefault();


        }
    })


   if ($("#form2").length > 0) {
    var modelForm=  $("#form2").Validform({
            btnSubmit:"#btnSub",
        ajaxPost:true,
        beforeSubmit:function(curform){
            return;
//在验证成功后，表单提交前执行的函数，curform参数是当前表单对象。
//这里明确return false的话表单将不会提交;
       }
        });
    }


    avalon.scan(document.body);

});